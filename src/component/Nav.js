import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { Navbar, Dropdown } from "@nextui-org/react";

import { StarwarsLogo } from "./StarwarsLogo";

export default function Nav() {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;
  return (
    <Navbar height={"100px"} variant="sticky">
      <Navbar.Brand
        css={{
          "@xs": {
            w: "15%",
          },
          "@sm": {
            w: "15%",
          },
          "@md": {
            w: "15%",
          },
          "@lg": {
            w: "15%",
          },
          "@xl": {
            w: "15%",
          },
        }}
      >
        <Link to="/">
          <StarwarsLogo />
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Dropdown placement="bottom-right">
            <Dropdown.Button
              shadow
              color="warning"
              auto
              css={{ color: "white" }}
            >
              Favoritos
            </Dropdown.Button>
            <Dropdown.Menu>
              {favorites.map((fav) => {
                return (
                  <Dropdown.Item key={fav.name}>
                    <svg
                      onClick={() => {
                        actions.delFavorites(fav.name);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                      css={{ d: "flex-end" }}
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                    {"   "}
                    <Link to={`/${fav.clase}/${fav.id}`}>{fav.name} </Link>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
