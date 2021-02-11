import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import User from "./User";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
});

console.log(client, "-------");

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <User />
      </div>
    </ApolloProvider>
  );
};

export default App;
