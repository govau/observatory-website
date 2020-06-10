import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { AUHeader, Brand } from "../helpers/auds";

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <>
      <AUHeader dark>
        <div className="container-fluid">
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
                brandImage={"../../coat-of-armss.svg"}
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
