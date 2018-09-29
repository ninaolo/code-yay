export interface LearnTree {
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
    bestTime?: string,
    worstTime?: string,
    averageTime?: string,
    space?: string,
    pros?: string,
    cons?: string,
    info?: string,
    contents: string,
}

