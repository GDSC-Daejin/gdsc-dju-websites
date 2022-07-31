import React from 'react';
import { Route } from 'react-router-dom';

export default (
  <Route>
    <Route path="/" />
    <Route path="/introduce" />
    <Route path="/recruit" />
    <Route path="/recruit/detail/:id" />
    <Route path="/recruit/form/:id" />
    <Route path="/faq" />
  </Route>
);
