import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { device } from "../../styles/breakpoints";

const FooterSection = styled.footer`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 2em;
  padding: 0 1em;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(4, minmax(auto, 200px));
    gap: 1em;
  }
`;

const FooterGridItem = styled.ul`
  line-height: 2em;
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    border-bottom: 1px solid gray;
    padding-bottom: 1em;
  }

  @media ${device.tablet} {
    border-bottom: none;
  }

  .logo {
    font-family: ${(props) => props.theme.fonts.rubik};
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.orange400};
    margin-bottom: 0.5em;
  }

  .text {
    display: inline-block;
    font-family: ${(props) => props.theme.fonts.ibmSans};

    @media ${device.mobileS} {
      max-width: 300px;
    }

    @media ${device.tablet} {
      max-width: inherit;
      margin-top: 1em;
    }
  }

  .sns {
    display: flex;
    font-size: 2rem;
    margin-top: 0.5em;
    gap: 0.5em;

    .sns-icon {
      font-size: inherit;
    }
  }
`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <FooterGridItem>
        <span className="logo">Let'sh</span>
        <p className="text">{t("ui:footer_text")}</p>
      </FooterGridItem>
      <FooterGridItem>
        <li className="text">
          <Link to="/">{t("ui:about_us")}</Link>
        </li>
        <li className="text">
          <Link to="/">{t("ui:reviews")}</Link>
        </li>
        <li className="text">
          <Link to="/">{t("ui:become_a_host")}</Link>
        </li>
        <li className="text">
          <Link to="/">{t("ui:find_roommate")}</Link>
        </li>
      </FooterGridItem>
      <FooterGridItem>
        <li className="text">
          <Link to="/">{t("ui:room")}</Link>
        </li>
        <li className="text">
          <Link to="/">{t("ui:house")}</Link>
        </li>
        <li className="text">
          <Link to="/">{t("ui:hotel")}</Link>
        </li>
        <li className="text">
          <Link to="/">{t("ui:parking")}</Link>
        </li>
        <li className="text">
          <Link to="/">{t("ui:transportation")}</Link>
        </li>
      </FooterGridItem>
      <FooterGridItem>
        <li className="text">info@letsh.com</li>
        <li className="text">{t("ui:privacy_policy")}</li>
        <li className="text">{t("ui:terms_and_conditions")}</li>
        <div className="sns">
          <span className="sns-icon">
            <Link to="/">
              <FaFacebookSquare />
            </Link>
          </span>
          <span className="sns-icon">
            <Link to="/">
              <FaInstagramSquare />
            </Link>
          </span>
        </div>
      </FooterGridItem>
    </FooterSection>
  );
}
