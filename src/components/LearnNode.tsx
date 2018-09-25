import React from "react";
import { withRouteData } from 'react-static'
import convert from 'htmr'

export default withRouteData(({ node }) => (
    <div>
        <h1>{node.title}</h1>
            <p>{node.content ? convert(node.content.contents) : "Oops! Found no information here."}</p>
    </div>
))
