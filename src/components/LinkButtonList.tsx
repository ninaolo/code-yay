import React from 'react'
import Button from "@app/components/Button";
import { Link } from "react-router-dom";
import { ButtonProps } from "@material-ui/core/Button";
import styled from "styled-components";

interface LinkButtonProps extends ButtonProps {
    innerRef?: (instance: any) => void,
    text: string,
    to: string,
}

interface LinkButtonListProps {
    links: LinkButtonProps[]
}

const StyledButtonContainer = styled.span`
  margin: 1em 0;
`;

const StyledLearnButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-evenly;
  flex-wrap: wrap;
`;

const ButtonLink: React.SFC<LinkButtonProps> = props => <Link to={props.to} {...props} />;

export default class LinkButtonList extends React.Component<LinkButtonListProps, {}> {

    render() {

        const LearnButton: React.SFC<LinkButtonProps> = props => (
            <Button color="primary" variant="contained"
                    box={true} component={ButtonLink} {...props}>{props.text}</Button>
        );

        return (
            <StyledLearnButtons>
                {this.props.links.map(p => (
                    <StyledButtonContainer>
                        <LearnButton text={p.text} to={p.to} key={p.to}/>
                    </StyledButtonContainer>
                ))}
            </StyledLearnButtons>
        )
    }
}
