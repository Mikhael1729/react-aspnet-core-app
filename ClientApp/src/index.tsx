import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './screens/app/App';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { lightBlue } from "@material-ui/core/colors"
import 'fontsource-roboto';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#000000"
    },
    primary: {
      main: lightBlue[300]
    }
  }
})

ReactDOM.render(
  <BrowserRouter basename={baseUrl!}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

