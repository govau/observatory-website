import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { AuFooter, FooterNav, FooterEnd } from "../helpers/auds";
import SubscribeNewsletterForm from "../forms/newsletter/subscribe-newsletter";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

interface FooterLinks {
  map(arg0: (item: any, i: number) => JSX.Element): React.ReactNode;
  items: Array<any>;
}

const Footer: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query footerLinks {
      site {
        siteMetadata {
          title
          footerLinks {
            text
            link
          }
        }
      }
    }
  `);

  const Links: FooterLinks = data.site.siteMetadata.footerLinks;

  return (
    <div className="footer-wrapper">
      <div className="au-body au-body--dark">
        <AuFooter dark>
          <div className="container-fluid">
            <FooterNav>
              <div className="row">
                <div className="col-md-12">
                  <ul className="au-link-list au-link-list--inline">
                    {Links.map((item: any, i: number) => (
                      <li key={i}>
                        <a href={item.link}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FooterNav>
            <div className="row">
              <div className="col-sm-12">
                <FooterEnd>
                  <p>
                    <small>
                      &copy; Commonwealth of Australia,{" "}
                      <a
                        href="https://github.com/govau/ursa-major/blob/master/LICENSE"
                        rel="external license"
                      >
                        MIT licensed
                      </a>
                    </small>
                  </p>
                </FooterEnd>
              </div>
            </div>
          </div>
        </AuFooter>
      </div>
    </div>
  );
};

export default Footer;
