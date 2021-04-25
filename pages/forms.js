import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { AccountSettings, SignIn } from '../components/Forms'

export default function forms() {
  return (
    <div>
      <Box h='100%'>
        <Flex
          color='dark'
          margin='0 auto'
          direction='column'
          maxW={1280}
          px={[5, 8, 8]}
          py={5}>
          <Heading as='h2'>Forms</Heading>

          <Flex flexDirection='column' mt={5}>
            <AccountSettings />
            <SignIn />
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}
