import React from "react"
import {Link} from "@app/components/Router"
import {ButtonProps} from "@material-ui/core/Button";
import Button, {AppButtonProps} from "@app/components/Button";

export interface LinkButtonProps extends ButtonProps, AppButtonProps {
    innerRef?: (instance: any) => void,
    text: string,
    to: string,
}

export const ButtonLink: React.FunctionComponent<LinkButtonProps> = props => <Link to={props.to} {...props} />;

export const LinkButton: React.FunctionComponent<LinkButtonProps> = props => (
    // @ts-ignore
    <Button color={props.color ? props.color : "primary"}
            variant="contained"
            component={ButtonLink} {...props}>{props.text}
    </Button>
);
