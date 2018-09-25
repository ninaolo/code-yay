import React from 'react'
import Button from "@app/components/Button";
import { Link } from "react-router-dom";
import { ButtonProps } from "@material-ui/core/Button";

interface LinkButtonProps extends ButtonProps {
    innerRef?: (instance: any) => void,
    text: string,
    to: string,
}

interface LinkButtonListProps {
    links: LinkButtonProps[]
}

const ButtonLink: React.SFC<LinkButtonProps> = props => <Link to={props.to} {...props} />;

export default class LinkButtonList extends React.Component<LinkButtonListProps, {}> {

    render() {

        const LearnButton: React.SFC<LinkButtonProps> = props => (
            <Button color="primary" variant="contained"
                    box={true} component={ButtonLink} {...props}>{props.text}</Button>
        );

        return (
            <div>
                {this.props.links.map(p => <LearnButton text={p.text} to={p.to} key={p.to}/>)}
            </div>
        )
    }
}
