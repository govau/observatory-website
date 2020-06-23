import React from "react";

interface Props {
  heading: string;
  body: string;
  ctaLink: string;
  ctaText: string;
  className?: string;
}
const WhatWeDoBlock: React.FC<Props> = ({
  heading,
  ctaLink,
  ctaText,
  body,
  className,
}) => {
  return (
    <div className="pt-1 pb-1">
      <h4>{heading}</h4>
      <p>{body}</p>
      <a className="mt-half block" href={ctaLink}>
        {ctaText}
      </a>
    </div>
  );
};

export default WhatWeDoBlock;
