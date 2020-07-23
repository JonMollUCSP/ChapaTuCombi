import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';

function TableSchedule(props) {
  const { items } = props;

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Combi</DataTable.Title>
        <DataTable.Title>Hora de partida</DataTable.Title>
        <DataTable.Title>Hora de llegada</DataTable.Title>
      </DataTable.Header>

      {items && items.map((item) =>
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.bus}</DataTable.Cell>
          <DataTable.Cell>{item.startTime}</DataTable.Cell>
          <DataTable.Cell>{item.goalTime}</DataTable.Cell>
        </DataTable.Row>  
      )}
    </DataTable>
  );
}

export default TableSchedule;
