class Node {
    constructor(row, col, color, weight, distance) {
        this.row = row;
        this.col = col;
        this.color = color;
        this.weight = weight;   // current weight/distance from source, d[u]
        this.distance = distance;   // distance between nodes (1 or infinity), w<u,v>
        this.predecessor = null;
        this.adjNodes = [];
    }
}

function MakeList(array) {
    // var list = new Array(array.length * array[0].length);
    var listOfNodes = [];
    var numRows = 21;
    var numCols = 44;

    // make initial nodes
    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            var node;

            if(array[i][j] === 'gray') {
                node = new Node(i, j, array[i][j], Infinity, Infinity); // row, col, color, weight, dist
            }
            else if(array[i][j] === 'green') {
                node = new Node(i, j, array[i][j], 0, 0);
            }
            else if(array[i][j] === 'red') {
                node = new Node(i, j, array[i][j], Infinity, 2);
            }
            else {
                node = new Node(i, j, array[i][j], Infinity, 1);
            }

            listOfNodes.push(node);
        }
    }

    // add adjacent nodes
    for(let row = 0; row < numRows; row++) {
        for(let col = 0; col < numCols; col++) {
            var current = listOfNodes[(row * numCols) + col];

            var right = listOfNodes[(row * numCols) + (col + 1)];
            if(col < numCols - 1 && right !== undefined) {
                current.adjNodes.push(right);
            }
            var left = listOfNodes[(row * numCols) + (col - 1)];
            if(col !== 0 && left !== undefined) {
                current.adjNodes.push(left);
            }

            var top = listOfNodes[((row - 1) * numCols) + col];
            if(row !== 0 && top !== undefined) {
                current.adjNodes.push(top);
            }

            var bottom = listOfNodes[((row + 1) * numCols) + col];
            if(row !== numRows - 1 && bottom !== undefined) {
                current.adjNodes.push(bottom);
            }
        }
    }

    
    return listOfNodes.sort((a, b) => a.weight - b.weight);
}

export {Node, MakeList};