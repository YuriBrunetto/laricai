import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Filters from '../components/Filters'
import Establishments from '../components/Establishments'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Filters />

    <Establishments city="Vale do Caí" />
  </Layout>
)

export default IndexPage
