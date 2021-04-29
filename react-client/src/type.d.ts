type Name = {
  name: string
  amount: number
}

type SortOrder = {
  [names: string]: string
  [amount: string]: string
}

type SortingState = {
  selectedColumn: string
  sortOrder: ISortOrder
}

type NameState = {
    error: null | string,
    status: string,
    names: Name[],
}

type Params = {
  column: string,
  order: string
}