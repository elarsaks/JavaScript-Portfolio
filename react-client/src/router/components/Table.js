import React, { useState } from 'react'
import { Table as DataTable } from 'react-materialize'
import SortButton from './helpers/SortButton'

const style = {
  dataTable: {
    width: '90vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

export default function Table(props) {
  const [state, setState] = useState({
    selectedColumn: 'names',
    sortOrder: {
      names: true,
      amount: false,
    },
  })

  function sortTable(column) {
    setState({
      ...state,
      selectedColumn: column,
      sortOrder: {
        ...state.sortOrder,
        [column]: !state.sortOrder[column],
      },
    })

    // Call here function actually sorting a table
  }

  return (
    <DataTable style={style.dataTable} className='centered'>
      <thead>
        <tr>
          <th>
            <SortButton
              text='names'
              state={state}
              sortTable={() => sortTable('names')}
            />
          </th>
          <th>
            <SortButton
              text='amount'
              state={state}
              sortTable={() => sortTable('amount')}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.names.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </DataTable>
  )
}
