import { UseOpenHour } from "./UseOpenHour";

export const Footer = () => {
  const { openHour, isOpen, closeHour } = UseOpenHour();

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
