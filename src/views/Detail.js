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
  Text,
} from "@nextui-org/react";

import CharacterDetail from "../component/CharacterDetail";
import PlanetDetail from "../component/PlanetDetail";
import VehicleDetail from "../component/VehicleDetail";

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
    <Container fluid gap={0}>
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

      <Row>
        <Col justify="center" align="center" >
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
            
          </Button.Group>
          <Button.Group>
          <a
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-heart-fill mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-heart mt-1"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            )}
          </a>
          </Button.Group>
        </Col>
      </Row>
    </Container>
  );
}
Detail.propTypes = {
  match: PropTypes.object,
};
