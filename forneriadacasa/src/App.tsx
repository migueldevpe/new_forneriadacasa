import './App.css'

import { Outlet } from 'react-router-dom'
import { handleToggle } from './hooks/handleToggle.ts'

import Header from './components/others/Header.tsx'
import Footer from './components/others/Footer.tsx'
import CartContainer from './components/shippingCart/CartContainer.tsx'
import WhatsApp from './components/others/WhatsApp.tsx'

function App() {

  return (

    <>
      <Header />
      <Outlet />
      <Footer />
      <CartContainer />
      <WhatsApp />
      <div className='overlay !mt-[48px]' onClick={handleToggle("menu")}></div>
    </>

  )
}

export default App
