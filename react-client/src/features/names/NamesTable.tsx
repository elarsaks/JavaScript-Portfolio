import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table as DataTable, ProgressBar } from 'react-materialize'
import { SortButton } from '../../components/TableSortButton'
import { fetchNames } from './namesActions'

const style = {
  dataTable: {
    width: '90vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

export const Table = () => {

  const loadingStatus: string = useSelector((state: any) => state.status)
  const error: null | string = useSelector((state: NameState) => state.error)
  const names: Name[] = useSelector((state: NameState) => state.names)
  const dispatch = useDispatch()

  const [amountSum, setAmountSum] = useState(0)

  const [sorting, setSorting] = useState<SortingState>({
    selectedColumn: 'names',
    sortOrder: {
      names: 'ASC',
      amount: 'DESC',
    },
  })

  function sortTable(column: string) {
    setSorting({
      ...sorting,
      selectedColumn: column,
      sortOrder: {
        ...sorting.sortOrder,
        [column]: sorting.sortOrder[column] === 'ASC' ? 'DESC' : 'ASC',
      },
    })

    dispatch(
      fetchNames({
        column,
        order: sorting.sortOrder[column],
      })
    )
  }

  // Create array of amounts and reduce it into a single value
  function getAmountSum() {
    const sum =
      names.length > 0
        ? names
          .map((name: Name) => name.amount)
          .reduce((accumulator: number, currentvalue: number) => {
            return accumulator + currentvalue
          })
        : 0

    setAmountSum(sum)
  }

  useEffect(() => sortTable('names'), [])
  useEffect(() => getAmountSum(), [names])

  return (
    <DataTable style={style.dataTable} className='centered'>
      <thead>
        <tr>
          <th>
            <SortButton
              isActive={sorting.selectedColumn === 'names'}
              text={`NAMES (Count: ${names.length}) `}
              sortOrder={sorting.sortOrder['names']}
              sortTable={() => sortTable('names')}
            />
          </th>
          <th>
            <SortButton
              isActive={sorting.selectedColumn === 'amount'}
              text={`Amount (Total: ${amountSum}) `}
              sortOrder={sorting.sortOrder['amount']}
              sortTable={() => sortTable('amount')}
            />
          </th>
        </tr>
        {loadingStatus === 'loading' && (
          <tr>
            <td colSpan={2}>
              <ProgressBar />
            </td>
          </tr>
        )}
        {error && (
          <tr>
            <td colSpan={2}>
              <div className='card horizontal'>
                <div className='card-content red-text text-darken-4"'>
                  <p style={{ fontSize: 'large' }}>
                    Error: Oops something went wrong :( Please contact system
                    administrator.
                  </p>
                </div>
              </div>
            </td>
          </tr>
        )}
      </thead>
      <tbody>
        {names.map((item: Name) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </DataTable>
  )
}
