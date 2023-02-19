import { gql } from "@apollo/client";

export const getNews = gql`
  query getNews {
    newses {
      title
      id
      slug
      description
      coverPhoto {
        url
      }
    }
  }
`;

export const getTrendNews = gql`
  query MyQuery {
    newses(where: { isTrend: true }) {
      title
      id
      slug
      description
      coverPhoto {
        url
      }
    }
  }
`;

export const getOneNews = gql`
  query getOnNews($slug: String!) {
    newses(where: { slug: $slug }) {
      title
      id
      slug
      description
      coverPhoto {
        url
      }
    }
  }
`;
