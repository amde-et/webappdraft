import React, { useState } from 'react';
import data from './data';
import '../Sector/Sector.css';
const Sector = () => {
  const [sector, setSector] = useState(data);
  const [value, setValue] = useState(0);
  const { title, desc, icon } = sector[value];
  return (
    <div className="sector-wrapper">
      <h1 id="sec-title">
        {' '}
        <span style={{ color: 'rgb(249,157,28)' }}>Sectors</span> we're involved{' '}
      </h1>
      <div className="sec-container">
        <div>
          {data.map((item, index) => {
            return (
              //
              <div
                className={`${
                  item.id === index ? 'btn-container active' : 'btn-container'
                }  `}
                onClick={() => setValue(index)}
                key={index}
              >
                <h2>
                  <span>{item.icon}</span> {item.title}
                </h2>
              </div>

              // </div>
            );
          })}
        </div>

        <div className="content">
          <h2> {title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Sector;
