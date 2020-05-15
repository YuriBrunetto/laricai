import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Section from '../components/Section'
import HeaderEstablishment from '../components/HeaderEstablishment'
import { ContactLinkWrapper } from './styles'

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
        <ContactLinkWrapper>
          <a href={`tel:+55${phone}`} title={`Ligar para ${title}`}>
            <FaPhoneAlt size="1em" /> {phone}
          </a>
        </ContactLinkWrapper>
        <ContactLinkWrapper>
          <a href={`tel:+55${whatsapp}`} title={`Ligar para ${title}`}>
            <FaWhatsapp size="1.2em" /> {whatsapp}
          </a>
        </ContactLinkWrapper>
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
