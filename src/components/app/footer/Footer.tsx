import styled from "styled-components";
import { Logo } from "@/components/app/common/Logo/Logo.tsx";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { FeedbackWidgets } from "@/components/app/common/feedback-widgets/FeedbackWidgets.tsx";
import {
  colorVariables,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { FooterNavigation } from "@/components/app/footer/footer-navigation/FooterNavigation.tsx";
import { useTranslation } from "react-i18next";
import { FooterData } from "@/assets/constants/app/footer/Footer.ts";
import { getData } from "@/assets/constants/constants.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollTo } from "@/assets/functions/functions.ts";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";

const { whiteColor, deepGrayColor } = colorVariables;

//Styles
const StyledFooterContainer = styled.footer`
  width: 100vw;
  box-sizing: border-box;
  padding: 5.55vw 4.28vw 0.5vw;
  background-color: ${deepGrayColor};

  @media (max-width: ${sizeVariable}) {
    padding: 15.7vw 0 4.17vw 0;
  }
`;

const StyledWrapperTop = styled.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledWrapperBottom = styled.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledWrapperLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
  }
`;

const StyledLogo = styled(Logo)`
  @media (max-width: ${sizeVariable}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`;

const StyledColumn = styled.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: calc(274vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
    width: calc(355vw / 5.08);
  }
`;

const StyledFooterMainText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 2.54vw 0 2.09vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;
  //width: calc(274vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    margin: 5vw 0 5vw;
    text-align: center;
    font-size: calc(16vw / 5.08);
    //width: calc(355vw / 5.08);
  }
`;

const StyledFeedbackWidgets = styled(FeedbackWidgets)`
  @media (max-width: ${sizeVariable}) {
    padding-left: 3vw;
  }
`;

const StyledFooterText = styled.p`
  color: ${whiteColor};
  ${resetMarginsAndPaddings};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(16vw / 5.08);
  }
`;

const StyledLink = styled(Link)`
  margin-left: 4.2vw;

  @media (max-width: ${sizeVariable}) {
    margin: 0;
  }
`;

const StyledLinkItem = styled.li`
  ${resetMarginsAndPaddings};
  margin-bottom: 0.34vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
  }
`;

const StyledButtonContent = styled(CustomButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

//Components
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const footerData = getData("Footer", t) as FooterData;
  const { text, nav, rights, policy, condition } = footerData;
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const onClickHandler = () => {
    setIsDisabled(true);
    navigate("/delete-account");
    scrollTo(0);
    setIsDisabled(false);
  };

  return (
    <StyledFooterContainer>
      <StyledWrapperTop>
        <StyledColumn>
          <StyledLogo />
          <StyledFooterMainText>{text}</StyledFooterMainText>
          <StyledFeedbackWidgets type={"dark"} />
        </StyledColumn>
        {/*<FooterNavigation data={nav.about} />*/}
        {/*<FooterNavigation data={nav.community} />*/}
        <FooterNavigation title={nav.settings.title}>
          {nav.settings.buttons.map((button) => (
            <StyledButtonContent
              key={button.name}
              type="button"
              disabled={isDisabled}
              onClick={onClickHandler}
            >
              <StyledFooterText>{button.name}</StyledFooterText>
            </StyledButtonContent>
          ))}
        </FooterNavigation>
        <FooterNavigation title={nav.socials.title}>
          {nav.socials.links.map((link) => (
            <StyledLinkItem key={link.name}>
              <Link
                color={whiteColor}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </Link>
            </StyledLinkItem>
          ))}
        </FooterNavigation>
      </StyledWrapperTop>
      <StyledWrapperBottom>
        <StyledFooterMainText>
          &copy; {currentYear} {rights}
        </StyledFooterMainText>
        <StyledWrapperLinks>
          <StyledLink
            color={whiteColor}
            href={policy.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledFooterText>{policy.name}</StyledFooterText>
          </StyledLink>
          <StyledLink
            color={whiteColor}
            href={condition.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledFooterText>{condition.name}</StyledFooterText>
          </StyledLink>
        </StyledWrapperLinks>
      </StyledWrapperBottom>
    </StyledFooterContainer>
  );
};
