import React from "react";
import Title from "../../ui/title/title";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import Button from "../../ui/button/button";
import "./style.css";

function Advantages({ advantages, level }) {
  return (
    <section className="advantages">
      <div className="advantages__wrapper">
        {advantages && advantages.length ? (
            <>
              <Title level={level}>Почему фермерские продукты лучше?</Title>
              <ul className="advantages__list">
                {advantages.map((advantage) => (
                  <li className="advantages__item" key={advantage.id}>
                    <AdvantageCard {...advantage} />
                  </li>
                ))}
              </ul>
              <Button minWidth={260} link="/buy">Купить</Button>
            </>
          ) : null}
      </div>
    </section>
  );
}

export default Advantages;
