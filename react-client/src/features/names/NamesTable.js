import React, { useState, useEffect } from 'react'
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
      names: 'ASC',
      amount: 'DESC',
    },
  })

  function sortTable(column) {
    setSorting({
      ...sorting,
      selectedColumn: column,
      sortOrder: {
        ...sorting.sortOrder,
        [column]: sorting.sortOrder[column] === 'ASC' ? 'DESC' : 'ASC',
      },
    })

    // Note: I know it is a bad practice to do so many API calls.
    // But, I am trying to show my skills also with Redux, Node & Postgres.
    dispatch(
      fetchNames({
        column,
        order: sorting.sortOrder[column],
      })
    )
  }

  useEffect(() => sortTable('names'), [])

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
        {names.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </DataTable>
  )
}
