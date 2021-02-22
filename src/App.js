import React from "react";

import Navbar from './components/navbar';
import Filter from "./components/Filter";
import Cards from "./components/Cards";

import {
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import {default as AppolloClient} from "apollo-client";

import {onError} from "@apollo/client/link/error";

const errorLink = onError(({graphqlErrors, networkError})=>{
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path})=>{
      alert(`Graphql error ${message}`);
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri :"https://api-staging.aiesec.org/graphql?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"}),
  fetch,
  console.log("HIT")
])

const client = new AppolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
    
      <div className="App">
        <ApolloProvider client={client}>
          <Navbar/>  
          <Filter/> 
          <Cards/> 
        </ApolloProvider>         
      </div>
   
    
  );
}

export default App;
