import * as React from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import styled from 'styled-components';

interface IProps extends ButtonProps {
    innerRef?: (instance: any) => void,
    round?: boolean,
    box?: boolean
}

const StyledButton = styled(MuiButton) <IProps>`
  && {
    border-radius: ${props => (props.round ? '1.5rem' : '0')};
    padding: ${props => props.box ? '3rem' : '.75rem 3rem'};
    width: ${props => props.box ? '150px' : 'inherit'};
    text-transform: none;
    box-shadow: none;
  }
`;

const Button: React.SFC<IProps> = props => (
    <StyledButton {...props} />
);

export default Button;
