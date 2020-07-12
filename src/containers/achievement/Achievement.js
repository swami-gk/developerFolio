import React from "react";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import "./Achievement.css";

const Achievement = () => (
  <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h2 className="heading achievement-heading">
            {achievementSection.title}
          </h2>
          <p className="subTitle achievement-subtitle">
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achivementsCards.map(card => {
            return (
              <AchivementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  </Fade>
);

export default Achievement;