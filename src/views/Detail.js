import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { Link, useParams } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

import CharacterDetail from "../component/CharacterDetail";
import PlanetDetail from "../component/PlanetDetail";
import VehicleDetail from "../component/VehicleDetail";
import { HeartIcon } from "../component/HeartIcon";

export default function Detail() {
  const { store, actions } = useContext(Context);
  const [details, setDetails] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const { clase, theid } = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    let favorites = [...store.favorites];
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      favorites.push({
        name: details.name,
        url: details.url,
        clase: clase,
        id: theid,
      });
    } else {
      favorites = favorites.filter((item) => item.name !== details.name);
    }
    actions.setFavorites(favorites);
  };

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${clase}/${theid}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Error al cargar los datos");
        }
      })
      .then((data) => {
        setDetails(data.result.properties);
      });
  }, []);

  useEffect(() => {
    for (let item of store.favorites) {
      console.log(item);
      if (item.name === details.name) setIsFavorite(true);
      else setIsFavorite(false);
    }
  }, [details, isFavorite]);

  return (
    <Container gap={0}>
      <Row gap={1}>
        <Col justify="center" align="center">
          <Image
            css={{ w: "100%", h: "600px" }}
            src={
              clase === "people"
                ? `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`
                : `https://starwars-visualguide.com/assets/img/${clase}/${theid}.jpg`
            }
          />
        </Col>
        <Col>
          {clase === "people" && <CharacterDetail details={details} />}
          {clase === "planets" && details.name && (
            <PlanetDetail details={details} />
          )}
          {clase === "vehicles" && details.name && (
            <VehicleDetail details={details} />
          )}
        </Col>
      </Row>
      <Spacer y={1} />
      <Row>
        <Col justify="center" align="center">
          <Button.Group color="warning">
            <Button shadow color="warning" auto>
              <Link to="/">
                <Text
                  css={{ color: "white" }}
                  size={16}
                  weight="bold"
                  transform="uppercase"
                >
                  Volver al inicio
                </Text>
              </Link>
            </Button>
            <Button
              auto
              color="error"
              icon={<HeartIcon fill="currentColor" filled />}
              onClick={(e) => {
                handleClick(e);
              }}
            />
          </Button.Group>
        </Col>
      </Row>
    </Container>
  );
}
Detail.propTypes = {
  match: PropTypes.object,
};
