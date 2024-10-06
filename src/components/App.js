import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import user from '../user.json';
import data from '../data.json'; // Asigură-te că ai acest fișier cu datele statistice

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
  </div>
);

export default App;
