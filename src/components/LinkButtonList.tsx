import React from "react"
import Button from "@app/components/Button";
import styled from "styled-components";
import { ButtonLink, LinkButtonProps } from "@app/components/LinkButton";

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

export default class LinkButtonList extends React.Component<LinkButtonListProps, {}> {

    render() {
        const LearnButton: React.FunctionComponent<LinkButtonProps> = props => (
                <StyledButtonContainer>
                    {/*
                    // @ts-ignore */}
                    <Button color="secondary" variant="contained" round
                            box component={ButtonLink} {...props}>{props.text}</Button>
                </StyledButtonContainer>
            );

        return (
            <StyledLearnButtons>
                {this.props.links.map(p => (
                    <LearnButton text={p.text} to={p.to} key={p.to}/>
                ))}
            </StyledLearnButtons>
        )
    }
}
