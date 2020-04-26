import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <h1>Laricaí</h1>

    <Link to="/about">About</Link>
  </Layout>
)

export default IndexPage
