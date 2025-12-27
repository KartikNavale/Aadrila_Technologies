import React, { useState } from "react";

const teamData = [
  {
    name: "John Carter",
    role: "CTO",
    image: "/Member Image (2).png",
    message: "Driving innovation with scalable technology.",
  },
  {
    name: "Mansi Shukla",
    role: "CEO FutureSphere",
    image: "/Member Image.png",
    message:
      "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
  },
  {
    name: "Alex Martin",
    role: "COO",
    image: "/Member Image (1).png",
    message: "Operational excellence for sustainable growth.",
  },
];

const OurTeam = () => {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState("right");

  const prevIndex = active === 0 ? teamData.length - 1 : active - 1;
  const nextIndex = active === teamData.length - 1 ? 0 : active + 1;

  const goPrev = () => {
    setDirection("left");
    setActive(prevIndex);
  };

  const goNext = () => {
    setDirection("right");
    setActive(nextIndex);
  };

  return (
    <section className="team-section text-center position-relative">
      <img
        alt="circle-bg"
        className="circle-bg-left-team"
        src="/Combined-Shape-left.png"
      />
      <img alt="" className="dots-bottom6" src="/vertical-dots.png" />
      <div className="team-arrows">
        <button onClick={goPrev}>
          <img src="/Left arrow.png" alt="" />
        </button>
        <button onClick={goNext}>
          <img src="/Right Arrow.png" alt="" />
        </button>
      </div>

      <div className="team-images">
        <img
          src={teamData[prevIndex].image}
          alt="prev"
          className="team-img side"
        />

        <img
          key={active}
          src={teamData[active].image}
          alt="active"
          className={`team-img active ${direction}`}
        />

        <img
          src={teamData[nextIndex].image}
          alt="next"
          className="team-img side"
        />
      </div>

      <div className="team-card">
        <h4 className="team-name">{teamData[active].name}</h4>
        <p className="role">{teamData[active].role}</p>
        <p className="message">{teamData[active].message}</p>
      </div>
    </section>
  );
};

export default OurTeam;
