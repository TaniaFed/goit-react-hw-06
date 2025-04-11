import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'

import style from './SearchBox.module.css'

export default function SearchBox() {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.filters.name)

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <div className={style.search}>
      <p className={style.label}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={value}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  )
}
