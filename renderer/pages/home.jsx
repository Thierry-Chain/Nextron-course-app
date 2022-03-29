import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ipcRenderer } from 'electron'

import {
  Text,
  Container,
  Heading,
  Box,
  FormControl,
  FormLabel,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react'
function Home() {
  const [email, setEmail] = useState('Test@gmail.com')
  const [pcode, setPcode] = useState('123456')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    email && pcode
      ? router.push('event')
      : ipcRenderer.send('notify', 'Invalid credentials')
  }
  return (
    <>
      <Head>
        <title>⚡ EventTracker ⚡</title>
      </Head>
      <Container fontFamily='sans-serif'>
        <Heading py='3' size='md' align='center' color='teal.500'>
          ⚡ Welcome to Event Tracker ⚡
          <Text my='1' h='1' mx='auto' w='50%' bg='gray.400' />
        </Heading>
        <VStack
          py='3'
          my='3'
          border='1px'
          rounded='lg'
          px='2'
          color='gray.700'
          borderColor='teal'
          m='auto'
          w={['80%', '60%', '50%']}
          _hover={{
            shadow: 'dark-lg',
            bg: 'gray.200',
          }}
        >
          <FormControl isRequired>
            <FormLabel htmlFor='first-name'>Email</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='first-name'
              placeholder='Email'
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='first-name'>Password</FormLabel>
            <Input
              value={pcode}
              onChange={(e) => setPcode(e.target.value)}
              type='password'
              id='first-name'
              placeholder='password'
            />
          </FormControl>

          <Button onClick={handleSubmit} colorScheme='teal'>
            Button
          </Button>
        </VStack>
      </Container>
    </>
  )
}

export default Home
