import { useLocation, useParams } from 'react-router-dom'

const Dish = () => {
  const params = useParams()
  const location = useLocation()
  console.log(params)
  console.log(location)

  return (
    <div>
      <h3>Dish</h3>
    </div>
  )
}

export default Dish
