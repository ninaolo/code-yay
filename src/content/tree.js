export const learnTree = {
    route: 'learn',
    text: 'Learn',
    fullPath: '/learn',
    children: [
        {
            route: 'sorting',
            text: 'Sorting',
            children: [{
                route: 'bubblesort',
                text: 'Bubble sort',
                slug: 'bubble-sort'
            }, {
                route: 'heapsort',
                text: 'Heap sort',
                slug: 'heap-sort'
            }, {
                route: 'insertionsort',
                text: 'Insertion sort',
                slug: 'insertion-sort'
            }, {
                route: 'mergesort',
                text: 'Merge sort',
                slug: 'merge-sort'
            }, {
                route: 'quicksort',
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
                    route: 'spiral',
                    text: 'Spiral',
                    slug: 'arrays-spiral'
                }, {
                    route: 'sum-of-two',
                    text: 'Sum of two',
                    slug: 'arrays-sum-of-two'
                }]
            }, {
                route: 'hashtable',
                text: 'Hashtable',
                children: [{
                    route: 'implement',
                    text: 'Implement',
                    slug: 'hashtable-implement'
                }]
            }, {
                route: 'linked-list',
                text: 'Linked list',
                children: [{
                    route: 'cycle',
                    text: 'Cycle',
                    slug: 'linked-list-cycle'
                }, {
                    route: 'delete',
                    text: 'Delete',
                    slug: 'linked-list-delete'
                }, {
                    route: 'merge',
                    text: 'Merge',
                    slug: 'linked-list-merge'
                }]
            }, {
                route: 'strings',
                text: 'Strings',
                children: []
            }, {
                route: 'trees',
                text: 'Trees',
                children: []
            }]
        }, {
            route: 'algorithms',
            text: 'Algorithms',
            children: [{
                route: 'astar',
                text: 'A-star',
                slug: 'a-star'
            }, {
                route: 'bfsgraph',
                text: 'BFS graph',
                slug: 'bfs-graph'
            }, {
                route: 'dfsgraph',
                text: 'DFS graph',
                slug: 'dfs-graph'
            }, {
                route: 'dijkstras',
                text: 'Dijkstras',
                slug: 'dijkstras'
            }, {
                route: 'bsttraversal',
                text: 'BST traversal',
                slug: 'bst-traversal'
            }, {
                route: 'topologicalsort',
                text: 'Topological sort',
                slug: 'topological-sort'

            }]
        }, {
            route: 'concepts',
            text: 'Concepts',
            children: [{
                route: 'backtracking',
                text: 'Backtracking',
                slug: 'backtracking'
            }, {
                route: 'greedy',
                text: 'Greedy',
                slug: 'greedy'
            }, {
                route: 'memoization',
                text: 'Memoization',
                slug: 'memoization'
            }, {
                route: 'recursion',
                text: 'Recursion',
                slug: 'recursion'
            }, {
                route: 'tabulation',
                text: 'Tabulation',
                slug: 'tabulation'
            }
            ]
        }, {
            route: 'languages',
            text: 'Languages',
            children: [{
                route: 'java',
                text: 'Java',
                children: [{
                    route: 'datatypes',
                    text: 'Datatypes',
                    slug: 'java-datatypes'
                }, {
                    route: 'lambdas-closures',
                    text: 'Lambdas/closures',
                    slug: 'java-lambdas-closures'
                }, {
                    route: 'pros-cons',
                    text: 'Pros/cons',
                    slug: 'java-pros-cons'
                }, {
                    route: 'quick-questions',
                    text: 'Quick questions',
                    slug: 'java-quick-questions'
                }, {
                    route: 'sort',
                    text: 'Sorting',
                    slug: 'java-sort'
                }]
            }]
        }, {
            route: 'datastructures',
            text: 'Datastructures',
            children: [{
                route: 'binarytree',
                text: 'Binary tree',
                slug: 'binary-tree'
            }, {
                route: 'prefixtree',
                text: 'Prefix tree',
                slug: 'prefix-tree'
            }, {
                route: 'splay',
                text: 'Splay',
                slug: 'splay'
            }]
        }
    ]
}
