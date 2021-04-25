import {
  Container,
  Text,
  Box,
  Avatar,
  Stack,
  Center,
  Divider,
  Icon,
} from '@chakra-ui/react'

import Link from 'next/link'
import { MdDashboard, MdBookmark } from 'react-icons/md'
import { RiTableAltFill } from 'react-icons/ri'
import { FaChartBar, FaMap, FaRocket } from 'react-icons/fa'
import { AiFillIdcard } from 'react-icons/ai'
import { Footer } from './Footer'

const Sidebar = () => {
  return (
    <>
      <Stack h='100%'>
        <Box p={3} w='100%' display='block'>
          <Stack direction='row'>
            <Avatar bg='highlight' name='John Doe' />
            <Box>
              <Text fontWeight='600'>John Doe</Text>
              <Text fontSize='xs'>JohnDoe@company.com</Text>
            </Box>
          </Stack>
        </Box>
        <Box height='80vh' overflowY='auto'>
          <Stack w='100%' py={5}>
            <Link href='/'>
              <a>
                <Icon mr={2} as={MdDashboard} />
                Dashboard
              </a>
            </Link>
            <Center>
              <Divider w='80%' borderColor='secondary' />
            </Center>

            <Text as='h3' color='highlight' fontWeight='600' p={2}>
              UI Components
            </Text>
            <Link href='/forms'>
              <a>
                <Icon mr={2} as={MdDashboard} />
                Forms
              </a>
            </Link>
            <Link href='/tables'>
              <a>
                <Icon mr={2} as={RiTableAltFill} />
                Tables
              </a>
            </Link>
            <Link href='/cards'>
              <a>
                <Icon mr={2} as={AiFillIdcard} />
                Cards
              </a>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Footer />
        </Box>
      </Stack>
    </>
  )
}

export default Sidebar
