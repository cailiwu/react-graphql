import React from "react";
import { gql } from "apollo-boost"; // 直接幫我們建立一個 GraphQL query 物件。
import { Query } from "react-apollo"; // Query component 讓我們可以使用內建的 function 連接到外部 GraphQL API 。

const getUsersQuery = gql`
  {
    user(id: 1) {
      id
      name
      email
    }
  }
`;

const User = () => (
  <Query query={getUsersQuery}>
    {({ loading, error, data }) => {
      <h1>使用者資訊</h1>;
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const { id, name, email } = data.user;
      return (
        <div>
          <h1>使用者資訊</h1>
          <ul>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
          </ul>
        </div>
      );
    }}
  </Query>
);

export default User;
