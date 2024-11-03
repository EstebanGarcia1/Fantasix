// src/utils/helpers.js
export const formatPoints = (points) => {
    return points ? points.toFixed(2) : '0.00';
  };
  
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  