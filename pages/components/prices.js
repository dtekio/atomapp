import React from "react";
import { Icon, Table, Button } from "semantic-ui-react";

const PriceGroup = () => (
  <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan="2"></Table.HeaderCell>
        <Table.HeaderCell>Эконом</Table.HeaderCell>
        <Table.HeaderCell>Стандарт</Table.HeaderCell>
        <Table.HeaderCell>Премиум</Table.HeaderCell>
      </Table.Row>

      <Table.Row>
        <Table.HeaderCell>4990 тг</Table.HeaderCell>
        <Table.HeaderCell>7490 тг</Table.HeaderCell>
        <Table.HeaderCell>9900 тг</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Доступ ко всем материалам</Table.Cell>
        <Table.Cell textAlign="center">
          <Icon color="green" name="checkmark" size="large" />
        </Table.Cell>
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Доступ к пробникам с решением</Table.Cell>
        <Table.Cell textAlign="center">
          <Icon color="green" name="checkmark" size="large" />
        </Table.Cell>
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Доступ к легким и трудным заданиям</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Построение целей и задач</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell />
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Консультация с экспертом</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell />
        <Table.Cell textAlign="center"><Icon color="green" name="checkmark" size="large" /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell textAlign="center"><Button secondary>Купить</Button></Table.Cell>
        <Table.Cell textAlign="center"><Button primary inverted>Купить</Button></Table.Cell>
        <Table.Cell textAlign="center"><Button primary>Купить</Button></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default PriceGroup;
