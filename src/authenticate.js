import jwt from "jsonwebtoken";
import { toggleView } from "./helper";

const USERS_DB = [
  {
    email: "prajwaldharme@gmail.com",
    password: "prajwal", // Replace with hashed password in a real-world scenario
    location: "",
  },
  {
    email: "shrutikayarkar071002@gmail.com",
    password: "shruti", // Replace with hashed password in a real-world scenario
    location: "",
  },
  {
    email: "emily@chartyco.com",
    password: "password3", // Replace with hashed password in a real-world scenario
    location: "Seattle",
  },
];

export const login = function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = USERS_DB.find((u) => u.email === username);
  const pass = USERS_DB.find((u) => u.password === password);

  if (!user) {
    window.alert("Invalid Email Please Try Again");
    return;
  }
  if (!pass) {
    window.alert("Invalid Password Please Try Again");
    return;
  }

  const token = jwt.sign(
    { username, location: user.location },
    "secret",
    {
      expiresIn: "4h", // expires in 4 hours
      algorithm: "HS256",
    }
  );
  window.sessionStorage.setItem("jwtToken", token);
  window.location.reload();
};

export const logout = function () {
  window.sessionStorage.removeItem("jwtToken");
  toggleView(false);
};
