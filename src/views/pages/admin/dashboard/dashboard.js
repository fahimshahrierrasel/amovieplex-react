import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push(i);
  }
  return (
    <div className="dashboard__container">
      Dashboard
      <ul>
        {items.map(item => (
          <li key={item}>
            <p>
              Item No - {item}: Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iusto veniam laborum quam fugit debitis nisi ea
              officiis quae facere eaque porro tenetur a, vel eligendi soluta
              quas atque ut nesciunt?
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
