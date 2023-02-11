import React, { useContext } from "react";
import { Navbar, Text, Dropdown, Button } from "@nextui-org/react";
import { StarwarsLogo } from "./StarwarsLogo";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function Nav() {
  const { store, actions } = useContext(Context);

  return (
    <Navbar height={"100px"} shouldHideOnScroll variant="sticky">
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
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Button shadow color="warning" auto>
                <Text
                  css={{ color: "white" }}
                  size={16}
                  weight="bold"
                  transform="uppercase"
                >
                  Favoritos
                </Text>
              </Button>
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Aún no selecciona favoritos
              </Text>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}
