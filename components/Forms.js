import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Text,
  FormControl,
  FormLabel,
  SimpleGrid,
  Stack,
  Spacer,
  FormHelperText,
  InputGroup,
  Textarea,
  InputLeftAddon,
  Select,
} from '@chakra-ui/react'
export const AccountSettings = (props) => {
  const { data } = props
  return (
    <>
      <Box bg='light' borderRadius='md' p={5} mb='30px' position='relative'>
        <form>
          <Heading as='h3' fontSize='1rem'>
            Account Settings
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5}>
            <FormControl mt={6}>
              <FormLabel>Username</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <Spacer />
            <Flex justifyContent='flex-end'>
              <Button type='submit'>Save</Button>
            </Flex>
          </SimpleGrid>
        </form>
      </Box>
    </>
  )
}

export const SignIn = (props) => {
  const { data } = props
  return (
    <>
      <Box bg='light' borderRadius='md' p={5} mb='30px' position='relative'>
        <Heading as='h3' fontSize='1rem'>
          Register
        </Heading>
        <form>
          <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <InputLeftAddon children='+234' />
                <Input type='tel' placeholder='phone number' />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Textarea</FormLabel>
              <Textarea />
            </FormControl>

            <Spacer />
            <Spacer />
            <Flex justifyContent='flex-end'>
              <Button type='submit'>Sign Up</Button>
            </Flex>
          </SimpleGrid>
        </form>
      </Box>
    </>
  )
}
