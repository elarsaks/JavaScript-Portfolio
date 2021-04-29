import { Icon } from 'react-materialize'
interface SortButtonProps {
  isActive: boolean,
  sortOrder: string
  sortTable: () => void,
  text: string,
}

export const SortButton: React.FC<SortButtonProps> = ({
  isActive,
  sortOrder,
  sortTable,
  text
}) => {
  return (
    <a
      className={isActive ? 'blue-text' : 'grey-text text-darken-3'}
      style={{ cursor: 'pointer' }}
      onClick={() => sortTable()}
    >
      {text}
      <Icon>
        {sortOrder === 'ASC' ? 'arrow_upward' : 'arrow_downward'}
      </Icon>
    </a>
  )
}
