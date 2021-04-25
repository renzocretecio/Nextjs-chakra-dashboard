import { Box, Flex, Container } from '@chakra-ui/react'
import Sidebar from './sidebar'
import { ResponsiveSidebar } from '../components/Drawer'
const Layout = ({ children }) => {
  return (
    <>
      <Flex h='100vh'>
        <Container
          m={0}
          py={5}
          maxW='256px'
          h='100vh'
          display={['none', 'none', 'none', 'flex', 'flex']}>
          <Sidebar />
        </Container>

        <Container
          p={['0', '0', '0', '1.5rem', '1.5rem']}
          m='0 auto'
          maxW='container.xl'>
          <Box bg='background2' borderRadius='md' h='100%' overflowY='auto'>
            <Flex
              maxW={1280}
              px={[5, 8, 8]}
              py={5}
              display={['flex', 'flex', 'flex', 'none', 'none']}>
              <ResponsiveSidebar />
            </Flex>
            {children}
          </Box>
        </Container>
      </Flex>
    </>
  )
}

export default Layout
