import React, { useState } from 'react'
import options from 'utils/order-options.json'
import classNames from 'classnames'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import styles from './Orderer.module.scss'

type orderOptions = '' | 'portion' | 'qty_persons' | 'price'
interface Props {
  order: orderOptions
  setOrder: React.Dispatch<React.SetStateAction<orderOptions>>
}

const Orderer = ({ order, setOrder }: Props) => {
  const [open, setOpen] = useState(false)
  const nameOrderer =
    order && options.find((option) => option.value === order)?.name

  return (
    <button
      className={classNames({
        [styles.orderer]: true,
        [styles['orderer--active']]: order !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrderer || 'Order by'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.orderer__options]: true,
          [styles['orderer__options--active']]: open,
        })}
      >
        {options.map((option: any) => (
          <div
            className={styles.orderer__option}
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Orderer
