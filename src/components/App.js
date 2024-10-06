// src/components/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import Navigation from './Navigation';

// Importă fișierele JSON cu datele tale
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

// Setarea basename în funcție de mediul de lucru (development sau production)
const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? '/goit-react-hw-01-components' : '';

export const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          }
        />
        <Route
          path="/statistics"
          element={<Statistics title="Upload stats" stats={data} />}
        />
        <Route path="/friends" element={<FriendList friends={friends} />} />
        <Route
          path="/transactions"
          element={<TransactionHistory items={transactions} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
