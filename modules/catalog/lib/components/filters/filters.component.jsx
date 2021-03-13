import TextInput from 'components/inputs/text/text.component.jsx'

import FilterIcon from '@material-ui/icons/FilterListOutlined';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';

import style from './filters.module.scss'

const Filters = () => {
  return (
    <div className={style.filters}>
      <div className={style.quick_search}>
        <TextInput placeholder={"Quick Search"}>
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