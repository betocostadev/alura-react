import Button from '../Button'
import './styles.scss'

const Form = () => {
  return (
    <form className="new-task">
      <div className="input-container">
        <label htmlFor="title">Add your task</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="What will you study?"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="time">Add the time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button />
    </form>
  )
}

export default Form
