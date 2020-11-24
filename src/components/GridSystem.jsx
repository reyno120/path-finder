import React, { Component } from 'react';

class GridSystem extends Component {
    state = {  
        grid: new Array(44).fill('white').map(() => Array(22).fill('white')),
        startLocation: [0, 0],
        finishLocation: [43, 21]
    }

    componentDidMount = () => {
        var grid = this.state.grid;
        grid[this.state.startLocation[0]][this.state.startLocation[1]] = 'green';
        grid[this.state.finishLocation[0]][this.state.finishLocation[1]] = 'red';
        this.setState({grid: grid});
    }

    decideBackgroundColor = (row, col) => {
        var grid = this.state.grid
        if(grid[row][col] === 'white' && this.props.theme === true) { // change white spaces to dark
            return '#313335';
        }
        else if(grid[row][col] === '#313335' && this.props.theme === true) {   // change dark obstacles to white
            return 'white';
        }
        else if(grid[row][col] === '#313335' && this.props.theme === false) {    // change dark spaces back to white
            return 'white';
        }
        else if(grid[row][col] === 'green' || grid[row][col] === 'red') {
            return grid[row][col];
        }
        else {
            return grid[row][col];
        }
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
                // NEED TO FIX
                if(this.props.darkTheme) {  // dark theme colors
                    grid[row][column] = (grid[row][column] === 'gray' ? 'white' : grid[row][column]);
                }
                else {
                    grid[row][column] = (grid[row][column] === 'white' ? 'gray' : grid[row][column]);
                }
                break;

            case 'hammer':
                grid[row][column] = (grid[row][column] === 'gray' ? 'white' : grid[row][column]);
                break;
        }

        this.setState({grid: grid});
    }



    render() {

        var grid = this.state.grid;
        if(this.props.darkTheme) {
            for(var i = 0; i < 44; i++) {
                for(var j = 0; j < 22; j++) {
                    if(grid[i][j] === 'white') {
                        grid[i][j] = '#313335';
                    }
                    else if(grid[i][j] === '#313335') {
                        grid[i][j] = 'white';
                    }
                }
            }
        }


        return (
            <div>
                <div style={{width: '750px', height: '400px', margin: 'auto', fontSize: 0}}>
                    {this.state.grid.map((array, row) => {
                        return (
                            array.map((value, column) => {
                                return (
                                    <div 
                                        style={{width: '15px', height: '15px', borderColor: this.props.colors.mainSecondaryColor, border: 'solid .5px', borderRadius: '3px', display: 'inline-block',
                                                backgroundColor: this.state.grid[row][column]
                                                // backgroundColor: this.decideBackgroundColor(row, column)
                                                }}
                                        onMouseEnter={(e) => {
                                            if(e.buttons === 1) {
                                                this.handleBoxClick(row, column);
                                            }
                                        }}
                                        onClick={() => this.handleBoxClick(row, column)}
                                    >
                                    </div>
                                );
                            })
                        );
                    })}
                </div>
            </div>
        );
    }
}
 
export default GridSystem;