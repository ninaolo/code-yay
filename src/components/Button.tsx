import * as React from "react";
import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import styled from "styled-components";

export interface AppButtonProps extends ButtonProps {
    innerRef?: (instance: any) => void,
    round?: boolean,
    box?: boolean
}

const StyledButton = styled(MuiButton) <AppButtonProps>`
  && {
    border-radius: ${props => (props.round ? "1.5rem" : "0")};
    padding: ${props => props.box ? "3rem" : ".75rem 3rem"};
    width: ${props => props.box ? "200px" : "inherit"};
    text-transform: none;
    box-shadow: none;
    color: white;
    font-family: Lato;
    font-size: 15px;
  }
`;

const Button: React.SFC<AppButtonProps> = props => (
    <StyledButton {...props} />
);

export default Button;
