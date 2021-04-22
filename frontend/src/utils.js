export function isAuth() {
  return !!localStorage.getItem("user");
}

export function getUser() {
  if (isAuth()) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return null;
}