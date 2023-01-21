import { useEffect, useState } from 'react'
import { ITask } from '../../types/task'
import Button from '../Button'
import Watch from './Watch'
import StopwatchStyle from './StopwatchStyle.module.scss'
import hourToSeconds from '../../utils/hourToSeconds'

interface Props {
  selected: ITask | undefined
  endTask: () => void
}

const Stopwatch = ({ selected, endTask }: Props) => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) setTime(hourToSeconds(selected.time))
  }, [selected])

  const runCounter = (time: number | undefined) => {
    if (time === undefined) return
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1)
        return runCounter(time - 1)
      }
      endTask()
    }, 1000)
  }

  return (
    <div className={StopwatchStyle.stopwatch}>
      <p className={StopwatchStyle.title}>
        Choose a task to start the Stopwatch
      </p>
      <div className={StopwatchStyle.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button disabled={!time} onClick={() => runCounter(time)}>
        Start
      </Button>
    </div>
  )
}

export default Stopwatch
