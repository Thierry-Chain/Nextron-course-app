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
      <Navbar />
      <hr />
      {children}
      <hr />

      <Footer />
    </>
  )
}
