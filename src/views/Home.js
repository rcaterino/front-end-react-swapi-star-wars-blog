import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Container, Grid, Spacer, Text } from "@nextui-org/react";

import Character from "../component/Character";
import Vehicle from "../component/Vehicle";
import Planet from "../component/Planet";

export default function Home() {
  const { store } = useContext(Context);

  let [characters, vehicles, planets, favorites] = [
    store.characters,
    store.vehicles,
    store.planets,
    store.favorites,
  ];

  return (
    <Container>
      <Spacer />
      <Container>
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
          <Grid.Container gap={2} justify="center">
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
      <Container>
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
          <Grid.Container gap={2} justify="center">
            {vehicles.map((item) => {
              return <Vehicle vehicle={item} clase="vehicles" key={item.uid} />;
            })}
          </Grid.Container>
        </Container>
      </Container>
      <Spacer />
      <Container>
        <Text
          h2
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Planetas
        </Text>
        <Container fluid>
          <Grid.Container gap={2} justify="center">
            {planets.map((item) => {
              return <Planet planet={item} clase="planets" key={item.uid} />;
            })}
          </Grid.Container>
        </Container>
      </Container>
    </Container>
  );
}
