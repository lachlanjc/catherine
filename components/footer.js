import { Container, Box } from 'theme-ui'
import { GitHub } from 'react-feather'

const Footer = () => (
  <Box as="footer" sx={{ textAlign: 'center', px: 2, py: [3, 4] }}>
    <Container
      sx={{
        maxWidth: 640,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'muted',
        fontSize: 1,
        svg: { fill: 'currentColor', mr: 3 }
      }}
      as="a"
      href="https://github.com/lachlanjc/catherine"
    >
      <GitHub />
      View source code
    </Container>
  </Box>
)

export default Footer
