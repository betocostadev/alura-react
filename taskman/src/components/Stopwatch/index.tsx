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
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (selected?.time) setTime(hourToSeconds(selected.time))
  }, [selected])

  const startStopWatch = (time: number | undefined) => {
    if (time === undefined) return
    setIsRunning(true)
    runCounter(time)
  }

  const runCounter = (time: number | undefined) => {
    if (time === undefined) return
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1)
        return runCounter(time - 1)
      }
      endTask()
      setIsRunning(false)
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
      <Button
        disabled={!time || isRunning}
        onClick={() => startStopWatch(time)}
      >
        Start
      </Button>
    </div>
  )
}

export default Stopwatch
