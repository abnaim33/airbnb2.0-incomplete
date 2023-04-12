// import { Provider } from 'react-redux'
import '../styles/globals.css'

import Navbar from '../components/navbar/Navbar'

import RegisterModal from '../components/modals/RegisterModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginModal from '../components/modals/LoginModal'

// import { Provider } from "next-auth/client"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
    <ToastContainer />
    <RegisterModal />
    <LoginModal />
    <Navbar />
    <Component {...pageProps} />

  </SessionProvider>
}

export default MyApp
