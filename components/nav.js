import {
  useColorMode,
  Avatar,
  Box,
  Container,
  IconButton,
  Image,
  Flex,
  NavLink
} from 'theme-ui'
import Link from 'next/link'
import { Moon } from 'react-feather'

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      color: 'muted',
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none'
      },
      ...sx
    }}
  />
)

const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Invert Colors"
    >
      <Moon size={24} />
    </NavButton>
  )
}

const Nav = () => (
  <Box
    as="nav"
    sx={{
      color: 'text',
      py: 4
    }}
    key="nav"
  >
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        a: {
          fontSize: 2,
          color: 'text',
          fontWeight: 'body',
          textDecoration: 'none',
          mr: [3, 4],
          ':focus,:hover': { color: 'muted' }
        }
      }}
    >
      <Link href="/" passHref>
        <Flex
          as="a"
          sx={{
            alignItems: 'center',
            mr: 'auto !important'
          }}
        >
          <Avatar
            size={36}
            src="https://pbs.twimg.com/profile_images/1183120867108294658/-E2c7IEI_400x400.jpg"
            alt="Avatar"
            sx={{ display: ['inline-block', 'none'], mr: 2 }}
          />
          <NavLink
            as="span"
            sx={{
              display: ['none', 'inline-block'],
              fontWeight: 'bold !important',
              ':focus,:hover': { color: 'muted' }
            }}
          >
            Catherine Campbell
          </NavLink>
        </Flex>
      </Link>
      <NavLink href="/cv.pdf">CV</NavLink>
      <Link href="/portfolio" passHref>
        <NavLink>Portfolio</NavLink>
      </Link>
      <ColorSwitcher />
    </Container>
  </Box>
)

export default Nav
