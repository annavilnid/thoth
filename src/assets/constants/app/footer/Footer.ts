import {
  // blogHref,
  // businessRelationHref,
  // eventsHref,
  facebookHref,
  // featuredHref,
  // howItWorksHref,
  // inviteFriendHref,
  // partnershipHref,
  // podcastHref,
  privacyPolicyHref,
  telegramHref,
  termsConditionHref,
  twitterHref,
} from "@/assets/links-href/LinksHref.ts";
import { TFunction } from "i18next";

export type FooterLinkData = {
  name: string;
  href: string;
};

export type FooterLinksData = {
  title: string;
  links: FooterLinkData[];
};

export type FooterData = {
  text: string;
  nav: {
    // about: FooterLinksData;
    // community: FooterLinksData;
    socials: FooterLinksData;
  };
  rights: string;
  policy: FooterLinkData;
  condition: FooterLinkData;
};

export const getFooterData = (t: TFunction) => {
  return {
    text: t("footer.text"),
    nav: {
      // about: {
      //   title: "About",
      //   links: [
      //     { name: "How it works", href: howItWorksHref },
      //     { name: "Featured", href: featuredHref },
      //     { name: "Partnership", href: partnershipHref },
      //     {
      //       name: "Business Relation",
      //       href: businessRelationHref,
      //     },
      //   ],
      // },
      // community: {
      //   title: "Community",
      //   links: [
      //     { name: "Events", href: eventsHref },
      //     { name: "Blog", href: blogHref },
      //     { name: "Podcast", href: podcastHref },
      //     { name: "Invite a friend", href: inviteFriendHref },
      //   ],
      // },
      socials: {
        title: t("footer.navTitleOne"),
        links: [
          { name: "Telegram", href: telegramHref },
          { name: "Twitter", href: twitterHref },
          { name: "Facebook", href: facebookHref },
        ],
      },
    },
    rights: t("footer.rights"),
    policy: {
      name: t("footer.policy"),
      href: privacyPolicyHref,
    },
    condition: {
      name: t("footer.condition"),
      href: termsConditionHref,
    },
  };
};
