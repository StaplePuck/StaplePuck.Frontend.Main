import { gql } from "apollo-boost";

export const LeagueTeamListQuery = gql`
  query getleagues($leagueid: String) {
    leagues(id: $leagueid) {
      id
      name
      fantasyTeams {
        name
        id
      }
    }
  }
`;
