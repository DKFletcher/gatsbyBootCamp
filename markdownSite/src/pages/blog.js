import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges.map(post => (
    <li>
      <h3>{post.node.frontmatter.title}</h3>
      <h3>{post.node.frontmatter.date}</h3>
    </li>
  ))
  return (
    <Layout>
      <h2>My Blog</h2>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h3>{edge.node.frontmatter.title}</h3>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
