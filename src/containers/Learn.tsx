import React from 'react'
import LinkButtonList from "@app/components/LinkButtonList";
import { withRouteData } from "react-static";

export default withRouteData(({node}) => {
    const links = node.children.map(child => ({text: child.text, to: `${node.fullPath}/${child.route}`}));
    return (
        <div>
            <LinkButtonList links={links}/>
        </div>)
})
