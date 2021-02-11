import React, { useState } from 'react'
import { Table as DataTable } from 'react-materialize'
import SortButton from './components/SortButton'

const style = {
  dataTable: {
    width: '90vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

export default function Table(props) {
  const [sorting, setSorting] = useState({
    selectedColumn: 'names',
    sortOrder: {
      names: true,
      amount: false,
    },
  })

  function sortTable(column) {
    setSorting({
      ...sorting,
      selectedColumn: column,
      sortOrder: {
        ...sorting.sortOrder,
        [column]: !sorting.sortOrder[column],
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
              sorting={sorting}
              sortTable={() => sortTable('names')}
            />
          </th>
          <th>
            <SortButton
              text='amount'
              sorting={sorting}
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
