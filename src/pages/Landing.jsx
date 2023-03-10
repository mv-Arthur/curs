import React from "react";
import logo from "../img/Logo.svg";
import promoImg from "../img/promo_img.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__lefthandside">
              <img src={logo} alt="logo" className="header__logo" />
              <span className="header__item">About</span>
              <span className="header__item">Gallery</span>
              <span className="header__item">Pricing</span>
              <span className="header__item">FAQ</span>
              <span className="header__item">Benefits</span>
            </div>
            <div className="header__righthandside">
              <Link to="login" className="header__in-btn">
                Авторизация
              </Link>
              <Link to="registration" className="header__up-btn">
                регестрация
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="promo">
        <div className="container">
          <div className="promo__wrapper">
            <div className="promo__text">
              <h1 className="promo__header">Упростим работу бухгалтеров!</h1>
              <h4 className="promo__subheader">
                Сайт предназначен для учета преподавателей образовательных
                организаций.
              </h4>
            </div>
            <img src={promoImg} alt="teacher" className="promo__img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
