import AppMenu from 'components/AppMenu'
import DefaultPage from 'components/DefaultPage'
import Footer from 'components/Footer'
import About from 'pages/About'
import Dish from 'pages/Dish'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import NotFound from 'pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <main className="container">
      <Router>
        <AppMenu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="dish/:id" element={<Dish />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default AppRouter
