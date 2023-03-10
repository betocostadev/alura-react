import { Dispatch, useState } from 'react'
import Button from '../Button'
import FormStyle from './FormStyle.module.scss'
import { v4 as uuid } from 'uuid'
import { ITask } from '../../types/task'

type Props = {
  setTasks: Dispatch<React.SetStateAction<ITask[]>>
}

// const Form = (setTasks: React.Dispatch<React.SetStateAction<ITask[]>>) => {
const Form = ({ setTasks }: Props) => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('00:00:00')

  const handleChangeField = (e: { target: HTMLInputElement }) => {
    e.target.name === 'title'
      ? setTitle(e.target.value)
      : setTime(e.target.value)
  }

  const handleSendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTasks((oldTasks: ITask[]) => [
      ...oldTasks,
      { title, time, selected: false, done: false, id: uuid() },
    ])
    setTitle('')
    setTime('00:00:00')
  }

  return (
    <form className={FormStyle.newTask} onSubmit={handleSendForm}>
      <div className={FormStyle.inputContainer}>
        <label htmlFor="title">Add your task</label>
        <input
          value={title}
          onChange={(e) => handleChangeField(e)}
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
          value={time}
          onChange={(e) => handleChangeField(e)}
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  )
}

export default Form
