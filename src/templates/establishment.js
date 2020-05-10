import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Section from '../components/Section'
import HeaderEstablishment from '../components/HeaderEstablishment'

const EstablishmentPage = ({ data: { markdownRemark } }) => {
  const {
    frontmatter: { categories, title, address, phone, whatsapp },
  } = markdownRemark

  return (
    <Layout internal>
      <SEO title={title} />

      <HeaderEstablishment
        categories={categories}
        title={title}
        address={address}
      />

      <Section title="Cardápio">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fugiat
          accusantium, sint placeat architecto corrupti accusamus quibusdam,
          voluptates error rerum recusandae quos autem incidunt quisquam
          deserunt a ipsa omnis nostrum!
        </p>
      </Section>

      <Section title="Onde entrega">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          exercitationem in id veniam numquam cupiditate recusandae, dolorum
          animi modi, tempora perspiciatis vero doloribus, nostrum commodi ipsum
          ducimus soluta quaerat sint?
        </p>
      </Section>

      <Section title="Contato">
        <a href={`tel:+55${phone}`} title={`Ligar para ${title}`}>
          {phone}
        </a>
        <a href={`tel:+55${whatsapp}`} title={`Ligar para ${title}`}>
          {whatsapp}
        </a>
      </Section>
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
      }
    }
  }
`

export default EstablishmentPage
