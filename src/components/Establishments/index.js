import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Establishment from '../Establishment'
import { EstablishmentsWrapper, EstablishmentsList } from './styles'

function Establishments({ city }) {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query EstablishmentList {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              address
              phone
              whatsapp
              categories
              city
            }
          }
        }
      }
    }
  `)

  const establishmentList = allMarkdownRemark.edges

  return (
    <EstablishmentsWrapper>
      <div className="common-limiter">
        <h4 className="city">{city}</h4>

        <EstablishmentsList>
          {establishmentList.map(
            (
              {
                node: {
                  fields: { slug },
                  frontmatter: {
                    title,
                    address,
                    phone,
                    whatsapp,
                    categories,
                    city,
                  },
                },
              },
              i
            ) => (
              <Establishment
                key={i}
                title={title}
                address={address}
                phone={phone}
                whatsapp={whatsapp}
                categories={categories}
                city={city}
                slug={slug}
              />
            )
          )}
        </EstablishmentsList>
      </div>
    </EstablishmentsWrapper>
  )
}

Establishments.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Establishments
