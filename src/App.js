import React from 'react';
import SkeletonPage from './pages/SkeletonPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <SkeletonPage>
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </SkeletonPage>
    </Router>
  );
}

export default App;
//medable
//parcer
