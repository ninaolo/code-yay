interface LearnTree {
    route: string,
    text: string,
    fullPath: string,
    children: Node[]
}

export interface Node {
    route: string,
    text: string,
    children?: Node[]
    slug?: string
    content?: NodeContent
}

interface NodeContent {
    title: string,
    what: string
    how: string,
    contents: string,
}

export const learnTree: LearnTree = {
    route: 'learn',
    text: 'Learn',
    fullPath: '/learn',
    children: [
        {
            route: 'sorting',
            text: 'Sorting',
            children: [{
                route: 'bubbelsort',
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
            children: []
        }
    ]
};
