import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@app/components/Router";
import { BlogPost } from "@app/containers/Post";

const prettyDate = (uglyDate: string) => {
    const date = new Date(uglyDate);
    const month = date.getMonth() + 1;
    return `${date.getFullYear()}-${month.toString().padStart(2, "0")}-${date.getDate()}`;
};

export default function Blog() {
    const {posts} = useRouteData();
    return (
        <div>
            <h1>Tech blog</h1>
            <br/>
            All Posts:
            <ul>
                {posts.sort((a: BlogPost, b: BlogPost) => {
                    // @ts-ignore
                    return new Date(b.date) - new Date(a.date);
                }).map((post: BlogPost) => (
                    <li key={post.slug}>
                        {prettyDate(post.date)}: <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
