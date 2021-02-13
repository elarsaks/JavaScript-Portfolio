import { Icon } from 'react-materialize'

export default function SortButton(props) {
  return (
    <a
      className={props.isActive ? 'blue-text' : 'grey-text text-darken-3'}
      style={{ cursor: 'pointer' }}
      onClick={() => props.sortTable()}
    >
      {props.text}
      <Icon>
        {props.sortOrder === 'ASC' ? 'arrow_upward' : 'arrow_downward'}
      </Icon>
    </a>
  )
}
