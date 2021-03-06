import { gql } from "apollo-boost";

export const QueryGetNHLData = gql`
  query getNHLTeams($teamId: ID) {
    fantasyTeams(id: $teamId) {
      id
      name
      gM {
        externalId
        id
      }
      fantasyTeamPlayers {
        player {
          id
        }
      }
      league {
        season {
          id
          fullName
          teamSeasons {
            team {
              locationName
              fullName
              id
            }
            playerSeasons {
              player {
                id
                fullName
              }
              positionType {
                name
                shortName
              }
            }
          }
        }
      }
    }
  }
`;
