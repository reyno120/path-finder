import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GridSystem from './components/GridSystem.jsx';
import Selectors from './components/Selectors.jsx';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';


class App extends Component {
  state = { 
    selector: 'start',
    darkTheme: false
  }

  changeSelector = (selector) => {
    this.setState({selector: selector});
  } 


  onSwitch = () => {
    this.setState({darkTheme: !this.state.darkTheme});
  }


  render() { 

    const colors = {
      mainPrimaryColor : this.state.darkTheme ? '#313335' : 'rgb(255, 255, 255)', // white -> dark gray
      mainSecondaryColor : this.state.darkTheme ?  'rgb(255, 255, 255)' : '#313335', // black -> white
      // mainThirdColor : this.state.darkTheme ? 'rgb(255, 255, 255)' : '#D3D3D3', // black -> gray
      themeIcons: this.state.darkTheme ?  'rgb(255, 255, 255)' : '#313335'
    }


    const theme = createMuiTheme({
      palette: {
        primary: {
          main: colors.mainPrimaryColor
        },
        third: {
          main: colors.mainThirdColor
        }
      }
    });

    return ( 
      <div className="App" style={{backgroundColor: colors.mainPrimaryColor}}> 
        <ThemeProvider theme={theme}>
          <header className="App-header">

            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <h1 style={{textAlign: 'center', marginBottom: '20%', color: colors.mainSecondaryColor}}>Shortest Path Finder</h1>
              </Grid>
              <Grid item xs={4} align="center" style={{marginTop: '2em'}}>
                <SunIcon style={{width: '5%', display: 'inline', marginRight: '15px', color: colors.themeIcons}} />
                <ArrowIcon style={{width: '3.5%', display: 'inline', marginBottom: '5px', marginRight: '10px', fill: colors.themeIcons}} />
                <MoonIcon style={{width: '5%', display: 'inline', stroke: colors.themeIcons}} />
                <div style={{display: 'block'}}>
                  <Switch onChange={this.onSwitch} color="secondary"/>
                </div>
              </Grid>
              <Grid item xs={2}>
                <Selectors changeSelector={this.changeSelector} colors={colors} theme={theme}></Selectors>
              </Grid>
              <Grid item xs={8}>
                <GridSystem selector={this.state.selector} colors={colors} darkTheme={this.state.darkTheme}></GridSystem>
              </Grid>
              <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" style={{fontSize: '18px', marginLeft: '1em', marginRight: '1em'}}>Run</Button>
                <Button variant="contained" style={{fontSize: '18px'}}>Reset</Button>
              </Grid>
            </Grid>

          </header>
        </ThemeProvider>
      </div>
    );
  }
}
 
export default App;