import { ButtonHTMLAttributes } from 'react'
import ButtonStyle from './ButtonStyle.module.scss'
// const buttonStyles = {
//   border: 'none',
//   borderRadius: '20%',
//   margin: '10px',
//   padding: '10px',
//   fontSize: '1.2rem',
// }

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  children: string
  onClick?: () => void
  disabled?: boolean
} & ButtonTypes

export const Button = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={ButtonStyle.btn}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
