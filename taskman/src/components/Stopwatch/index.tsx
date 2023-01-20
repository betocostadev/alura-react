import { useEffect, useState } from 'react'
import { ITask } from '../../types/task'
import Button from '../Button'
import Watch from './Watch'
import StopwatchStyle from './StopwatchStyle.module.scss'
import hourToSeconds from '../../utils/hourToSeconds'

interface Props {
  selected: ITask | undefined
}

const Stopwatch = ({ selected }: Props) => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) setTime(hourToSeconds(selected.time))
  }, [selected])

  return (
    <div className={StopwatchStyle.stopwatch}>
      <p className={StopwatchStyle.title}>
        Choose a task to start the Stopwatch
      </p>
      <p>{time}</p>
      <div className={StopwatchStyle.watchWrapper}>
        <Watch />
      </div>
      <Button>Start</Button>
    </div>
  )
}

export default Stopwatch
