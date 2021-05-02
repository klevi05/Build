import React, { Component } from 'react';
import Home from './components/home/home';
import Showing from './components/detail/detaildProduct';
import Information from './components/informaton/Information';
import Contact from './components/footer/Footer';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';


class App extends Component {
  render(){
  return (
    //here we are rendering a list of routes 
   <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact strict>
            <Home />
          </Route>
          <Route path='/buy/:id' exact strict component={Showing} />
          <Route path='/about' exact strict component={Information} />
          <Route path='/contact' exact strict component={Contact} />
        </Switch>
      </Router>
   </React.Fragment>
  )};
}

export default App;
