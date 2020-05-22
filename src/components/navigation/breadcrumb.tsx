import React from "react";
import AUbreadcrumbs from "../../auds/react/breadcrumbs";

interface Crumb {
  length: number;
  forEach: any;
  crumbLabel: string;
  pathname: string;
}

interface Props {
  crumbs: Crumb;
}

interface CrumbItems {
  text: string;
  link?: string;
}

const AuBreadcrumbs: any = AUbreadcrumbs;

const Breadcrumbs: React.FC<Props> = ({ crumbs }) => {
  const breadcrumbItems: Array<CrumbItems> = [];

  crumbs.forEach((crumb: Crumb, i: number) => {
    if (i < crumbs.length - 1) {
      breadcrumbItems.push({
        link: crumb.pathname,
        text: crumb.crumbLabel.replace("-", " "),
      });
    } else {
      breadcrumbItems.push({
        text: crumb.crumbLabel.replace("-", " "),
      });
    }
  });

  return (
    <>
      <AuBreadcrumbs
        items={breadcrumbItems}
        label="Breadcrumbs"
        className="au-body"
      />
    </>
  );
};

export default Breadcrumbs;
