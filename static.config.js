import React from 'react'
import {reloadRoutes} from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import {ServerStyleSheet} from 'styled-components'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
    siteRoot: "https://ninaolo.github.io",
    basePath: "code-yay",

    getSiteData: () => ({
        title: 'React Static',
    }),

    getRoutes: async () => {
        const {posts, home, about} = await jdown('content')
        return [
            {
                path: '/',
                component: 'src/containers/Home',
                getData: () => ({
                    ...home,
                }),
            },
            {
                path: '/about',
                component: 'src/containers/About',
                getData: () => ({
                    about,
                }),
            },
            {
                path: '/blog',
                component: 'src/containers/Blog',
                getData: () => ({
                    posts,
                }),
                children: posts.map(post => ({
                    path: `/post/${post.slug}`,
                    component: 'src/containers/Post',
                    getData: () => ({
                        post,
                    }),
                })),
            },
            {
                is404: true,
                component: 'src/containers/404',
            },
        ]
    },

    renderToHtml: (render, Comp, meta) => {
        const sheet = new ServerStyleSheet()
        const html = render(sheet.collectStyles(<Comp/>))
        meta.styleTags = sheet.getStyleElement()
        return html
    },

    Document: class CustomHtml extends React.Component {
        render() {
            const {
                Html, Head, Body, children, renderMeta,
            } = this.props

            return (
                <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    {renderMeta.styleTags}
                </Head>
                <Body>{children}</Body>
                </Html>
            )
        }
    },
}
