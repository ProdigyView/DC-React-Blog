import React from 'react';

import Header from '../components/header'
import Content from '../components/content';


class Users extends React.Component {
  render() {
    return (
    <div>
        <Header />

        <h1>Users Page</h1>

        <Content text="Her Name is Sasha"/>

    </div>
    )
  }
}
export default Users