import * as React from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import styled from 'styled-components';

interface IProps extends ButtonProps {
    round?: boolean,
}

const StyledButton = styled(MuiButton)<IProps>`
  && {
    border-radius: ${props => (props.round ? '1.5rem' : '0')};
    font-family: sans-serif;
    padding: .75rem 3rem;
    text-transform: none;
  }
`;

const Button: React.SFC<IProps> = props => (
    <StyledButton {...props} />
);

export default Button;