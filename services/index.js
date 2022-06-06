import {request, gql} from "graphql-request";

const graphqlAPI = "https://api-us-east-1.graphcms.com/v2/cl1jl3atp6mi001xf4j1b7kej/master"

export const getPosts = async () => {
  const query = gql`
  query GetPostDetails() {
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

export const getCategoryPosts = async (category) => {
  const query = gql`
  query GetPosts($categories: String! ) {
    posts(where: {categories_every: {name: $categories}}, last: 3) {
      title
      slug
      featuredImage {
        url
      }
      createdAt
    }
  }
  `
  const result = await request(graphqlAPI, query, category);
  return result.posts;
}