// src/App.js
import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'; // Asigură-te că ai acest fișier cu datele prietenilor

export const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
  </div>
);

export default App;
