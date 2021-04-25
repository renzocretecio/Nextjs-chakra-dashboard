import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Flex,
  Icon,
  HStack,
  Button,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import { TinyLineChart, BarChartWidget, DonutChart } from './Charts'
import { BsPhone, BsTablet, BsLaptop } from 'react-icons/bs'
export const Customers = (props) => {
  const { data = [] } = props
  return (
    <>
      <Box bg='light' borderRadius='md' p={5} mb='30px' position='relative'>
        <Stat>
          <Flex flexDirection='column' alignItems='center'>
            <StatLabel>Customers</StatLabel>
            <StatNumber>128</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              20% since last month
            </StatHelpText>
          </Flex>
        </Stat>
      </Box>
    </>
  )
}
export const Revenue = (props) => {
  const { data = [] } = props
  return (
    <>
      <Box bg='light' borderRadius='md' p={5} mb='30px' position='relative'>
        <Stat>
          <Flex
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'>
            <StatLabel>Revenue</StatLabel>
            <StatNumber>345K</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              25.4% since last month
            </StatHelpText>
          </Flex>
        </Stat>
      </Box>
    </>
  )
}

export const TrafficShare = (props) => {
  const { data = [] } = props
  return (
    <>
      <Box bg='light' borderRadius='md' p={5} mb='30px' position='relative'>
        <Stat>
          <Flex alignItems='center' justifyContent='space-between'>
            <Box position='relative' h='110px' w='110px'>
              <DonutChart data={data} />
            </Box>
            <Flex flexDirection='column'>
              <StatLabel>Traffic Share</StatLabel>
              <StatHelpText display='flex' alignItems='center'>
                <Icon mr={2} w={4} h={4} as={BsLaptop} />
                Desktop 60%
              </StatHelpText>
              <StatHelpText display='flex' alignItems='center'>
                <Icon mr={2} w={4} h={4} as={BsPhone} />
                Mobile Web 30%
              </StatHelpText>
              <StatHelpText display='flex' alignItems='center'>
                <Icon mr={2} w={4} h={4} as={BsTablet} />
                Tablet Web 10%
              </StatHelpText>
            </Flex>
          </Flex>
        </Stat>
      </Box>
    </>
  )
}

export const SalesValue = (props) => {
  const { data = [] } = props
  return (
    <>
      <Box
        bg='light'
        borderRadius='md'
        p={5}
        mb='30px'
        position='relative'
        w={['100%', '100%', '100%', '100%', '100%']}>
        <Flex>
          <Box>
            <Stat>
              <StatLabel>Sales Value</StatLabel>
              <StatNumber>₱ 0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </Box>
          <Spacer />
          <Box>
            <Stat>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stat>
          </Box>
        </Flex>
        <Box h={200}>
          <TinyLineChart data={data} />
        </Box>
      </Box>
    </>
  )
}

export const TotalOrders = (props) => {
  const { data = [] } = props

  return (
    <>
      <Box
        bg='light'
        borderRadius='md'
        p={5}
        mb='30px'
        position='relative'
        w={['100%', '100%', '100%', '100%', '100%']}>
        <Flex flexDirection='column'>
          <Box display='flex' justifyContent='space-between'>
            <Box>
              <Stat>
                <StatLabel>Total Orders</StatLabel>
                <StatNumber>300</StatNumber>
                <StatHelpText>Month of October</StatHelpText>
              </Stat>
            </Box>
            <Box>
              <Stat>
                <StatHelpText>
                  <StatArrow type='decrease' />
                  11.6%
                </StatHelpText>
              </Stat>
            </Box>
          </Box>
          <Box h={200}>
            <BarChartWidget data={data} />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export const SimpleTable = (props) => {
  const { data = [] } = props
  return (
    <>
      <Box
        bg='light'
        borderRadius='md'
        p={5}
        mb='30px'
        position='relative'
        overflowX='auto'>
        <Table size='lg'>
          <TableCaption>Employees</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Position</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((employee) => (
              <Tr key={employee.userId}>
                <Td>
                  {employee.firstName} {employee.lastName}
                </Td>
                <Td>{employee.jobTitle}</Td>
                <Td>{employee.phoneNumber}</Td>
                <Td>{employee.emailAddress}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  )
}
