import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Routers from '@/router';
import { Provider } from 'react-redux';
import store from '@/sotre';
import './index.css';



ReactDOM.render(<Provider store={store}>
  <Suspense fallback={<div>loading!</div>}>
    <Routers />
  </Suspense>
</Provider>, document.getElementById('root'));
