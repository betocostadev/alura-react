const hourToSeconds = (time: string): number => {
  const [hours = '0', minutes = '0', seconds ='0' ] = time.split(':')
  const hoursSeconds = parseInt(hours) * 3600
  const minutesSeconds = parseInt(minutes) * 60

  return hoursSeconds + minutesSeconds + parseInt(seconds)
}

export default hourToSeconds