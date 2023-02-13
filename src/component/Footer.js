import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";

export default function Footer() {
  return (
    <footer>
      <Segment color='grey' inverted vertical style={{ padding: "5em 2em" }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4" inverted>
                Desarrollado por: Ricardo Caterino Polini
              </Header>
              <p>
                Aplicación desarrollada con fines educativos, como evaluación
                durante mi participación en el Bootcamp "Fullstack Web
                Developer" en 4Geeks Academy.
              </p>
              <p>
                Para esta tarea, utilizamos la api pública{" "}
                <a
                  href="https://swapi.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SWAPI.
                </a>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    </footer>
  );
}
