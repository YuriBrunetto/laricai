import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Categories from '../components/Categories'
import { HeaderWrapper } from './styles'

const EstablishmentPage = ({ data }) => {
  const establishment = data.markdownRemark

  return (
    <Layout internal>
      <SEO title={establishment.frontmatter.title} />

      <HeaderWrapper>
        <div id="header-content" className="common-limiter">
          <Categories categories={establishment.frontmatter.categories} />
          <h1>{establishment.frontmatter.title}</h1>
        </div>
      </HeaderWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Establishment($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        address
        categories
        city
        phone
        whatsapp
        date(fromNow: true, locale: "pt-BR")
      }
    }
  }
`

export default EstablishmentPage
