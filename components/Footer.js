import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <Flex justifyContent='center'>
        <Text color='gray.500' fontSize='sm'>
          Copyright &#169; {year}
        </Text>
      </Flex>
    </>
  )
}
