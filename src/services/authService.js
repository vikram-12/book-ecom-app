export const login = async (authDetails) => {
  const requestData = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetails),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    requestData
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
};
export const register = async (authDetails) => {
  const requestData = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetails),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/register`,
    requestData
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
};
export const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
};
