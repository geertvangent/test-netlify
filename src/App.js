import React from 'react';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';
import {Stats} from './components/Stats';
import {Cart} from './components/cart/Cart';
import {MoviesFetcher} from './components/MoviesFetcher';
import {Movie} from './components/Movie';
import {ProtectedRoute} from './components/hoc/ProtectedRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => (
  <Router>  
  <div>
    <Header />
    
    <Switch>
      <Route exact path="/" component={Main}/>
    <Route exact path="//movies/:id" component={MovieDetail}/>
     </Switch>
    <Route exact path="/stats" component={Stats}/>

    <MoviesFetcher />
    <Cart removeFromCart={this.removeFromCart} />
  </div>
  </Router>
);
