import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__header">Авторизация</h2>
        <h3 className="login__subheader">
          Доступ к приложению открывается только для авторизованных
          пользователей
        </h3>
        <hr className="ligin__line" />
        <input className="login__input" type="text" placeholder="Email" />
        <input className="login__input" type="password" placeholder="Пароль" />
        <Link className="login__button">Начать</Link>
        <span className="login__message">
          Нет аккаунта?{" "}
          <Link to="/registration" className="login__link">
            Зарегестрируйтесь
          </Link>
        </span>
        <span className="login__message">
          Хотите вренуться{" "}
          <Link to="/" className="login__back">
            назад
          </Link>
          ?
        </span>
      </div>
    </div>
  );
};

export default Login;
