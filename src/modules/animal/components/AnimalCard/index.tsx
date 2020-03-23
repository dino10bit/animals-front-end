import React, { FC, useContext, useState, useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'
import { Col, Row } from 'antd'
import { SEARCH_ANIMALS_BY_SPECIES_QUERY, LIST_ANIMALS_QUERY } from 'modules/animal/gql'
import { Loader } from 'components/Loader'
import { ListAnimals_listAnimals } from '../../gql/__generated__/ListAnimals'
import { AnimalContext } from '../Dropdown/AnimalsContext'
import { Card, CardLink, Meta } from './styled'

export const COMPONENT_ANIMAL_CARD_TEST_ID = 'animal-card-component'

export const AnimalCard: FC<any> = () => {
  const { selectedAnimal } = useContext(AnimalContext)
  const [animalsData, setAnimalsData] = useState()
  const [loadAnimal, { called, loading, data }] = useLazyQuery(SEARCH_ANIMALS_BY_SPECIES_QUERY)
  const [defaultLoadAnimal, defaultResponse] = useLazyQuery(LIST_ANIMALS_QUERY)
  console.log('XXXX - AnimalCard')

  useEffect(() => {
    console.log(selectedAnimal)
    if (!selectedAnimal) {
      defaultLoadAnimal()
      return
    }

    const { name } = selectedAnimal
    loadAnimal({
      variables: { species: name }
    })
  }, [loadAnimal, selectedAnimal, defaultLoadAnimal])

  useEffect(() => {
    if (!data) {
      return
    }
    setAnimalsData(data.animalSearchBySpecies)
  }, [data])

  useEffect(() => {
    if (!defaultResponse.data) {
      return
    }
    setAnimalsData(defaultResponse.data.listAnimals)
  }, [defaultResponse.data])


  if (called && loading) return <Loader/>
  if (!animalsData) return null

  return <div className="site-card-wrapper">
    <Row gutter={16}>
      {animalsData.map((animal: ListAnimals_listAnimals) => (
        <Col span={8} key={animal.id}>
          <Card
            hoverable
            style={{width: 240}}
            cover={<img alt="image" src={animal.uri} style={{height: 140}} />}
            data-testid={COMPONENT_ANIMAL_CARD_TEST_ID}
            key={animal.id}
          >
            <Meta title={animal.name} description={animal.species} />
            <CardLink to={`/animal/${animal.id}`}>Edit</CardLink>
          </Card>
          <br/>
        </Col>
      )
    )}
    </Row>
  </div>
}
