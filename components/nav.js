import {
  useColorMode,
  Box,
  Container,
  IconButton,
  Flex,
  NavLink,
} from 'theme-ui'
import { useRouter } from 'next/router'
import Image from 'next/image'
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
        outline: 'none',
      },
      ...sx,
    }}
  />
)

const ColorSwitcher = (props) => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Invert colors"
    >
      <Moon size={24} />
    </NavButton>
  )
}

const Nav = () => {
  const { pathname } = useRouter()
  return (
    <Box
      as="nav"
      sx={{
        color: 'text',
        pt: 4,
        pb: [3, 4],
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
            mr: 4,
            ':focus,:hover': { color: 'muted' },
          },
        }}
      >
        <Link href="/" passHref>
          <Flex
            as="a"
            sx={{
              alignItems: 'center',
            }}
          >
            {pathname !== '/' && (
              <Box
                as="a"
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 'circle',
                  overflow: 'hidden',
                  display: ['inline-block', 'none'],
                  mr: 2,
                }}
              >
                <Image
                  width={400}
                  height={400}
                  src="/avatar.jpg"
                  alt="Catherine's avatar"
                />
              </Box>
            )}
            <NavLink
              sx={{
                display: ['none', 'inline-block'],
                fontWeight: 'bold !important',
                ':focus,:hover': { color: 'muted' },
              }}
            >
              Catherine Campbell
            </NavLink>
          </Flex>
        </Link>
        <NavLink href="/cv.pdf" sx={{ ml: 'auto' }}>
          CV
        </NavLink>
        <Link href="/portfolio" passHref>
          <NavLink>Portfolio</NavLink>
        </Link>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}

export default Nav
