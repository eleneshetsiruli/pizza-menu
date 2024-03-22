export const UseOpenHour = () => {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return { isOpen, openHour, closeHour };
};
