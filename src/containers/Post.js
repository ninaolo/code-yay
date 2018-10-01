import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import MarkdownContent from '@app/components/MarkdownContent'

export default withRouteData(({ post }) => (
    <div>
        <Link to="/blog/">{'<'} Back</Link>
        <br />
        <h1>{post.title}</h1>
        <MarkdownContent content={post.contents}/>
    </div>
))
