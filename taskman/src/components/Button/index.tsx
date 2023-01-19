import ButtonStyle from './ButtonStyle.module.scss'
// const buttonStyles = {
//   border: 'none',
//   borderRadius: '20%',
//   margin: '10px',
//   padding: '10px',
//   fontSize: '1.2rem',
// }

const Button: React.FC<{ children: any; type?: any }> = ({
  children,
  type,
}) => {
  return (
    <button className={ButtonStyle.btn} type={type ? type : 'button'}>
      {children}
    </button>
  )
}

export default Button
