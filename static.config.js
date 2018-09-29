import React from 'react'
import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import { ServerStyleSheet } from 'styled-components'
import path from 'path'
import { learnTree } from './src/content/tree'

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

chokidar.watch('content').on('all', () => reloadRoutes())

const getRoutesFromNode = (node, path, learnPostsBySlug) => {
    node.fullPath = `${path}/${node.route}`
    if (node.slug) {
        node.content = learnPostsBySlug[node.slug]
    }

    return {
        path: `/${node.route}`,
        component: node.slug ? 'src/components/LearnNode' : 'src/containers/Learn',
        getData: () => ({
            node,
        }),
        children: node.children ? node.children.map(child => getRoutesFromNode(child, node.fullPath, learnPostsBySlug)) : []
    }
}

export default {
    siteRoot: 'https://ninaolo.github.io',
    basePath: 'code-yay',
    entry: path.join(__dirname, 'src', 'index.tsx'),

    getSiteData: () => ({
        title: 'code-yay',
    }),

    getRoutes: async () => {
        const { posts, home, about, learn } = await jdown('content')

        const learnPostsBySlug = learn.reduce((map, post) => {
            map[post.slug] = post
            return map
        }, {})
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
                path: '/learn',
                component: 'src/containers/Learn',
                getData: () => ({
                    node: learnTree,
                }),
                children: learnTree.children.map(node => (getRoutesFromNode(node, '/learn', learnPostsBySlug))),
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
            }
        ]
    },

    renderToHtml: (render, Comp, meta) => {
        const sheet = new ServerStyleSheet()
        const html = render(sheet.collectStyles(<Comp/>))
        meta.styleTags = sheet.getStyleElement()
        return html
    },

    Document: class CustomHtml extends React.Component {
        render () {
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
    webpack: (config, { defaultLoaders }) => {
        // Add .ts and .tsx extension to resolver
        config.resolve.extensions.push('.ts', '.tsx')

        // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
        // to react-statics alias resolution
        config.resolve.alias = typescriptWebpackPaths.resolve.alias

        // We replace the existing JS rule with one, that allows us to use
        // both TypeScript and JavaScript interchangeably
        config.module.rules = [
            {
                oneOf: [
                    {
                        test: /\.(js|jsx|ts|tsx)$/,
                        exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
                        use: [
                            {
                                loader: 'babel-loader',
                            },
                            {
                                loader: require.resolve('ts-loader'),
                                options: {
                                    transpileOnly: true,
                                },
                            },
                        ],
                    },
                    defaultLoaders.cssLoader,
                    defaultLoaders.fileLoader,
                ],
            },
        ]
        return config
    },
}
