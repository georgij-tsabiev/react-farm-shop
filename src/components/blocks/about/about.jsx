import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import "./style.css";

function About({ level }) {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__descr-wrapper">
          <Title size={TitleSize.BIG} title={level}>Магазин фермерских продуктов с доставкой</Title>
          <p className="about__text">Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
