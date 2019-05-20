// import React from 'react';
// import { graphql, Query } from 'react-apollo';
// import { gql } from 'graphql-tag';

// const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

// const allUsersQuery = gql`
//   {
//     allUsers {
//       id
//       email
//     }
//   }
// `;

// export default graphql(allUsersQuery)(Home);
import React from 'react';
import { gql, graphql } from 'react-apollo';

const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(Home);
