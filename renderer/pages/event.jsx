import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Badge,
  SimpleGrid,
  Flex,
  Button,
  Input,
} from '@chakra-ui/react'

function Next() {
  const [events, setEvents] = useState([])
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [status, setStatus] = useState('')
  const handleAdd = () => {
    let old = [{ name, date: time, status }, ...events]
    setEvents(old)
    setName('')
    setTime('')
    setStatus('')
  }
  const delEvent = (id) => {
    //console.log(events, id)
    let old = [...events].filter((event) => {
      return events.indexOf(event) !== id
    })
    setEvents(old)
    // console.log(old)
  }
  const markAsDone = (id) => {
    let old = [...events]
    old[id].status = 'completed'

    setEvents(old)
    //console.log(old)
  }
  let content = events.map((event) => {
    return (
      <Box
        m='auto'
        border='1px'
        p='3'
        my='1'
        rounded='xl'
        borderColor='gray'
        shadow='dark-lg'
        key={events.indexOf(event)}
        fontWeight='semibold'
        fontFamily='sans-serif'
      >
        <Text color='facebook.900'>Name: {event.name}</Text>
        <Text>Date : {event.date}</Text>
        <Text>Status : {event.status}</Text>
        <Flex>
          <Button
            onClick={() => markAsDone(events.indexOf(event))}
            m='1'
            size='sm'
            colorScheme='teal'
          >
            Done
          </Button>
          <Button
            onClick={() => delEvent(events.indexOf(event))}
            m='1'
            size='sm'
            bg='red.400'
          >
            Clean
          </Button>
        </Flex>
      </Box>
    )
  })
  return (
    <>
      <Head>
        <title>Events list</title>
      </Head>

      <Heading
        fontFamily='sans-serif'
        py='3'
        size='sm'
        align='center'
        color='teal.500'
      >
        All Events{' '}
        <Badge p='1' rounded='md' colorScheme='green'>
          {events.length}
        </Badge>
        <Text my='1' h='1' mx='auto' w='30%' bg='gray.400' />
      </Heading>
      <SimpleGrid
        m='auto'
        columns={{ base: '1', md: '3', lg: '4' }}
        spacing='5'
        py='4'
      >
        <Box
          m='auto'
          border='1px'
          p='3'
          my='1'
          rounded='xl'
          borderColor='gray'
          shadow='dark-lg'
          fontWeight='semibold'
          fontFamily='sans-serif'
        >
          <Text color='facebook.900'>
            Name:{' '}
            {
              <Input
                id='first-name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                h='7'
                placeholder='Name'
              />
            }
          </Text>
          <Text>
            Date :{' '}
            {
              <Input
                value={time}
                onChange={(e) => {
                  setTime(e.target.value)
                }}
                h='7'
                placeholder='Date'
              />
            }
          </Text>
          <Text>
            Status :{' '}
            {
              <Input
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value)
                }}
                h='7'
                placeholder='status'
              />
            }
          </Text>
          <Flex>
            <Button
              disabled={name && time && status ? false : true}
              onClick={handleAdd}
              m='1'
              size='sm'
              colorScheme='teal'
            >
              Add
            </Button>
            <Link href='home'>
              <Button m='1' size='sm' colorScheme='red'>
                Logout
              </Button>
            </Link>
          </Flex>
        </Box>
        {content}
      </SimpleGrid>
    </>
  )
}

export default Next
