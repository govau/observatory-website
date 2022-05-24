import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { AUHeader, AuPageAlert, Brand } from "../helpers/auds";

interface Props {
  siteTitle: string;
}

const PageAlert: any = AuPageAlert;
const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <>
      <AUHeader dark>
        <div className="container-fluid">
          <div className="row">
            <PageAlert as="warning" className={`decommission-banner`}>
              <p>Observatory has been decommissioned and will be taken down from 19 June 2022. For further information please contact <a href="mailto:info@dta.gov.au">info@dta.gov.au</a>.</p>
            </PageAlert>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Brand
                title={
                  <>
                    {siteTitle} <span className="header__badge"> alpha</span>
                  </>
                }
                subline="Empowering data practitioners to improve government services"
                link="/"
                brandImage={"../../coat-of-arms.svg"}
                brandImageAlt="The Australian Government Coat of Arms"
              />
            </div>
          </div>
        </div>
      </AUHeader>
    </>
  );
};

export default Header;
