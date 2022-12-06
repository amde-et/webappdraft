// import { ResultType } from '@remix-run/router/dist/utils';
import React, { useState, useEffect } from 'react';
import '../Show/Show.css';

const Show = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    'APP DESIGNER  ',
    'UX UI DESIGNER',
    'WEB DESIGNER',
    'WEB DEVELOPER ',
    'APP DEVELOPER',
  ]);
  useEffect(() => {
    let time = setTimeout(() => {
      setCount((count) => {
        if (count >= items.length - 1) {
          return (count = 0);
        } else if (count < 0) {
          return (count = items.length - 1);
        } else {
          return count + 1;
        }
      });
    }, 4000);
    // return clearTimeout(time);
  }, [count]);
  return (
    <div className="showcase-containerr">
      <div className="showcase-wrapper">
        <div className="show-content">
          {/* <h1>We Have The Right Technology Solutions</h1>
            <p>Amde Tech Solution  have created website, web system portal, and ERP software products that are known for their security, scalability, robustness, and performance since our founding in Addis Ababa, Ethiopia. We develop industry-specific websites and software, making us Ethiopia’s best outsource website and software company.</p> */}
          <h1>What are  you looking for🔎...?</h1>
          <h2 data-text={`${items[count]}`}>{items[count]}</h2>
        </div>
      </div>
    </div>
  );
};

export default Show;
