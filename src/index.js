import React from 'react';
import ReactDOM from 'react-dom';
import BlogView from './views/blog/BlogView';
import registerServiceWorker from './registerServiceWorker';
import exampleData from './examples/examplesData';
import { HashRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
  <Route render= {() => (<BlogView blogTitle={'Josh Martin - blog'} post={exampleData} /> )} />
  </Router>,
   document.getElementById('root')
 );
registerServiceWorker();
