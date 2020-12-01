import { Container, Box } from 'theme-ui'

export const Banner = props => (
  <Container
    {...props}
    sx={{
      py: [4, 5],
      display: 'grid',
      gridGap: [4, 5],
      gridTemplateColumns: [null, null, '2fr 3fr'],
      alignItems: 'center',
      'p:first-of-type': {
        gridRow: [2, 'auto'],
        my: 0
      },
      img: {
        borderRadius: 'extra'
      },
      h1: {
        fontSize: [4, 5],
        fontWeight: 'heading',
        lineHeight: 'tight',
        mt: [0, -2, -3],
        mb: 3
      },
      h2: {
        fontSize: [2, 3],
        fontWeight: 'normal',
        lineHeight: 'subheading',
        mb: 4
      }
    }}
  />
)
