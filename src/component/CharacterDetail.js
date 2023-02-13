import React from "react";

import { Col, Table } from "@nextui-org/react";

export default function CharacterDetail(details) {
  let detail = details.details;
  return (
    <Col>
    <Table
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>Descripción del Personaje</Table.Column>
          <Table.Column></Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Nombre</Table.Cell>
            <Table.Cell>{detail.name}</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Altura</Table.Cell>
            <Table.Cell>{detail.height} cms</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Peso</Table.Cell>
            <Table.Cell>{detail.mass}</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>Color de pelo</Table.Cell>
            <Table.Cell>{detail.hair_color}</Table.Cell>
          </Table.Row>
          <Table.Row key="5">
            <Table.Cell>Color de ojos</Table.Cell>
            <Table.Cell>{detail.eye_color}</Table.Cell>
          </Table.Row>
          <Table.Row key="6">
            <Table.Cell>Año de nacimiento</Table.Cell>
            <Table.Cell>{detail.birth_year}</Table.Cell>
          </Table.Row>
          <Table.Row key="7">
            <Table.Cell>Género</Table.Cell>
            <Table.Cell>{detail.gender}</Table.Cell>
          </Table.Row>
          <Table.Row key="8">
            <Table.Cell>Planeta natal</Table.Cell>
            <Table.Cell>{detail.homeworld}</Table.Cell>
          </Table.Row>
          <Table.Row key="9">
            <Table.Cell>URL</Table.Cell>
            <Table.Cell>{detail.url}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Col>
  );
}
