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
  children: string
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  onClick?: () => void
} & ButtonTypes

export const Button = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={ButtonStyle.btn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
