import React from 'react'
import { Content } from 'components/Content'
import { Layout } from 'components/Layout'
import { Navigation } from 'components/Navigation'
import { AnimalProvider } from 'modules/animal/components/Dropdown/AnimalsContext'
import { Routes } from 'routes'
import { GlobalStyles } from 'styles'
import 'antd/dist/antd.css'

export const App = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Navigation />
      <AnimalProvider>
        <Content>
          <Routes />
        </Content>
      </AnimalProvider>
    </Layout>
  </>
)
