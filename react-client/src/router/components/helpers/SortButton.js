import { Button, Icon } from 'react-materialize'

export default function SortButton(props) {
  return (
    <Button
      node='button'
      waves='light'
      className={
        props.state.selectedColumn === props.text
          ? 'blue darken-4'
          : 'blue darken-2'
      }
      onClick={() => props.sortTable()}
    >
      {props.text}
      <Icon right>
        {props.state.sortOrder[props.text] ? 'arrow_upward' : 'arrow_downward'}
      </Icon>
    </Button>
  )
}
