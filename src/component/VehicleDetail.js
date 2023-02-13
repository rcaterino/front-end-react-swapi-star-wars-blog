import React from 'react'
import { Col, Table } from "@nextui-org/react";


export default function VehicleDetail(details) {
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
            <Table.Column>Descripción de vehículo</Table.Column>
            <Table.Column></Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Modelo</Table.Cell>
              <Table.Cell>{detail.model}</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Clase</Table.Cell>
              <Table.Cell>{detail.vehicle_class} cms</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Fabricante</Table.Cell>
              <Table.Cell>{detail.manufacturer}</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>Costo</Table.Cell>
              <Table.Cell>{detail.cost_in_credits}</Table.Cell>
            </Table.Row>
            <Table.Row key="5">
              <Table.Cell>Tripulación</Table.Cell>
              <Table.Cell>{detail.crew}</Table.Cell>
            </Table.Row>
            <Table.Row key="6">
              <Table.Cell>Pasajeros</Table.Cell>
              <Table.Cell>{detail.passengers}</Table.Cell>
            </Table.Row>
            <Table.Row key="7">
              <Table.Cell>Longitud</Table.Cell>
              <Table.Cell>{detail.length} pies</Table.Cell>
            </Table.Row>
            <Table.Row key="8">
            <Table.Cell>URL</Table.Cell>
              <Table.Cell>{detail.url}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Col>
      );
}
