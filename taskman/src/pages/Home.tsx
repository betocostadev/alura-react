import Form from '../components/Form'
import List from '../components/List'
import HomeStyle from './HomeStyle.module.scss'

const Home = () => {
  return (
    <div className={HomeStyle.AppStyle}>
      <header className={HomeStyle.AppHeader}>
        <h1>Taskman</h1>
      </header>
      <div>
        <Form />
      </div>
      <List />
    </div>
  )
}

export default Home
