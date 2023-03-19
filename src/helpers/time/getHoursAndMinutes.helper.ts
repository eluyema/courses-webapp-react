const getHoursAndMinutes = (secs: number) => {
  const hours = Math.floor(secs / (60 * 60));

  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  return {
    hours,
    minutes,
  };
};

export { getHoursAndMinutes };
