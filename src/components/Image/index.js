import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
  const { establishmentImage } = useStaticQuery(graphql`
    query {
      establishmentImage: file(relativePath: { eq: "lamb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 374, maxHeight: 212) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={establishmentImage.childImageSharp.fluid} />
}

export default Image
