import AppMenu from 'components/AppMenu'
import DefaultPage from 'components/DefaultPage'
import Footer from 'components/Footer'
import About from 'pages/About'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import NotFound from 'pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <main>
      <Router>
        <AppMenu />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default AppRouter
