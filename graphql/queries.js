import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
query {
    cases {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_CASES = gql`
query {
    cases {
      data {
        attributes {
          title
          subtitle
          urlSlug
          about
          role
          
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_CASE = gql`
query ($slugUrl: String!) {
    cases(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          subtitle
          urlSlug
          about
          role
        }
      }
    }
  }
`;
export { GET_ALL_CASES, GET_INDIVIDUAL_CASE, GET_ALL_SLUGS };