import React from "react";
import SubscribeNewsletterForm from "../forms/newsletter/subscribe-newsletter";

interface Props {
  heading: string;
  body: string;
  darkTextInput?: boolean;
  className?: string;
}
const SubscribeBlock: React.FC<Props> = ({
  heading,
  darkTextInput = false,
  body,
  className,
}) => {
  return (
    <div className={`row ${className ? className : ""}`}>
      <div className="col-md-6">
        <h3>{heading}</h3>
        <p>{body}</p>
      </div>
      <div className="col-md-6">
        <SubscribeNewsletterForm dark={darkTextInput} />
      </div>
    </div>
  );
};

export default SubscribeBlock;
