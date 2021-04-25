import { Card } from '../components/Card/Card'
import { AccountInfoProps } from '../data/AccountInfoProps'
import { ExperienceProps } from '../data/ExperienceProps'
import { UserDetailsProps } from '../data/UserDetailsProps'
import { NotificationProps } from '../data/NotificationsProps'
import { CardContent } from '../components/Card/CardContent'
import { CardHeader } from '../components/Card/CardHeader'
import { HiPencilAlt } from 'react-icons/hi'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react'
export default function cards() {
  return (
    <>
      <Box h='100vh'>
        <Flex
          color='dark'
          margin='0 auto'
          direction='column'
          maxW={1280}
          px={[5, 8, 8]}
          py={5}>
          <Heading as='h2'>Cards</Heading>

          <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5}>
            <Card p='0'>
              <CardHeader
                title='Account Info'
                action={
                  <Button
                    variant='outline'
                    minW='20'
                    leftIcon={<HiPencilAlt />}>
                    Edit
                  </Button>
                }
              />
              <CardContent>
                <AccountInfoProps label='Name' value='John Doe' />
                <AccountInfoProps label='Email' value='johndoe@gmail.com' />
                <AccountInfoProps label='Phone' value='09123456789' />
                <AccountInfoProps label='Member since' value='February, 2021' />
                <AccountInfoProps label='Position' value='Manager' />
              </CardContent>
            </Card>

            <Card p='0'>
              <CardHeader
                title='Experience'
                action={
                  <Button minW='20' leftIcon={<AddIcon />}>
                    Add
                  </Button>
                }
              />
              <CardContent>
                <ExperienceProps
                  action={
                    <HStack position='absolute' top='0' right='0' mt={0}>
                      <IconButton
                        fontSize='sm'
                        bg='gray.100'
                        color='dark'
                        minW={8}
                        h={8}
                        borderRadius='full'
                        icon={<HiPencilAlt />}
                      />
                      <IconButton
                        fontSize='sm'
                        bg='gray.100'
                        color='dark'
                        minW={8}
                        h={8}
                        p={0}
                        borderRadius='full'
                        icon={<DeleteIcon />}
                      />
                    </HStack>
                  }
                  title='UX Strategist &#38; Sales Funnel Designer'
                  subTitle='Manila, Ph'
                  paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad.'
                />
                <Box my={6} borderBottomWidth='1px' />
                <ExperienceProps
                  action={
                    <HStack position='absolute' top='0' right='0' mt={0}>
                      <IconButton
                        fontSize='sm'
                        bg='gray.100'
                        color='dark'
                        minW={8}
                        h={8}
                        borderRadius='full'
                        icon={<HiPencilAlt />}
                      />
                      <IconButton
                        fontSize='sm'
                        bg='gray.100'
                        color='dark'
                        minW={8}
                        h={8}
                        p={0}
                        borderRadius='full'
                        icon={<DeleteIcon />}
                      />
                    </HStack>
                  }
                  title='Frontend Web Developer'
                  subTitle='Manila, Ph'
                  paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad.'
                />
              </CardContent>
            </Card>

            <Card p='0'>
              <CardContent>
                <UserDetailsProps
                  title='User Details'
                  name='Name'
                  email='Email Address'
                />
              </CardContent>
            </Card>

            <Card px='6' py='4'>
              <Heading as='h2' fontSize='lg' py={5}>
                Notifications
              </Heading>
              <CardContent p='0'>
                <Flex direction='column'>
                  <NotificationProps
                    title='Email'
                    subTitle='Receive email updates on comments you followed'
                  />
                  <Box my={6} borderBottomWidth='1px' />
                  <NotificationProps
                    title='Text Messages'
                    subTitle='Recieve updates by SMS'
                  />
                  <Box my={6} borderBottomWidth='1px' />
                  <NotificationProps
                    title='Browser notifications'
                    subTitle='We will send via our desktop or mobile app'
                  />
                </Flex>
              </CardContent>
            </Card>
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  )
}
