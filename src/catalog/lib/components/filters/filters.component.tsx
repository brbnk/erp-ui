import style from './filters.module.scss'
import { useEffect, useState } from 'react';

import TextInput from 'components/inputs/text/text.component'

import {
  FilterListOutlined,
  AddCircleOutlined,
  Search
} from '@material-ui/icons'

type FilterProps = {
  filterProducts: (input: string) => void
}

const Filters = ({ filterProducts }: FilterProps) => {
  const [ input, setInput ] = useState<string>('')

  useEffect(() => {
    filterProducts(input)
  }, [input])

  return (
    <div className={style.filters}>
      <div className={style.quick_search}>
        <TextInput placeholder={"Quick Search"} handleInput={setInput} input={input}>
          <Search />
        </TextInput>
      </div>
      <div className={style.actions}>
        <AddCircleOutlined className={style.add}/>
        <FilterListOutlined/>
      </div>
    </div>
  )
}

export default Filters