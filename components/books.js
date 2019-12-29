import { Container } from '@theme-ui/components'

export default ({ children }) => (
  <Container
    sx={{
      'h1, h2': { mb: 0, textAlign: 'center' },
      'h1 + h2': { mt: 3, mb: 5 },
      h2: {
        color: 'muted',
        mt: 5,
        mb: 4,
        textTransform: 'uppercase',
        fontSize: 3
      },
      ul: {
        listStyle: 'none',
        lineHeight: 'subheading',
        pl: 0,
        display: 'grid',
        textAlign: 'center',
        gridTemplateColumns: [
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(5, 1fr)'
        ],
        gridGap: [3, 4]
      },
      li: {
        img: { maxHeight: 256, boxShadow: 'card' },
        strong: { display: 'block', mt: 2, mb: 1 },
        em: { fontStyle: 'normal', color: 'muted', fontSize: 0 }
      }
    }}
  >
    {children}
  </Container>
)
