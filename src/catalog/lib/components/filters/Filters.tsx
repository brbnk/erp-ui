import { useEffect, useState } from 'react';
import { TextInput } from 'lib/components/inputs'
import {
  FilterListOutlined,
  AddCircleOutlined,
  Search,
  ArrowUpward,
  ArrowDownward
} from '@material-ui/icons'

import style from './Filters.module.scss'

interface FilterProps {
  quickSearch: (input: string) => void,
  modalState: (modalState: boolean) => void,
  sortFilter: (field: string, value: any) => void
}

interface SortButtonProps {
  selected: boolean,
  field: string,
  text: string,
  sort: (f: string) => void
}

const SortButton = ({ selected, sort, field, text }: SortButtonProps) => {
  return (
    <div
      className={selected !== null ? [style.sort_buttons, style.selected].join(' ') : style.sort_buttons}
      onClick={() => sort(field)}
    >
      <span> { text } </span>
      { selected == null || selected ? <ArrowUpward/> : <ArrowDownward/> }
    </div>
  )
}

const Filters = ({ quickSearch, modalState, sortFilter }: FilterProps) => {
  const [ input, setInput ] = useState<string>('')
  const [ sortByName, setSortByName ] = useState<boolean|null>(null)
  const [ sortByPrice, setSortByPrice ] = useState<boolean|null>(null)

  useEffect(() => {
    quickSearch(input)
  }, [input])

  const sort = (field: string) =>{
    let value: boolean;

    switch(field) {
      case 'name':
        value = sortByName == null ? true : sortByName ? false : null;
        setSortByName(value)
        break;
      case 'price':
        value = sortByPrice == null ? true : sortByPrice ? false : null;
        setSortByPrice(value)
        break
    }

    sortFilter(field, value)
  }

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <div className={style.quick_search}>
          <TextInput placeholder={"Quick Search"} handleInput={setInput} input={input}>
            <Search />
          </TextInput>
        </div>
        <SortButton selected={sortByName} sort={sort} field="name" text="A-Z" />
        <SortButton selected={sortByPrice} sort={sort} field="price" text="R$" />
      </div>
      <div className={style.actions}>
        <AddCircleOutlined onClick={() => modalState(true)}/>
        <FilterListOutlined/>
      </div>
    </div>
  )
}

export default Filters