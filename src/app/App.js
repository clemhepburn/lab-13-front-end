import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import Auth from '../Auth/Auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import TodosPage from '../todos/TodosPage';

import './App.css';

class App extends Component {
  state = {
    token: window.localStorage.getItem('TOKEN')
  }

  handleUser = user => {
    window.localStorage.setItem('TOKEN', user.token);
    this.setState({ token: user.token });
  }

  render() {
    const { token } = this.state;
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <Auth {...routerProps}
                    onUser={this.handleUser}/>
                )}
              />


              <Route path="/todos" exact={true}
                render={routerProps => (
                  token 
                    ? <TodosPage {...routerProps} />
                    : <Redirect to="/auth" />
                )}
              />

              {/* <Redirect to="/" /> */}

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
