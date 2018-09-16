import React from 'react'
import {Router, Link} from 'react-static'
import styled, {injectGlobal} from 'styled-components'
import {hot} from 'react-hot-loader'
import Routes from 'react-static-routes'

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
  nav {
    width: 100%;
    background: #39ae7f;
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }
  .content {
    padding: 1rem;
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

const App = () => (
    <Router>
        <AppStyles>
            <nav>
                <Link exact to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <div className="content">
                <Routes/>
            </div>
        </AppStyles>
    </Router>
)

export default hot(module)(App)