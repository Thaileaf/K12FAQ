// Define the structure of the input data
interface TreeData {
    content: string;
    choices?: { [key: string]: TreeData };
}

// Define the node structure for our tree
class TreeNode {
    title: string;
    content: string;
    children: TreeNode[];
    id: number;

    constructor(title: string, content: string, id: number = 0) {
        this.content = content;
        this.title = title;
        this.children = [];
        this.id = id;
    }

    addChild(child: TreeNode): void {
        this.children.push(child);
    }

    // Pretty print the tree
    toString(level: number = 0): string {
        const indent = '  '.repeat(level);
        let result = `${indent}${this.title}: ${this.content}\n`;
        for (const child of this.children) {
            result += child.toString(level + 1);
        }
        return result;
    }
}


class ChatbotTree {
    tree: TreeNode;
    currNode: TreeNode;

    constructor(data: TreeData) {
        this.tree = this.buildTree(data);
        this.currNode = this.tree;
    }

    buildTree(data: TreeData): TreeNode {
        let id = 0;

        function buildTreeHelper(data: TreeData): TreeNode {
            const node = new TreeNode("", data.content);
            node.id = id++;

            if (data.choices) {
                for (const [title, childData] of Object.entries(data.choices)) {
                    const childNode = buildTreeHelper(childData);
                    childNode.title = title;
                    node.addChild(childNode);
                }
            }

            return node;
        }

        return buildTreeHelper(data);
    }

    // Breadth-first search implementation
    bfs(searchID: number): TreeNode | null {
        const queue: TreeNode[] = [this.tree];

        while (queue.length > 0) {
            const currentNode = queue.shift()!;

            // Check if current node matches search criteria
            if (currentNode.id == searchID) {
                return currentNode;
            }

            // Add all children to the queue
            for (const child of currentNode.children) {
                queue.push(child);
            }
        }

        return null; // Node not found
    }








}



export { TreeNode, TreeData, ChatbotTree };

