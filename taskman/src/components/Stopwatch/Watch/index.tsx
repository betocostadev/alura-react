import WatchStyle from './WatchStyle.module.scss'
const Watch = () => {
  return (
    <>
      <span className={WatchStyle.watchNumber}>0</span>
      <span className={WatchStyle.watchNumber}>0</span>
      <span className={WatchStyle.watchDivider}>:</span>
      <span className={WatchStyle.watchNumber}>0</span>
      <span className={WatchStyle.watchNumber}>0</span>
    </>
  )
}

export default Watch
