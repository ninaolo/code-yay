import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import theme from 'components/theme'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Navbar from "@app/components/Navbar";
import { colors } from "@app/components";

injectGlobal`
  body {
    font-family: Lato;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 1.5;
    font-size: 15px;
    margin: 0;
    padding: 0;
    color: ${colors.darkGrey}
  }
`;

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #704f56;
    font-weight: bold;
  }
  img {
    max-width: 100%;
  }
  h1, h2, h3, h4, h5 {
    color: ${colors.black};
  }
`;

const StyledNavbar = styled.div`
  a, span {
    color: white;
    font-family: Lato;
  }
`;

const MainContent = styled.div`
  padding: 3% 5%;
  code {
    background: ${colors.lightGrey};
    padding: .1em .5em;
    border-radius: .3em;
    white-space: normal;
    font-family: Lato;
    letter-spacing: 0.8px;
  }
`;

const App = () => (
    <Router>
        <MuiThemeProvider theme={theme}>
            <AppStyles>
                <StyledNavbar>
                    <Navbar/>
                </StyledNavbar>
                <MainContent>
                    <Routes/>
                </MainContent>
            </AppStyles>
        </MuiThemeProvider>
    </Router>
);

export default hot(module)(App)
