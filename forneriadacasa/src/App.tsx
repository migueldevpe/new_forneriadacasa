import './App.css'

import { Outlet } from 'react-router-dom'

import Header from './components/others/Header.tsx'
import Footer from './components/others/Footer.tsx'

function App() {

  return (

    <>
      <Header />
      <Outlet/>
      <Footer />
    </>

  )
}

export default App
