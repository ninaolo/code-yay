export const learnTree = {
    route: 'learn',
    text: 'Learn',
    fullPath: '/learn',
    children: [
        {
            route: 'sorting',
            text: 'Sorting',
            children: [{
                text: 'Bubble sort',
                slug: 'bubble-sort',
            }, {
                text: 'Heap sort',
                slug: 'heap-sort'
            }, {
                text: 'Insertion sort',
                slug: 'insertion-sort'
            }, {
                text: 'Merge sort',
                slug: 'merge-sort'
            }, {
                text: 'Quick sort',
                slug: 'quick-sort'
            }]
        },
        {
            route: 'problems',
            text: 'Problems',
            children: [{
                route: 'arrays',
                text: 'Arrays',
                children: [{
                    text: 'Spiral',
                    slug: 'arrays-spiral'
                }, {
                    text: 'Sum of two',
                    slug: 'arrays-sum-of-two'
                }]
            }, {
                route: 'hashtable',
                text: 'Hashtable',
                children: [{
                    text: 'Implement',
                    slug: 'hashtable-implement'
                }]
            }, {
                route: 'linked-list',
                text: 'Linked list',
                children: [{
                    text: 'Cycle',
                    slug: 'linked-list-cycle'
                }, {
                    text: 'Delete',
                    slug: 'linked-list-delete'
                }, {
                    text: 'Merge',
                    slug: 'linked-list-merge'
                }]
            }, {
                route: 'strings',
                text: 'Strings',
                children: [{
                    text: 'Anagram',
                    slug: 'anagram'
                }, {
                    text: 'Palindrome',
                    slug: 'palindrome'
                }, {
                    text: 'Unique chars',
                    slug: 'unique-chars'
                }]
            }, {
                route: 'trees',
                text: 'Trees',
                children: []
            }]
        }, {
            route: 'algorithms',
            text: 'Algorithms',
            children: [{
                text: 'A-star',
                slug: 'a-star'
            }, {
                text: 'BFS graph',
                slug: 'bfs-graph'
            }, {
                text: 'DFS graph',
                slug: 'dfs-graph'
            }, {
                text: 'Dijkstras',
                slug: 'dijkstras'
            }, {
                text: 'BST traversal',
                slug: 'bst-traversal'
            }, {
                text: 'Topological sort',
                slug: 'topological-sort'

            }]
        }, {
            route: 'concepts',
            text: 'Concepts',
            children: [{
                text: 'Backtracking',
                slug: 'backtracking'
            }, {
                text: 'Greedy',
                slug: 'greedy'
            }, {
                text: 'Memoization',
                slug: 'memoization'
            }, {
                text: 'Recursion',
                slug: 'recursion'
            }, {
                text: 'Tabulation',
                slug: 'tabulation'
            }]
        }, {
            route: 'languages',
            text: 'Languages',
            children: [{
                route: 'java',
                text: 'Java',
                children: [{
                    text: 'Datatypes',
                    slug: 'java-datatypes'
                }, {
                    text: 'Lambdas/closures',
                    slug: 'java-lambdas-closures'
                }, {
                    text: 'Pros/cons',
                    slug: 'java-pros-cons'
                }, {
                    text: 'Quick questions',
                    slug: 'java-quick-questions'
                }, {
                    text: 'Sorting',
                    slug: 'java-sort'
                }]
            }]
        }, {
            route: 'datastructures',
            text: 'Datastructures',
            children: [{
                text: 'Binary tree',
                slug: 'binary-tree'
            }, {
                text: 'Prefix tree',
                slug: 'prefix-tree'
            }, {
                text: 'Splay',
                slug: 'splay'
            }]
        }
    ]
}
