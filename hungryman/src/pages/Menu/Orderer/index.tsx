import React, { useState } from 'react'
import options from 'utils/order-options.json'
import classNames from 'classnames'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import styles from './Orderer.module.scss'

interface Props {
  order: string
  setOrder: React.Dispatch<React.SetStateAction<string>>
}

const Orderer = ({ order, setOrder }: Props) => {
  const [open, setOpen] = useState(false)
  const nameOrderer =
    order && options.find((option) => option.value === order)?.nome

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
        {options.map((option) => (
          <div
            className={styles.ordenador__option}
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Orderer