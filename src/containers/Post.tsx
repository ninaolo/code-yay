import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@app/components/Router";
import MarkdownContent from "@app/components/MarkdownContent";

export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    contents: string;
}

export default function Post() {
    const {post}: { post: BlogPost } = useRouteData();
    return (
        <div>
            <Link to="/blog/">{"<"} Back</Link>
            <br/>
            <h1>{post.title}</h1>
            <MarkdownContent content={post.contents}/>
        </div>
    );
}
