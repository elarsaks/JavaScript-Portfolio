import { Button, Icon } from 'react-materialize'

export default function SortButton(props) {
  return (
    <Button
      node='button'
      waves='light'
      className={
        props.sorting.selectedColumn === props.text
          ? 'blue darken-4'
          : 'blue darken-2'
      }
      onClick={() => props.sortTable()}
    >
      {props.text}
      <Icon right>
        {props.sorting.sortOrder[props.text] === 'ASC'
          ? 'arrow_downward'
          : 'arrow_upward'}
      </Icon>
    </Button>
  )
}
