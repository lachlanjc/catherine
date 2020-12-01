import { Container, Box } from 'theme-ui'

const Footer = () => (
  <Box as="footer" sx={{ textAlign: 'center', px: 2, py: [3, 4] }}>
    <Container
      sx={{
        maxWidth: 640,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'muted',
        fontSize: 1,
        a: { color: 'inherit' }
      }}
    >
      <a href="https://github.com/lachlanjc/catherine">Open source</a>
    </Container>
  </Box>
)

export default Footer
