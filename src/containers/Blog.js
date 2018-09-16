import React from 'react'
import {withRouteData, Link} from 'react-static'

function prettyDate(date) {
    date = new Date(date);
    const month = date.getMonth() + 1;
    return `${date.getFullYear()}-${month.toString().padStart(2, "0")}-${date.getDate()}`
}

export default withRouteData(({posts}) => (
    <div>
        <h1>It's blog time.</h1>
        <br/>
        All Posts:
        <ul>
            {posts.map(post => (
                <li key={post.slug}>
                    {prettyDate(post.date)}: <Link to={`/blog/post/${post.slug}/`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
))
