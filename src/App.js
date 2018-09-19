import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import theme from 'components/theme'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #704f56;
    font-weight: bold;
  }
  img {
    max-width: 100%;
  }
  pre {
    background: #f4f4f4;
    padding: .8em;
    overflow: auto;
    border-radius: 7px;
    margin: 35px 0;
  }
`

const Navbar = styled.nav`
  width: 100%;
  background: #39ae7f;
  a, span {
    color: white;
    padding: 1rem;
    display: inline-block;
  }
`

const MainContent = styled.div`
  padding: 3% 5%;
`

const App = () => (
    <Router>
        <MuiThemeProvider theme={theme}>
            <AppStyles>
                <Navbar>
                    <Link exact to="/">code &bull; yay</Link>
                    <span>|</span>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/learn">Learn</Link>
                </Navbar>
                <MainContent>
                    <Routes />
                </MainContent>
            </AppStyles>
        </MuiThemeProvider>
    </Router>
)

export default hot(module)(App)
