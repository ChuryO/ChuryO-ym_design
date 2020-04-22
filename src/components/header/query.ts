import gql from "graphql-tag";

export const MENU_QUERY = gql`
  query MenuItems{
    menuItems(where: { location: TOP_MENU }) {
      nodes {
        label
        url
      }
    }
  }
`;
