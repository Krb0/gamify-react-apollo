import { gql } from "@apollo/client";

export const ALL_GAMES = gql`
  query {
    games {
      name
      backgroundImage
      id
    }
  }
`;
export const UPCOMING_GAMES = gql`
  query getUpcoming($limit: Int) {
    upcomingGames(limit: $limit) {
      name
      backgroundImage
      id
    }
  }
`;

export const FIND_GAME = gql`
  query findGame($id: Int) {
    game(id: $id) {
      name
      backgroundImage
      description
      rating
      id
    }
  }
`;
