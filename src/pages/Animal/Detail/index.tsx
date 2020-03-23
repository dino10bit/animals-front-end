/* eslint-disable complexity */
import React, { FC } from 'react'
import nl2br from 'react-nl2br'
import { RouteComponentProps } from 'react-router'
import { message, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { useAnimalDetail } from 'modules/animal/hooks/useAnimalDetail'
import { useDeleteAnimal } from 'modules/animal/hooks/useDeleteAnimal'
import { H1 } from 'components/Typography/H1'
import { Loader } from 'components/Loader'
import { ErrorAlert } from 'components/ErrorAlert'
import { Button } from 'components/Button'
import { useMe } from 'modules/auth/hooks/useMe'
import { DetailContainer, ControlButtonsContainer } from './styled'

const { confirm: antConfirm } = Modal

export const COMPONENT_DELETE_ANIMAL_TEST_ID = 'component-delete-post'
export const COMPONENT_EDIT_ANIMAL_TEST_ID = 'component-edit-animal'
export const ANIMAL_DETAIL_TEST_ID = 'detail-animal'

export const DetailPage: FC<RouteComponentProps<{
  animalId: string
}>> = ({ match, history }) => {
  const animalId = Number(match.params.animalId)
  const { data, loading, error: loadingError } = useAnimalDetail({ animalId })
  const { data: userData, loading: isLoadingUser } = useMe()
  const [deleteAnimal, { loading: isDeleting }] = useDeleteAnimal()

  if (loadingError) {
    return <ErrorAlert>{loadingError.message}</ErrorAlert>
  }

  if (loading || isLoadingUser) {
    return <Loader />
  }

  const handleDeleteAnimal = () => {
    antConfirm({
      title: 'Are you sure delete this animal?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        try {
          await deleteAnimal({ variables: { id: Number(data.animalDetail.id) } })
          history.push('/')
        } catch (error) {
          await message.error(error.message)
        }
      },
    })
  }

  return (
    <div data-testid={ANIMAL_DETAIL_TEST_ID}>
      <DetailContainer>
        <H1>{data.animalDetail.name}</H1>
        <p>{nl2br(data.animalDetail.species)}</p>
        <img alt="image" src={data.animalDetail.uri} style={{height: 300}} />
      </DetailContainer>

      {userData?.me && userData.me.id === data.animalDetail.user.id && (
        <ControlButtonsContainer>
          <Link to={`/animal/${data.animalDetail.id}/edit`}>
            <Button data-testid={COMPONENT_EDIT_ANIMAL_TEST_ID} type="primary">
              edit animal
            </Button>
          </Link>
          <Button
            data-testid={COMPONENT_DELETE_ANIMAL_TEST_ID}
            onClick={handleDeleteAnimal}
            disabled={isDeleting}
            type="danger"
          >
            {isDeleting ? 'deleting animal...' : 'delete animal'}
          </Button>
        </ControlButtonsContainer>
      )}
    </div>
  )
}
