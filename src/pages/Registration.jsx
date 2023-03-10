import React from "react";
import { Link } from "react-router-dom";
import regImg from "../img/registration_image.png";
const Registration = () => {
  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__lefthandside">
          <h2 className="registration__header">Рагистрация</h2>
          <h4 className="registration__subheader">
            Зарегестрируйтесь, и получите полный доступ к приложению!
          </h4>
          <input
            type="text"
            className="registration__input"
            placeholder="Имя"
          />
          <input
            type="text"
            className="registration__input"
            placeholder="Email"
          />
          <input
            type="text"
            className="registration__input"
            placeholder="Пароль"
          />
          <input
            type="text"
            className="registration__input"
            placeholder="Повторите пароль"
          />
          <Link to="/login" className="registration__button">
            Зарегестрироваться
          </Link>
          <span className="registration__message">
            Уже есть аккаунт?{" "}
            <Link to="/login" className="registration__link">
              Авторизуйтесь!
            </Link>
          </span>
          <span className="login__message">
            Хотите вернуться{" "}
            <Link to="/" className="login__back">
              назад
            </Link>
            ?
          </span>
        </div>
        <img src={regImg} alt="teacher" className="registration__img" />
      </div>
    </div>
  );
};

export default Registration;
