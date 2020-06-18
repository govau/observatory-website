import React from "react";

interface Props {
  children: React.ReactElement;
  alt?: boolean;
  className?: string;
}

const Section: React.FC<Props> = ({ children, alt = false, className }) => {
  return (
    <>
      <section className={`au-body ${alt ? "au-body--alt" : ""} ${className}`}>
        <div className="container-fluid">{children}</div>
      </section>
    </>
  );
};

export default Section;
