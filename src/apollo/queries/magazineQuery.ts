import { gql } from "@apollo/client";

export const GET_MAGAZINES = gql`
  query {
    magazines(sort: "date:ASC") {
      id
      issue
      cover {
        url
      }
      title
      date
    }
  }
`;

export const GET_MAGAZINE = gql`
  query ($id: ID!) {
    magazine(id: $id) {
      id

      pdf {
        url
      }
    }
  }
`;
