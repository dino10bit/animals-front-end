import { Layout } from 'antd'
import React, { FC } from 'react'
import { AnimalCard } from '../AnimalCard'
import { Select } from '../Dropdown/select'
import { Container } from './styled'

const { Content, Sider } = Layout

export const AnimalsList: FC<any> = () => {
  return (
    <Container>
      <Layout>
        <Sider width={200} style={{background: 'transparent'}}>
          <Select/>
        </Sider>
        <Layout>
          <Content
            style={{
              paddingLeft: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          <AnimalCard/>
          </Content>
        </Layout>
      </Layout>
    </Container>
  )
}
