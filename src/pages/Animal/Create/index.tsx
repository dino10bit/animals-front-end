import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { message } from 'antd'
import { FormikHelpers } from 'formik'
import { H1 } from 'components/Typography/H1'
import { IAnimalFormValues, AnimalForm } from 'modules/animal/forms/Animal'
import { useCreateAnimal } from 'modules/animal/hooks/useCreateAnimal'

export const ANIMAL_CREATE_TEST_ID = 'create-animal'

export const CreateAnimalPage: FC<RouteComponentProps> = props => {
  const [createAnimal] = useCreateAnimal()

  const handleSubmit = async (
    values: IAnimalFormValues,
    { setSubmitting }: FormikHelpers<IAnimalFormValues>
  ) => {
    console.log(values)
    try {
      const result = await createAnimal({ variables: { data: values } })
      if (result) {
        props.history.push(`/animal/${result.data.createAnimal.id}`)
      }
    } catch (error) {
      setSubmitting(false)
      await message.error(error.message)
    }
  }

  return (
    <div data-testid={ANIMAL_CREATE_TEST_ID}>
      <H1>Create Animal</H1>
      <AnimalForm handleSubmit={handleSubmit} />
    </div>
  )
}
