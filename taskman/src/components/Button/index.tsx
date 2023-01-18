import ButtonStyle from './ButtonStyle.module.scss'
// const buttonStyles = {
//   border: 'none',
//   borderRadius: '20%',
//   margin: '10px',
//   padding: '10px',
//   fontSize: '1.2rem',
// }

const Button = (props: React.PropsWithChildren) => {
  return <button className={ButtonStyle.btn}>{props.children}</button>
}

export default Button
