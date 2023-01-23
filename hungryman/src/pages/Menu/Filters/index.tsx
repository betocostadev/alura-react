import filters from 'utils/filters.json'
import styles from './Filters.module.scss'
import classNames from 'classnames'

type IOption = typeof filters[0]

interface Props {
  filter: number | null
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

const Filters = ({ filter, setFilter }: Props) => {
  const selectFilter = (option: IOption) => {
    if (filter === option.id) return setFilter(null)
    return setFilter(option.id)
  }

  return (
    <div className={styles.filters}>
      {filters.map((opt) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: filter === opt.id,
          })}
          key={opt.id}
          onClick={() => selectFilter(opt)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export default Filters
