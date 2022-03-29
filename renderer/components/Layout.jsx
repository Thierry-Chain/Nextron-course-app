import Navbar from './NavBar'
import Footer from './Footer'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ChakraProvider,
} from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      {/*
      Removed NavBar bcz its not needed may be it may be used in the future
      <Navbar />
     */}
      <hr />
      {children}
      <hr />

      <Footer />
    </>
  )
}
