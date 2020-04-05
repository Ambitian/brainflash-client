import React from 'react';

export const useRatingSummary = (rating: number, ratingCount: number) => {
  const ratingSummary = React.useMemo(
    () => (Boolean(ratingCount) ? rating / ratingCount : 0),
    [rating, ratingCount],
  );

  return ratingSummary;
};
