import React from 'react'
import { Link } from "react-router-dom";
import { ButtonProps } from "@material-ui/core/Button";
import Button, { AppButtonProps } from "@app/components/Button";

export interface LinkButtonProps extends ButtonProps, AppButtonProps {
    innerRef?: (instance: any) => void,
    text: string,
    to: string,
}

export const ButtonLink: React.SFC<LinkButtonProps> = props => <Link to={props.to} {...props} />;

export const LinkButton: React.SFC<LinkButtonProps> = props => (
    <Button color="primary" variant="contained" component={ButtonLink} {...props}>{props.text}</Button>
);
