import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { FormikHelpers } from 'formik'
import { message } from 'antd'
import { H1 } from 'components/Typography/H1'
import { Loader } from 'components/Loader'
import { ErrorAlert } from 'components/ErrorAlert'
import { IAnimalFormValues, AnimalForm } from 'modules/animal/forms/Animal'
import { useAnimalDetail } from 'modules/animal/hooks/useAnimalDetail'
import { useUpdateAnimal } from 'modules/animal/hooks/useUpdateAnimal'

export const ANIMAL_EDIT_TEST_ID = 'edit-animal'

export const EditAnimalPage: FC<RouteComponentProps<{
  animalId: string
}>> = ({ match, history }) => {
  const animalId = Number(match.params.animalId)
  const { data, loading, error: loadingError } = useAnimalDetail({ animalId })
  const [updateAnimal] = useUpdateAnimal()

  if (loadingError) {
    return <ErrorAlert>{loadingError.message}</ErrorAlert>
  }

  if (loading) {
    return <Loader />
  }

  const handleSubmit = async (
    values: IAnimalFormValues,
    { setSubmitting }: FormikHelpers<IAnimalFormValues>
  ) => {
    try {
      const result = await updateAnimal({
        variables: { data: { id: animalId, ...values } },
      })
      if (result) {
        history.push(`/animal/${result.data.updateAnimal.id}`)
      }
    } catch (error) {
      setSubmitting(false)
      await message.error(error.message)
    }
  }

  return (
    <div data-testid={ANIMAL_EDIT_TEST_ID}>
      <H1>Edit Animal</H1>
      <AnimalForm
        handleSubmit={handleSubmit}
        initialValues={{
          id: animalId,
          name: data.animalDetail.name,
          species: data.animalDetail.species,
          uri: data.animalDetail.uri
        }}
      />
    </div>
  )
}
