import React, { useEffect } from "react";
import "./Auth.scss";
import axios from "axios";
import { useActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { setToken } = useActions();
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const loginHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // @ts-ignore
    const login = document.getElementById("login").value.trim();
    // @ts-ignore
    const password = document.getElementById("password").value.trim();
    if (login && password) {
      axios({
        url: "http://localhost:8080/auth/login",
        method: "POST",
        data: {
          username: login,
          password: password,
        },
      })
        .then((resp) => {
          setToken(resp.data.token);
          localStorage.setItem("token", resp.data.token);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <main className="auth-layout">
      <form className="auth-layout__form" onSubmit={loginHandler}>
        <h2>авторизация</h2>
        <div className="auth-layout__wrap">
          <label htmlFor="login">логин</label>
          <input id="login" type="text" />
        </div>
        <div className="auth-layout__wrap">
          <label htmlFor="password">пароль</label>
          <input id="password" type="text" />
        </div>
        <button>войти</button>
      </form>
    </main>
  );
};

export default Auth;
