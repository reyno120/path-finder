import React, { Component } from 'react';
import { MakeList } from '../functions/MakeGraph';
import { CSSTransition } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import './slideCSS.css';
import { createChristmasTree } from './presets/christmasTree.js';
import { createBatmanTree } from './presets/batmanTree.js';
import { createAvatarTree } from './presets/avatarTree.js';

class GridSystem extends Component {
    state = {  
        grid: new Array(21).fill('white').map(() => Array(44).fill('white')),
        startLocation: [0, 0],
        finishLocation: [20, 43],
        runButton: false
    }

    componentDidMount = () => {
        var grid = this.state.grid;
        grid[this.state.startLocation[0]][this.state.startLocation[1]] = 'green';
        grid[this.state.finishLocation[0]][this.state.finishLocation[1]] = 'red';
        this.setState({grid: grid});
    }

    handleBoxClick = (row, column) => {
        var grid = this.state.grid;

        switch(this.props.selector) {
            case 'start':
                if(grid[row][column] !== 'green') {
                    grid[row][column] = 'green';
                    grid[this.state.startLocation[0]][this.state.startLocation[1]] = 'white';
                    this.setState({startLocation: [row, column]});
                }
                break;
            
            case 'finish':
                if(grid[row][column] !== 'red') {
                    grid[row][column] = 'red';
                    grid[this.state.finishLocation[0]][this.state.finishLocation[1]] = 'white';
                    this.setState({finishLocation: [row, column]});
                }
                break;

            case 'obstacle':
                grid[row][column] = (grid[row][column] === 'white' ? 'gray' : grid[row][column]);
                break;

            case 'hammer':
                grid[row][column] = (grid[row][column] === 'gray' ? 'white' : grid[row][column]);
                break;
        }

        this.setState({grid: grid});
    }


    findShortestPath() {
        this.setState({runButton: true});
        var adjacencyList = MakeList(this.state.grid);
        var found = false;
        var currentNode;
        var redFlag = null;
            
        while(adjacencyList.length !== 0) {
            currentNode = adjacencyList.shift();
            for(let i = 0; i < currentNode.adjNodes.length; i++) {
                if(adjacencyList.includes(currentNode.adjNodes[i]) && currentNode.adjNodes[i].weight > currentNode.weight + currentNode.adjNodes[i].distance) {
                    currentNode.adjNodes[i].weight = currentNode.weight + currentNode.adjNodes[i].distance;
                    currentNode.adjNodes[i].predecessor = currentNode;
                    adjacencyList.sort((a, b) => a.weight - b.weight);

                    if(currentNode.adjNodes[i].color === 'red') {
                        var redFlag = currentNode.adjNodes[i];
                        found = true;
                        console.log("found");
                    }
                }
            }
        }

        if(found) {
            var path = [];
            currentNode = redFlag.predecessor;

            while(currentNode.color != 'green') { 
                path.unshift(currentNode);
                currentNode = currentNode.predecessor; 
            }
            
            var node = path.shift();
            var grid = this.state.grid;
            grid[node.row][node.col] = 'blue';
            this.setState({grid: grid}, () => {
                this.updateState(path);
            });
        }
        else {
            alert("not found");
            // need to reset
        }
    }

    updateState(pathArray) {
        var node = pathArray.shift();
        if(node === undefined || node.color === 'red') {
            return;
        } 

        var grid = this.state.grid;
        grid[node.row][node.col] = 'blue';
        this.setState({grid: grid}, () => {
            setTimeout(() => {this.updateState(pathArray);}, 50);
        });
    }

    reset() {
        window.location.reload();
    }

    loadChristmasTree() {
        var grid = new Array(21).fill('white').map(() => Array(44).fill('white'));
        this.setState({grid: grid}, () => {
            grid = createChristmasTree(grid);
            this.setState({grid: grid});
        });
        
    }

    loadEmptyTree() {
        var grid = new Array(21).fill('white').map(() => Array(44).fill('white'));
        grid[0][0] = 'green';
        grid[20][43] = 'red';
        this.setState({grid: grid});
    }

    loadBatmanTree() {
        var grid = new Array(21).fill('white').map(() => Array(44).fill('white'));
        this.setState({grid: grid}, () => {
            grid = createBatmanTree(grid);
            this.setState({grid: grid});
        });
    }

    loadAvatarTree() {
        var grid = new Array(21).fill('white').map(() => Array(44).fill('white'));
        this.setState({grid: grid}, () => {
            grid = createAvatarTree(grid);
            this.setState({grid: grid});
        });
    }


    render() {
        if(this.props.run) {
            this.findShortestPath();
        }

        return (
            <div>
                <div style={{width: '750px', height: '400px', margin: 'auto', fontSize: 0}}>
                    {this.state.grid.map((array, row) => {
                        return (
                            array.map((value, column) => {
                                return (
                                    <CSSTransition in={this.state.grid[row][column] === 'blue' ? true : false} timeout={500} classNames="slide">
                                        <div 
                                            style={{width: '15px', height: '15px', borderColor: this.props.colors.mainSecondaryColor, border: 'solid .5px', borderRadius: '3px', display: 'inline-block',
                                                    backgroundColor: this.state.grid[row][column]
                                                    }}
                                            onMouseEnter={(e) => {
                                                if(e.buttons === 1) {
                                                    this.handleBoxClick(row, column);
                                                }
                                            }}
                                            onClick={() => this.handleBoxClick(row, column)}
                                        >
                                        </div>
                                    </CSSTransition>
                                );
                            })
                        );
                    })}
                </div>
                <div style={{margin: 'auto', textAlign: 'center'}}>
                    <Button variant="contained" style={{fontSize: '18px', marginLeft: '1em', marginRight: '1em', backgroundColor: 'green'}} onClick={() => this.findShortestPath()} disabled={this.state.runButton}>Run</Button>
                    <Button variant="contained" style={{fontSize: '18px', backgroundColor: 'red'}} onClick={() => this.reset()}>Reset</Button>
                </div>
            </div>
        );
    }
}
 
export default GridSystem;