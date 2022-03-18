import { gql } from "@apollo/client";

export const ALL_PLATFORMS = gql`
  query {
    platforms {
      id
      name
    }
  }
`;
