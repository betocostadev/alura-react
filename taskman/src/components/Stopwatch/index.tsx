import Button from '../Button'
import Watch from './Watch'
import StopwatchStyle from './StopwatchStyle.module.scss'

const Stopwatch = () => {
  return (
    <div className={StopwatchStyle.stopwatch}>
      <p className={StopwatchStyle.title}>
        Choose a task to start the Stopwatch
      </p>
      <div className={StopwatchStyle.watchWrapper}>
        <Watch />
      </div>
      <Button>Start</Button>
    </div>
  )
}

export default Stopwatch
