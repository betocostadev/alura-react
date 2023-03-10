import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import styles from './Dish.module.scss'
import menu from 'data/menuitems.json'
import { IDish } from 'types/Dish'
import NotFound from 'pages/NotFound'
import DishTags from 'components/DishTags'
import DefaultPage from 'components/DefaultPage'

const Dish = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { state } = useLocation()
  // const { dish } = state as { dish: typeof menu[0] }

  const dish: IDish = state?.dish
    ? state.dish
    : menu.find((item) => item.id === Number(params.id))

  if (dish === undefined) {
    return <NotFound />
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <>
              <button className={styles.back} onClick={() => navigate(-1)}>
                {'< Go back'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{dish.title}</h1>
                <div>
                  <img src={dish.photo} alt={dish.title} />
                </div>
                <div>
                  <div className={styles.contents}>
                    <p className={styles.contents__description}>
                      {dish.description}
                    </p>
                    <DishTags {...dish} />
                  </div>
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default Dish
