// first create two action for adding bird and increaseLike
// add bird action
export const addBird = (bird) => {
  return {
    type: "ADD_BIRD",
    payload: {
      name: bird,
      likes: 0
    }
  };
};

// increaseLike action

export const increaseLike = (index) => {
  return {
    type: "INCREASE_LIKE",
    payload: index
  };
};