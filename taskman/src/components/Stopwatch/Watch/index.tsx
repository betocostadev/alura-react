import WatchStyle from './WatchStyle.module.scss'

interface Props {
  time: number | undefined
}

const Watch = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minutesTen, minutesUnit] = String(minutes).padStart(2, '0')
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={WatchStyle.watchNumber}>{minutesTen}</span>
      <span className={WatchStyle.watchNumber}>{minutesUnit}</span>
      <span className={WatchStyle.watchDivider}>:</span>
      <span className={WatchStyle.watchNumber}>{secondsTen}</span>
      <span className={WatchStyle.watchNumber}>{secondsUnit}</span>
    </>
  )
}

export default Watch
