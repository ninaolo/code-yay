import React from "react";
import { withRouteData } from 'react-static'
// @ts-ignore
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

    const getHow = () => {
        if (node.content && node.content.how) {
            return (
                <div>
                    <h3>How?</h3>
                    <ul>
                        {node.content.how.split(" | ").map((h: string) => {
                            return <li key={h}>{h}</li>
                        })}
                    </ul>
                </div>
            )
        }
        return ""
    };

    const getComplexity = () => {
        if (node.content && node.content.bestTime) {
            return (
                <div>
                    <h3>Complexity</h3>
                    <ul>
                        <li><b>Time best: </b>{node.content.bestTime}</li>
                        <li><b>Time worst: </b>{node.content.worstTime}</li>
                        <li><b>Time average: </b>{node.content.averageTime}</li>
                        <li><b>Space: </b>{node.content.space}</li>
                    </ul>
                </div>
            )
        }
        return ""
    };

    const getProsCons = () => {
        if (node.content && node.content.pros && node.content.cons) {
            return (
                <div>
                    <h3>Pros/cons</h3>
                    <ul>
                        <li>Pros:{node.content.pros}</li>
                        <li>Cons:{node.content.cons}</li>
                    </ul>
                </div>
            )
        }
        return ""
    };

    const getImplementation = () => {
        if (node.content && node.content.contents) {
            return (
                <div>
                    {convert(node.content.contents)}
                </div>
            )
        }
        return ""
    };

    return (
        <div>
            <h1>{node.content.title}</h1>

            <h3>What?</h3>
            <p>{node.content.what}</p>

            {getHow()}

            {getComplexity()}

            {getProsCons()}

            {getImplementation()}
        </div>
    );
})
