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
            children: []
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
            children: []
        }
    ]
}
