import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GridSystem from './components/GridSystem.jsx';
import Selectors from './components/Selectors.jsx';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


class App extends Component {
  constructor(props) {
    super(props);
    this.presetFunction = React.createRef();
  }

  state = { 
    selector: 'start',
    preset: '',
    open: false,
    grid: new Array(21).fill('white').map(() => Array(44).fill('white'))
  }

  changeSelector = (selector) => {
    this.setState({selector: selector});
  } 

  changePreset = (e) => {

    switch (e.target.value) {
      case 'None':
        this.presetFunction.current.loadEmptyTree();
        break;

      case 'Christmas':
        this.presetFunction.current.loadChristmasTree();
        break;

      case 'Batman':
        this.presetFunction.current.loadBatmanTree();
        break;

      case 'Avatar':
        this.presetFunction.current.loadAvatarTree();
        break;

      default:
        this.presetFunction.current.loadEmptyTree();
        break;
    }
  }


  render() { 

    const colors = {
      mainPrimaryColor : 'rgb(255, 255, 255)',
      mainSecondaryColor : '#313335', 
    }

    const presets = [
      'None',
      'Batman',
      'Avatar',
      'Christmas',
    ];

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: colors.mainPrimaryColor
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
                <h5>Don't know what to draw? Select one of the preset drawings!</h5>
                <FormControl style={{width: '8em', textAlign: 'left'}}>
                  <InputLabel>Preset</InputLabel>
                  <Select
                    value={this.state.preset}
                    onChange={(e) => this.changePreset(e)}
                    open={this.state.open}
                    onOpen={() => this.setState({open: true})}
                    onClose={() => this.setState({open: false})}
                  >
                    {presets.map((preset) => (
                      <MenuItem key={preset} value={preset}>
                        {preset}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <Selectors changeSelector={this.changeSelector} colors={colors} theme={theme}></Selectors>
              </Grid>
              <Grid item xs={8}>
                <GridSystem selector={this.state.selector} colors={colors} grid={this.state.grid} ref={this.presetFunction}></GridSystem>
              </Grid>
            </Grid>
          </header>
        </ThemeProvider>
      </div>
    );
  }
}
 
export default App;
