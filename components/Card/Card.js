import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = (props) => (
  <Box
    bg='light'
    rounded={{
      md: 'lg',
    }}
    shadow='base'
    overflow='hidden'
    {...props}
  />
)
