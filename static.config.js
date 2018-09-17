import React from 'react'
import {reloadRoutes} from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import {ServerStyleSheet} from 'styled-components'

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

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
    }, webpack: (config, {defaultLoaders}) => {
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
