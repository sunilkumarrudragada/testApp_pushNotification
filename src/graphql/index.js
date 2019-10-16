import { gql } from "apollo-boost";

export const GET_NAMES = gql`
  query NirvanaAlbumSingles {
    lookup {
        artist(mbid: "5b11f4ce-a62d-471e-81fc-a69a8278c7da") {
        name
        releaseGroups(type: ALBUM) {
          edges {
            node {
              title
              firstReleaseDate
            }
          }
        }
      }
    }
  }
`;
