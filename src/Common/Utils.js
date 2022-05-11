export const getUser = () => {
  const usertr = sessionStorage.getItem("user");
  if (usertr) {
    return JSON.parse(usertr);
  }else{
      return null;
  }
};


export const getToken = () => {
    return sessionStorage.getItem("token") ||  null; 

};

export const setUserSession = (token,user) => {
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("user",JSON.user.toString());
};

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
};
