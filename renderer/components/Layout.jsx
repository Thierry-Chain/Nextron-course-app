import Navbar from './NavBar'
import Footer from './Footer'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ChakraProvider,
  Box,
} from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Box fontFamily='sans-serif' bg='gray.300' minH='100vh'>
      {/*
      Removed NavBar bcz its not needed may be it may be used in the future
      <Navbar />
     */}
      <hr />
      {children}
      <hr />

      <Footer />
    </Box>
  )
}
