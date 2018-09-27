import React from "react";
import { withRouteData } from 'react-static'
import convert from 'htmr'

export default withRouteData(({node}) => {
    return (
        <div>
            <h1>{node.content.title}</h1>

            <h3>What?</h3>
            <p>{node.content.what}</p>

            <h3>How?</h3>
            {node.content.how.split(" | ").map((h: string) => {
                return <p>{h}</p>
            })}

            <h3>Implementation</h3>
            <p>{convert(node.content.contents)}</p>
        </div>
    );
})
