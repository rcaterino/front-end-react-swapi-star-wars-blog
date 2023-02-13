import React from 'react'

import { Col, Table } from "@nextui-org/react";


export default function PlanetDetail(details) {
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
            <Table.Column>Descripción del Planeta</Table.Column>
            <Table.Column></Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Diámetro</Table.Cell>
              <Table.Cell>{detail.diameter}</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Período de rotación</Table.Cell>
              <Table.Cell>{detail.rotation_period}</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Período orbital</Table.Cell>
              <Table.Cell>{detail.orbital_period}</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>Población</Table.Cell>
              <Table.Cell>{detail.population}</Table.Cell>
            </Table.Row>
            <Table.Row key="5">
              <Table.Cell>Clima</Table.Cell>
              <Table.Cell>{detail.climate}</Table.Cell>
            </Table.Row>
            <Table.Row key="6">
              <Table.Cell>terreno</Table.Cell>
              <Table.Cell>{detail.terrain}</Table.Cell>
            </Table.Row>
            <Table.Row key="7">
              <Table.Cell>URL</Table.Cell>
              <Table.Cell>{detail.url}</Table.Cell>
            </Table.Row>
            
          </Table.Body>
        </Table>
      </Col>
        
  
    );
  }  