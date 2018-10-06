import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import theme from 'components/theme'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Navbar from "@app/components/Navbar";

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 15px;
    margin: 0;
    padding: 0;
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
`;

const StyledNavbar = styled.div`
  a, span {
    color: white;
  }
`;

const MainContent = styled.div`
  padding: 3% 5%;
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
