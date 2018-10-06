import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-static";
import styled from "styled-components";
import theme from "@app/components/theme";
import { hot } from "react-hot-loader";

const StyledNavbar = styled.div`
  width: 100%;
`;

const MiddleSpace = styled.div`
  flex-grow: 1;
`;

const MobileSection = styled.div`
  display: flex;
  ${theme.breakpoints.up('md')} {
    display: none;
  }
`;

const DesktopSection = styled.div`
  display: none;
  ${theme.breakpoints.up('md')} {
    display: flex;
  }
`;

class Navbar extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    handleMobileMenuOpen = (event: any) => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };

    render() {
        const {mobileMoreAnchorEl} = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const links = [
            <Link to="/interview-prep">Interview prep</Link>,
            <Link to="/blog">Blog</Link>,
            <Link to="/about">About</Link>,
        ];

        const renderLinks = () => (links.map(link => (<MenuItem>{link}</MenuItem>)));

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                {renderLinks()}
            </Menu>
        );

        return (
            <StyledNavbar>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            <Link exact to="/">code &bull; yay</Link>
                        </Typography>

                        <MiddleSpace/>

                        <DesktopSection>
                            {renderLinks()}
                        </DesktopSection>

                        <MobileSection>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MenuIcon/>
                            </IconButton>
                        </MobileSection>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </StyledNavbar>
        );
    }
}

export default hot(module)(Navbar);
