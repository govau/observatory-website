import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { AUHeader, Brand } from "../helpers/auds";

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-logo-agov.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);

  return (
    <>
      <AUHeader dark>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <Brand
                title={
                  <>
                    {siteTitle} <span className="header__badge"> alpha</span>
                  </>
                }
                subline="Quantifying interactions with government services to support delivery teams to improve their own products and services"
                link="/"
                brandImage={data.placeholderImage.childImageSharp.fluid.src}
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
