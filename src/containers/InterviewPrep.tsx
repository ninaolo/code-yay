import React from "react";
import styled from "styled-components";
import {LinkButton} from "@app/components/LinkButton";

const StyledInterviewPrep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  div {
    padding: 1.5em 0;
  }
`;

export default function InterviewPrep() {
    return (
        <StyledInterviewPrep>
            <div>
                <h1>Coding interview prep</h1>
                <p>Prepping for a <code>coding interview</code>? Or just brushing up on your Computer Science skills?
                </p>
                <p>Have a look at this awesome learning tool structured into different categories!</p>
            </div>
            <div>
                <LinkButton color="secondary" round box to="/learn" text="Start learning"/>
            </div>
        </StyledInterviewPrep>
    )
}
