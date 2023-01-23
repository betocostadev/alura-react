import styles from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Type to search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CgSearch color="#4C4D5E" />
    </div>
  )
}

export default Search
