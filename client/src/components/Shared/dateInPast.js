export const dateInPast = (endDate) => {
    let diff = new Date().getTime() - (new Date(endDate)).getTime();
    if (diff > 0) {
        return true 
  };
  return false;

  }