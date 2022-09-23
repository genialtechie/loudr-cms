import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

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
  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          html
          raw
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.post
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.categories
}

export const getCategoryPosts = async (category) => {
  const query = gql`
    query GetPosts($category: String!) {
      posts(where: { categories_some: { name: $category } }, last: 3) {
        title
        slug
        featuredImage {
          url
        }
        createdAt
        excerpt
      }
    }
  `
  const result = await request(graphqlAPI, query, { category })
  return result.posts
}

export const getAllCategoryPosts = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      postsConnection(where: { categories_every: { slug: $slug } }) {
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
  const result = await request(graphqlAPI, query, { slug })
  return result.postsConnection.edges
}

export const getRelatedPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        excerpt
      }
    }
  `
  const result = await request(graphqlAPI, query, { categories, slug })
  return result.posts
}
