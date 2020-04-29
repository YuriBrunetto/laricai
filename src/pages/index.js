import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Categories from '../components/Categories'
import Establishments from '../components/Establishments'

const IndexPage = () => (
  <Layout>
    <SEO title="Laricaí" />

    <Categories />
    <Establishments />
  </Layout>
)

export default IndexPage
