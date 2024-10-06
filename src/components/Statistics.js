// src/components/Statistics.js
import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css'; // Asigură-te că ai un fișier CSS pentru stilizare

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <li
            key={item.id}
            className="item"
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
