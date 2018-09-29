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
            children: []
        }
    ]
};
