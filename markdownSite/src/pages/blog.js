import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`    
    query{
      allContentfulBlogPost(
        sort: {
          fields: publishedDate,
          order: DESC 
        }
        
        ){
          edges{
            node{
              title
              slug
              # publishedDate(fromNow:true)
              publishedDate(formatString:"MMMM Do, YYYY")
            }
          }
        }
      }
      `)
      
      return (
        <Layout>
      <h2>My Blog</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default BlogPage


















// query {
//   allMarkdownRemark {
//     edges {
//       node {
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           date
//         }
//       }
//     }
//   }
// }

//   return (
//     <Layout>
//       <h2>My Blog</h2>
//       <ol className={blogStyles.posts}>
//         {data.allMarkdownRemark.edges.map(edge => {
//           return (
//             <li className={blogStyles.post}>
//               <Link to={`/blog/${edge.node.fields.slug}`}>
//                 <h3>{edge.node.frontmatter.title}</h3>
//                 <p>{edge.node.frontmatter.date}</p>
//               </Link>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

