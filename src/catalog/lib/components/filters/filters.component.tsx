import { useEffect, useState } from 'react';
import { TextInput } from 'lib/components/inputs'
import {
  FilterListOutlined,
  AddCircleOutlined,
  Search,
  ArrowUpward,
  ArrowDownward
} from '@material-ui/icons'

import style from './filters.module.scss'

interface FilterProps {
  quickSearch: (input: string) => void,
  modalState: (modalState: boolean) => void,
  sortFilter: (field: string, value: any) => void
}

const Filters = ({ quickSearch, modalState, sortFilter }: FilterProps) => {
  const [ input, setInput ] = useState<string>('')
  const [ sortByName, setSortByName ] = useState<boolean|null>(null)

  useEffect(() => {
    quickSearch(input)
  }, [input])

  const sort = (field: string) =>{
    switch(field) {
      case 'name':
        let value = sortByName == null ? true : sortByName ? false : null;
        sortFilter(field, value)
        setSortByName(value)
        break;
    }
  }

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <div className={style.quick_search}>
          <TextInput placeholder={"Quick Search"} handleInput={setInput} input={input}>
            <Search />
          </TextInput>
        </div>
        <div
          className={sortByName !== null ? [style.sort_buttons, style.selected].join(' ') : style.sort_buttons}
          onClick={() => sort('name')}
        >
          <span> A-Z </span>
          { sortByName == null || sortByName ? <ArrowUpward/> : <ArrowDownward/> }
        </div>
      </div>
      <div className={style.actions}>
        <AddCircleOutlined onClick={() => modalState(true)}/>
        <FilterListOutlined/>
      </div>
    </div>
  )
}

export default Filters