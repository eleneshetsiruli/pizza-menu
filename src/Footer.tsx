import React from "react";

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We're open until {closeHour}:00 o'clock</p>
        ) : (
          <p>We're close now until {openHour}:00 o'clock</p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};
