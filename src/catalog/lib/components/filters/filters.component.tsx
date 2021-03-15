import TextInput from 'components/inputs/text/text.component.tsx'

import FilterIcon from '@material-ui/icons/FilterListOutlined';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';

import style from './filters.module.scss'
import { useEffect, useState } from 'react';

const Filters = ({ filterProducts }) => {
  const [ input, setInput ] = useState('')

  useEffect(() => {
    filterProducts(input)
  }, [input])

  return (
    <div className={style.filters}>
      <div className={style.quick_search}>
        <TextInput placeholder={"Quick Search"} handleInput={setInput} input={input}>
          <SearchIcon />
        </TextInput>
      </div>
      <div className={style.actions}>
        <AddCircleOutlined className={style.add}/>
        <FilterIcon/>
      </div>
    </div>
  )
}

export default Filters