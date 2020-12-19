import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Window = ({ position }) => {
  const data = useStaticQuery(graphql`
    query {
      ieModal: file(relativePath: { eq: "ie-modal.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      className="w-4/12 h-auto"
      style={{
        position: "absolute",
        float: "left",
        left: position.left,
        top: position.top - 75,
      }}
    >
      <Img fixed={data.ieModal.childImageSharp.fixed} alt="Error Window" />
    </div>
  )
}

export default Window
