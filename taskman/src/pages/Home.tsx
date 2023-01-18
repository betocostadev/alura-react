import Form from '../components/Form'
import List from '../components/List'
import Stopwatch from '../components/Stopwatch'
import HomeStyle from './HomeStyle.module.scss'

const Home = () => {
  return (
    <div className={HomeStyle.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  )
}

export default Home
