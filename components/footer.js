import { Container, Box } from 'theme-ui'

const Footer = () => (
  <Box as="footer" sx={{ textAlign: 'center', px: 2, py: [3, 4] }}>
    <Container
      sx={{
        maxWidth: 640,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'muted',
        a: { color: 'inherit' }
      }}
    >
      Site by <a href="https://lachlanjc.com">@lachlanjc</a>
    </Container>
  </Box>
)

export default Footer
