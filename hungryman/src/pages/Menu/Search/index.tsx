import React, { SetStateAction } from 'react'
import styles from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
  search: string
  setSearch: React.Dispatch<SetStateAction<string>>
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CgSearch color="#4C4D5E" />
    </div>
  )
}

export default Search
