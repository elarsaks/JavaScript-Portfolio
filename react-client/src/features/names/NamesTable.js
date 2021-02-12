import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table as DataTable } from 'react-materialize'
import SortButton from './NamesTableSortButton'
import { fetchNames } from './namesActions.js'

const style = {
  dataTable: {
    width: '90vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

export default function Table(props) {
  const loadingStatus = useSelector((state) => state.names.status)
  const error = useSelector((state) => state.names.error)
  const names = useSelector((state) => state.names.names)
  const dispatch = useDispatch()

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

    dispatch(
      fetchNames({
        column: sorting.selectedColumn,
        order: sorting.sortOrder[sorting.selectedColumn] ? 'ASC' : 'DESC',
      })
    )
    //console.log(loadingStatus, error, names)
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
