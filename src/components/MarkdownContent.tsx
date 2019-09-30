import React from "react"
// @ts-ignore
import convert from "htmr"
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism.css"
import styled from "styled-components";
import "prismjs/components/prism-java";
import "prismjs/components/prism-bash";

interface Props {
    content: string
}

const StyledMarkdownContent = styled.div`
  && pre {
    background: #f4f4f4;
    font-size: 13px;
    padding: .8em;
    overflow: auto;
    border-radius: 7px;
  }
`;

class MarkdownContent extends React.Component<Props, {}> {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <StyledMarkdownContent>
                {convert(this.props.content)}
            </StyledMarkdownContent>
        )
    }

}

export default MarkdownContent;
