import React from 'react'
import LinkButtonList from "@app/components/LinkButtonList";
import { withRouteData } from "react-static";
import { LearnTree } from "@app/content/learn";

interface Data {
    node: LearnTree
}

export default withRouteData((data: Data) => {
    const tree = data.node;
    const links = tree.children.map(child => ({text: child.text, to: `${tree.fullPath}/${child.route}`}));

    return (
        <div>
            <LinkButtonList links={links}/>
        </div>)
})
