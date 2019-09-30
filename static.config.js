import path from 'path'
import jdown from 'jdown'
import { learnTree } from './src/content/tree'

const getRoutesFromNode = (node, path, learnPostsBySlug) => {
    node.fullPath = node.slug ? `${path}/${node.slug}` : `${path}/${node.route}`
    if (node.slug) {
        node.content = learnPostsBySlug[node.slug]
    }

    return {
        path: node.slug ? `/${node.slug}` : `/${node.route}`,
        template: node.slug ? 'src/components/LearnNode.tsx' : 'src/containers/Learn.tsx',
        getData: () => ({
            node,
        }),
        children: node.children ? node.children.map(child => getRoutesFromNode(child, node.fullPath, learnPostsBySlug)) : []
    }
};

export default {
    siteRoot: 'https://codercatch.com',
    entry: path.join(__dirname, 'src', 'index.js'),

    getSiteData: () => ({
        title: 'code-yay',
    }),

    getRoutes: async () => {
        const { posts, about, learn } = await jdown('content');

        const learnPostsBySlug = learn.reduce((map, post) => {
            map[post.slug] = post;
            return map
        }, {});

        return [
            {
                path: '/about',
                template: 'src/containers/About.tsx',
                getData: () => ({
                    about,
                }),
            },
            {
                path: '/learn',
                template: 'src/containers/Learn.tsx',
                getData: () => ({
                    node: learnTree,
                }),
                children: learnTree.children.map(node => (getRoutesFromNode(node, '/learn', learnPostsBySlug))),
            },
            {
                path: '/',
                template: 'src/containers/InterviewPrep.tsx',
            },
            {
                path: '/interview-prep',
                template: 'src/containers/InterviewPrep.tsx',
            },
            {
                path: '/blog',
                template: 'src/containers/Blog.tsx',
                getData: () => ({
                    posts,
                }),
                children: posts.map(post => ({
                    path: `/post/${post.slug}`,
                    template: 'src/containers/Post.tsx',
                    getData: () => ({
                        post,
                    }),
                })),
            },
        ]
    },
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
        require.resolve('react-static-plugin-typescript'),
    ],
}
