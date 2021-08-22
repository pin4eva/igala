import { gql } from "@apollo/client";

export const GET_ARTICLES_BY_SLUG = gql`
  query ArticleSlug($slug: String) {
    articles(where: { slug: $slug }) {
      id
      createdAt
      title
      slug
      description
      content
      banner
      image {
        url
      }
      category {
        name
        slug
      }
    }
  }
`;

export const GET_ARTICLES_BY_CATEGORY = gql`
  query ArticlesByCategory($slug: String) {
    articles(where: { category: { slug: $slug } }) {
      id
      createdAt
      title
      slug
      description
      content
      banner
      image {
        url
      }
      category {
        name
        slug
      }
    }
  }
`;

export const GET_ARTICLES = gql`
  query {
    articles(sort: "createdAt:DESC") {
      id
      createdAt
      title
      slug
      description
      banner
      image {
        url
      }
      category {
        name
        slug
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  {
    categories {
      name
      slug
    }
  }
`;
