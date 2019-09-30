import React from "react";
import LinkButtonList from "@app/components/LinkButtonList";
import {useRouteData} from "react-static";
import { LearnTree } from "@app/content/learn";

interface Data {
    node: LearnTree
}

export default function Learn() {
    const data : Data = useRouteData();
    const tree = data.node;
    const links = tree.children.map(child => (
        {text: child.text, to: child.slug ? `${tree.fullPath}/${child.slug}` : `${tree.fullPath}/${child.route}`}
    ));

    return (
        <div>
            <LinkButtonList links={links}/>
        </div>
    );
};
