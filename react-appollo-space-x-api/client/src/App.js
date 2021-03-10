import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/launches';
import Launch from './components/launch';
import { Route, BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route exact path="/launch/:flight_number">
          <Launch />
        </Route>
        <Route exact path="/">
          <Launches />
        </Route>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
