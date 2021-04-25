import { Box, Flex, Heading, Switch, Text } from '@chakra-ui/react'
import * as React from 'react'
import { MdLocationOn } from 'react-icons/md'
export const NotificationProps = (props) => {
  const { title, subTitle, ...flexProps } = props
  return (
    <Flex as='dl' flexDirection='column' {...flexProps} position='relative'>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box>
          <Heading as='h4' fontWeight='bold' fontSize='lg' maxW='xl'>
            {title}
          </Heading>
          <Text as='p' fontWeight='xs' fontSize='sm' maxW='xl' color='gray.500'>
            {subTitle}
          </Text>
        </Box>
        <Switch size='sm' colorScheme='shade' />
      </Box>
    </Flex>
  )
}
