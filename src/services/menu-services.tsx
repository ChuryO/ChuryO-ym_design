import gql from "graphql-tag";

export default class MenuServices {
  _apiBase = "http://wp-react.stronazen.pl/graphql";

  POSTS_SEARCH_QUERY = gql`
    {
      menus {
        nodes {
          menuItems {
            edges {
              node {
                label
                url
              }
            }
          }
        }
      }
    }
  `;

  getResource = async () => {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}, received ${res.status}`
      );
    }
    return await res.json();
  };

  getMenu = async () => {
    const res = await this.getResource();
    res.results.map(this._transformMenu);
    // .slice(0, 5);
  };

  _transformMenu = () => {
    return;
  };
}
