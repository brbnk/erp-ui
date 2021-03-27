import { useEffect, useState } from 'react';
import { TextInput } from 'lib/components/inputs'
import { FilterListOutlined, AddCircleOutlined, Search } from '@material-ui/icons'

import style from './filters.module.scss'

type FilterProps = {
  quickSearch: (input: string) => void,
  modalState: (modalState: boolean) => void
}

const Filters = ({ quickSearch, modalState }: FilterProps) => {
  const [ input, setInput ] = useState<string>('')

  useEffect(() => {
    quickSearch(input)
  }, [input])

  return (
    <div className={style.filters}>
      <div className={style.quick_search}>
        <TextInput placeholder={"Quick Search"} handleInput={setInput} input={input}>
          <Search />
        </TextInput>
      </div>
      <div className={style.actions}>
        <AddCircleOutlined onClick={() => modalState(true)}/>
        <FilterListOutlined/>
      </div>
    </div>
  )
}

export default Filters