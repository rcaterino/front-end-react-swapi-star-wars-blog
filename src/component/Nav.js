import React from "react";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { StarwarsLogo } from "./StarwarsLogo";

export default function Nav() {

  // const collapseItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];

  return (
    <Navbar height={'100px'} variant="sticky">
      
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
        <StarwarsLogo />
        
      </Navbar.Brand>
     
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="lg"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
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
      {/* <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse> */}
    </Navbar>
  );
}
