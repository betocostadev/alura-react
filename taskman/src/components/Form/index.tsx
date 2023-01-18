import Button from '../Button'
import FormStyle from './FormStyle.module.scss'

const Form = () => {
  return (
    <form className={FormStyle.newTask}>
      <div className={FormStyle.inputContainer}>
        <label htmlFor="title">Add your task</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="What will you study?"
          required
        />
      </div>
      <div className={FormStyle.inputContainer}>
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
