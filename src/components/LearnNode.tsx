import React from "react";
import { withRouteData } from 'react-static'
import convert from 'htmr'
import { Node } from '@app/content/learn'

interface LearnNode {
    node: Node
}

export default withRouteData((learnNode: LearnNode) => {
    const node = learnNode.node;

    if (!node.content) {
        return "Oops! No information found here."
    }

    return (
        <div>
            <h1>{node.content.title}</h1>

            <h3>What?</h3>
            <p>{node.content.what}</p>

            <h3>How?</h3>
            {node.content.how.split(" | ").map((h: string) => {
                return <p key={h}>{h}</p>
            })}

            <h3>Implementation</h3>
            {convert(node.content.contents)}
        </div>
    );
})
