import React from "react"
import { withRouteData, Link } from "react-static"
import { hot } from "react-hot-loader"

const prettyDate = date => {
    date = new Date(date)
    const month = date.getMonth() + 1
    return `${date.getFullYear()}-${month.toString().padStart(2, "0")}-${date.getDate()}`
}

const Blog = withRouteData(({ posts }) => (
    <div>
        <h1>It"s blog time.</h1>
        <br />
        All Posts:
        <ul>
            {posts.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            }).map(post => (
                <li key={post.slug}>
                    {prettyDate(post.date)}: <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
))

export default hot(module)(Blog)
