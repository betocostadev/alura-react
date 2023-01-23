import filters from 'utils/filters.json'
import styles from './Filters.module.scss'

type IOption = typeof filters[0]

const Filters = () => {
  const selectFilter = (option: IOption) => filters[0]
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          className={styles.filters__filter}
          key={filter.id}
          onClick={() => selectFilter(filter)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default Filters
