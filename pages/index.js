import Head from 'next/head'
import {
  Box,
  SimpleGrid,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import { SearchIcon, PlusSquareIcon } from '@chakra-ui/icons'
import {
  Customers,
  Revenue,
  TrafficShare,
  SalesValue,
  TotalOrders,
  SimpleTable,
} from '../components/Widgets'
import { data, trafficShares, totalOrders, employees } from '../data/props'

export default function Home() {
  return (
    <>
      <Box h='100%'>
        <Flex
          color='dark'
          margin='0 auto'
          direction='column'
          maxW={1280}
          px={[5, 8, 8]}
          py={5}>
          <Box display='flex'>
            <InputGroup w='16rem' size='sm'>
              <InputLeftElement children={<SearchIcon color='dark' />} />
              <Input
                placeholder='Search'
                type='search'
                borderColor='dark'
                focusBorderColor='dark'
              />
            </InputGroup>
          </Box>
          <Flex justifyContent='space-between' mt={5}>
            <Menu>
              <MenuButton
                _active={{
                  bg: '#0f0e17',
                  color: '#fffffe',
                }}
                as={Button}
                rightIcon={<PlusSquareIcon />}>
                New Task
              </MenuButton>
              <MenuList>
                <MenuItem>New Task</MenuItem>
                <MenuItem>Upload</MenuItem>
                <MenuItem>Preview Security</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
            <ButtonGroup isAttached>
              <Button
                _active={{
                  boxShadow: '0 0 0 1px #0f0e17',
                }}
                variant='outline'>
                Import
              </Button>
              <Button
                _active={{
                  boxShadow: '0 0 0 1px #0f0e17',
                }}
                variant='outline'>
                Export
              </Button>
            </ButtonGroup>
          </Flex>

          <SimpleGrid columns={[1, null, 3]} spacing={5} mt={5}>
            <Customers />
            <Revenue />
            <TrafficShare data={trafficShares} />
          </SimpleGrid>

          <Grid
            templateColumns={['1fr', '1fr', '1fr', '65.7% 32%', '65.7% 32%']}
            gap={5}>
            <GridItem>
              <SalesValue data={data} />
            </GridItem>
            <GridItem>
              <TotalOrders data={totalOrders} />
            </GridItem>
          </Grid>

          <Box>
            <SimpleTable data={employees} />
          </Box>
        </Flex>
      </Box>
    </>
  )
}
