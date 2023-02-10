import React, { useEffect, useState } from "react";

import { Grid } from "@nextui-org/react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

import noImageFound from "../img/no_image_available.svg";

export default function Characters({ character, clase, clase2 }) {
  const [image, setImage] = useState(noImageFound);

  function imageDefault(image) {
    var photo = `https://starwars-visualguide.com/assets/img/${clase2}/${character.uid}.jpg`;

    fetch(photo).then((result) => {
      if (result) {
        setImage(photo);
      }
    });
  }

  useEffect(() => {
    imageDefault();
  }, []);

  return (
    <Grid>
      <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header
          css={{ position: "absolute", zIndex: 1, top: 5 }}
        ></Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={image}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text h3 color="black">
                {character.name}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button shadow color="warning" auto>
                  <Text
                    css={{ color: "white" }}
                    size={16}
                    weight="bold"
                    transform="uppercase"
                  >
                    Ver Detalle
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
