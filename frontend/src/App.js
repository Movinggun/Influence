import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Influencers from './components/influencers/Influencers'
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import PrivateRoute from './components/routing/PrivateRoute';

import { Provider } from 'react-redux';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import store from './store';
function App() {

  const theme = createMuiTheme({
    palette: {
      type: "dark"
    },
    typography: {
      button: {
        textTransform: 'none'
      },
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
     },
    overrides: {
      MuiInput: {
        underline: {
          '&:before': { //undedrline color when textfield is inactive
            borderBottom: `0px`
          },
          '&:after': { //underline color when textfield is inactive
            borderBottom: '1px solid #666E80'
          },
          '&:hover:not($disabled):before': { //underline color when hovered 
            borderBottom: `0px`,
          }
        }
    }
  }
})

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
          <div className="container">
              <Route path='/' exact component={Landing}/>
              <PrivateRoute path='/dashboard'  component={Dashboard}/>
              <PrivateRoute path='/influencers'  component={Influencers}/>
              <Route path='/login' component={Login} />
          </div>
      </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
