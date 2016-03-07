export const SET_POSITION = 'SET_POSITION';

export const getPosition = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords,
            lat    = coords.latitude,
            long   = coords.longitude;

      dispatch(setPosition({ lat, long }));
    });
  };
};

export const setPosition = ({ lat, long }) => {
  return {
    type: SET_POSITION,
    data: {
      lat,
      long,
    },
  };
};
