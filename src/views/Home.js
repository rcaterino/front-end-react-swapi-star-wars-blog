import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Container, Grid, Spacer, Text } from "@nextui-org/react";

import Nav from "../component/Nav";
import Character from "../component/Character";
import Vehicle from "../component/Vehicle";

export default function Home() {
  const { store } = useContext(Context);

  let [characters] = [store.characters];

  return (
    <>
      <Nav />
      <Spacer />
      <Container fluid>
        <Text
          h2
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Personajes
        </Text>
        <Container fluid>
          <Grid.Container gap={1} justify="center">
            {characters.map((item) => {
              return (
                <Character
                  character={item}
                  clase="people"
                  clase2="characters"
                  key={item.uid}
                />
              );
            })}
          </Grid.Container>
        </Container>
      </Container>
      <Spacer />
      <Container fluid>
        <Text
          h2
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Vehículos
        </Text>
        <Container fluid>
          <Grid.Container gap={1} justify="center">
            {characters.map((item) => {
              return <Vehicle vehicle={item} clase="vehicles" />;
            })}
          </Grid.Container>
        </Container>
      </Container>
    </>
  );
}
