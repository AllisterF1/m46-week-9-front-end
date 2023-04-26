export const writeCookie = (key, value, days) => {
  // key = name of cookie, value = jwt token, days = number of days before expiration

  let date = new Date();
  days = days || 365;
  date.setDate(date.getDate() + days);

  let cookie = (document.cookie =
    key + "=" + value + "; expires=" + date.toGMTString() + "; path=/");

  //${key}=${value}; expires=${date.toGMTString()}; path=/   would be a template literal version

  return cookie;
};

export const getCookie = (cookieName) => {
  //find the cookie with name we pass to the function
  const re = new RegExp(`(?<=${cookieName}=)[^;]*`);

  try {
    let cookie = document.cookie.match(re)[0]; //will raise a typeError if the cookie isn't found
    return cookie;
  } catch (error) {
    // console.log("cookie not found");
    // console.log(error);
    return false;
  }
};
