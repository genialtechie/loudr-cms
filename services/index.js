import {request, gql} from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
    {
        postsConnection {
            edges {
              node {
                author {
                  bio
                  name
                  id
                  photo {
                    url
                  }
                }
                createdAt
                excerpt
                title
                slug
                featuredImage {
                  url
                }
                categories {
                  name
                  slug
                }
              }
            }
          }
    }
`
const result = await request(graphqlAPI, query);

return result.postsConnection.edges;
}
