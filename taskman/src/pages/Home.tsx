import Form from '../components/Form'
import List from '../components/List'
import './styles.scss'

const Home = () => {
  return (
    <div className="AppStyle">
      <header className="App-header">
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
