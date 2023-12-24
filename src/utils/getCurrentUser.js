const getCurrentUser = () => {
  let a = JSON.parse(localStorage.getItem("currentUser"));
  return a;
};

export default getCurrentUser;
