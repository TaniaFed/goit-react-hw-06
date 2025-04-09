import style from './SearchBox.module.css'
export default function SearchBox({ value, onSearch }) {
  return (
    <div className={style.search}>
      <p className={style.label}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
