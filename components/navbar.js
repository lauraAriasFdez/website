import Logo from "./logo";
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
  } from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { SiGmail } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref scroll={false}>
        <Link
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
          target={target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
}
const Navbar = props => {
    const { path } = props
  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        {...props}
      >        <Container
      display="flex"
      p={2}
      maxW="container.md"
      wrap="wrap"
      align="center"
      justify="space-between"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Logo />
        </Heading>
      </Flex>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <LinkItem
          target="_blank"
          href="https://www.linkedin.com/in/laura-arias-fernandez-61b121191/"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          <IoLogoLinkedin />
          Linkedin
        </LinkItem>     
        <LinkItem
          target="_blank"
          href="https://github.com/lauraAriasFdez"
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
        >
          <IoLogoGithub />
          Source
        </LinkItem>
        <LinkItem href="mailto:larfer2001@gmail.com?subject=Connection Website" path={path}>
          Contact Me
        </LinkItem>


      </Stack>

      <Box flex={1} align="right">
        <ThemeToggleButton />

        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem as={Link}>About Me</MenuItem>
              </NextLink>

              <MenuItem
                as={Link}
                href="https://www.linkedin.com/in/laura-arias-fernandez-61b121191/"
              >
                Linkedin Profile
              </MenuItem>

              <MenuItem
                as={Link}
                href="https://github.com/craftzdog/craftzdog-homepage"
              >
                View Source
              </MenuItem>
              
              <NextLink href="mailto:larfer2001@gmail.com?subject=Connection Website" passHref>
                <MenuItem as={Link}>Contact Me</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Container>
      </Box>
    )
  }
  
  export default Navbar