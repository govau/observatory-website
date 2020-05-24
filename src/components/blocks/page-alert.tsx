import React from "react";
import AUpageAlert from "../../auds/react/page-alerts";

const AuPageAlert: any = AUpageAlert;

interface Props {
  type: string;
  children: React.ReactElement;
}
const PageAlert: React.FC<Props> = ({ type, children }) => {
  return <AuPageAlert as={type}>{children}</AuPageAlert>;
};

export default PageAlert;
