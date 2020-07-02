import React from 'react';
import SkeletonPage from './pages/SkeletonPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

import './style.css';

function App() {
  return (
    <div>
      {/*<SkeletonPage>
        <HomePage />
      </SkeletonPage>*/}
      <SkeletonPage>
        <ProductsPage />
      </SkeletonPage>
    </div>
  );
}

export default App;
//medable
//parcer
