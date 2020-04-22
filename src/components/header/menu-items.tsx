import React from "react";
import { Link } from "react-router-dom";
import { MenuItemsQuery } from "../../generated/graphql";

interface Props {
  data: MenuItemsQuery;
}

// @ts-ignore
export const MenuItems: React.FC<Props> = ({ data }) => {
  return (
    !!data.menuItems &&
    // @ts-ignore
    data.menuItems.nodes.map(({ url, label } = item, key) => {
      return (
        <li >
          <Link key={key} to={url}> {label} </Link>
        </li>
      );
    })
  );
};
