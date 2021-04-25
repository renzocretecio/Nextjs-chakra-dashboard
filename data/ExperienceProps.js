import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { MdLocationOn } from 'react-icons/md'
export const ExperienceProps = (props) => {
  const { title, subTitle, paragraph, action, ...flexProps } = props
  return (
    <Flex
      as='dl'
      flexDirection='column'
      px='6'
      py='4'
      {...flexProps}
      position='relative'>
      <Box as='dt' fontWeight='bold' maxWidth='xl'>
        {title}
      </Box>
      <HStack as='dd' color='secondary'>
        <MdLocationOn />
        <Text as='span' fontSize='sm' fontWeight='medium'>
          {subTitle}
        </Text>
      </HStack>
      <Box as='dd'>{paragraph}</Box>
      {action}
    </Flex>
  )
}
