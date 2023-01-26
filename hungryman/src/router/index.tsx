import AppMenu from 'components/AppMenu'
import DefaultPage from 'components/DefaultPage'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
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
          </Route>
        </Routes>
      </Router>
    </main>
  )
}

export default AppRouter
