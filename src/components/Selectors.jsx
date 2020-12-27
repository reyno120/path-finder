import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ReactComponent as StartFlag } from '../icons/start.svg';
import { ReactComponent as FinishFlag } from '../icons/finish.svg';
import { ReactComponent as Wall } from '../icons/wall.svg';
import { ReactComponent as Hammer } from '../icons/hammer.svg';
import { ThemeProvider } from '@material-ui/core';

class Selectors extends Component {
    state = { 
        startButtonColor: 'white',
        finishButtonColor: 'white',
        wallButtonColor: 'white',
        hammerButtonColor: 'white'
    }


    render() { 
        return (  
            <div>
                <ThemeProvider theme={this.props.theme}>
                    <Button style={{width: '50px', backgroundColor: this.state.startButtonColor}} variant="outlined" onClick={() => {
                        this.props.changeSelector('start');
                        this.setState({startButtonColor: 'lightgray'});
                        this.setState({finishButtonColor: 'white'});
                        this.setState({wallButtonColor: 'white'});
                        this.setState({hammerButtonColor: 'white'});
                    }}>
                        <StartFlag style={{width: '35px'}}/>
                    </Button>
                    <Button variant="outlined" style={{display: 'block', backgroundColor: this.state.finishButtonColor}} onClick={() => {
                        this.props.changeSelector('finish');
                        this.setState({startButtonColor: 'white'});
                        this.setState({finishButtonColor: 'lightgray'});
                        this.setState({wallButtonColor: 'white'});
                        this.setState({hammerButtonColor: 'white'});
                    }}>
                        <FinishFlag style={{width: '30px', height: '25px'}} />
                    </Button>
                    <Button variant="outlined" style={{display: 'block', backgroundColor: this.state.wallButtonColor}} onClick={() => {
                        this.props.changeSelector('obstacle');
                        this.setState({startButtonColor: 'white'});
                        this.setState({finishButtonColor: 'white'});
                        this.setState({wallButtonColor: 'lightgray'});
                        this.setState({hammerButtonColor: 'white'});

                    }}>
                        <Wall style={{width: '30px'}} />
                    </Button>
                    <Button variant="outlined" style={{display: 'block', backgroundColor: this.state.hammerButtonColor}} onClick={() => {
                        this.props.changeSelector('hammer');
                        this.setState({startButtonColor: 'white'});
                        this.setState({finishButtonColor: 'white'});
                        this.setState({wallButtonColor: 'white'});
                        this.setState({hammerButtonColor: 'lightgray'});
                    }}>
                        <Hammer style={{width: '30px'}} />
                    </Button>
                </ThemeProvider>
            </div>
        );
    }
}
 
export default Selectors;