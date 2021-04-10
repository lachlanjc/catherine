import { BaseStyles, Container } from 'theme-ui'

const Article = (props) => (
  <Container
    as={BaseStyles}
    variant="copy"
    sx={{
      h2: { mb: 2 },
      em: { color: 'muted', display: 'block' },
    }}
    {...props}
  />
)

export default Article
