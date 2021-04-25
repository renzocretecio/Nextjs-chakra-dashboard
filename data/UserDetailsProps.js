import {
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Box,
} from '@chakra-ui/react'
import * as React from 'react'

export const UserDetailsProps = (props) => {
  const { name, title, email, ...flexProps } = props
  return (
    <Flex flexDirection='column' px='6' py='4' {...flexProps}>
      <Heading as='h2' fontSize='lg' borderBottomWidth='1px' pb={4}>
        {title}
      </Heading>
      <form>
        <Stack display='flex' flexDirection='column'>
          <FormControl mt={6}>
            <FormLabel>{name}</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>{email}</FormLabel>
            <Input type='email' />
          </FormControl>
          <Box>
            <Button mt={5} minW='20'>
              Save Changes
            </Button>
          </Box>
        </Stack>
      </form>
    </Flex>
  )
}
