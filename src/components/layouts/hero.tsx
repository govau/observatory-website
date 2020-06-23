import React from "react";

interface Props {
  children: React.ReactElement;
  alt?: boolean;
  imgUrl: string;
  imgAlt: string;
  swapOrder?: boolean;
}

const Hero: React.FC<Props> = ({
  children,
  imgUrl,
  imgAlt,
  swapOrder,
  alt = false,
}) => {
  return (
    <div className={`au-body hero`}>
      <section className="container-fluid">
        <div className="row">
          <div
            className={`col-md-6 col-xs-12 ${swapOrder ? "col-md-push-6" : ""}`}
          >
            <div className="content">{children}</div>
          </div>

          <div
            className={`col-md-5 col-md-offset-1 col-xs-12 ${
              swapOrder ? "col-md-pull-6" : ""
            }`}
          >
            <figure className="hero-image">
              <img
                className="au-responsive-media-img"
                src={imgUrl}
                alt={imgAlt}
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
