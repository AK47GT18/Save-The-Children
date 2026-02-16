import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
  query GetHomeData {
    page(id: "/", idType: URI) {
      homePageFields {
        heroHeadline
        heroSubheadline
        heroBody
        heroImage {
          node {
            sourceUrl
          }
        }
        heroPrimaryButton
        heroBtnSecondary
        stat1Number
        stat1Label
        stat1Icon
        stat2Number
        stat2Label
        stat2Icon
        stat3Number
        stat3Label
        stat3Icon
        stat4Number
        stat4Label
        stat4Icon
        time1Marker
        time1Title
        time1Desc
        time2Marker
        time2Title
        time2Desc
        time3Marker
        time3Title
        time3Desc
        time4Marker
        time4Title
        time4Desc
        tier1Amount
        tier1Title
        tier1Desc
        tier2Amount
        tier2Title
        tier2Desc
        tier3Amount
        tier3Title
        tier3Desc
        quote
        author
        image {
          node {
            sourceUrl
          }
        }
        efficiencyRating
        fund1Percent
        fund1Category
        fund2Percent
        fund2Category
        fund3Percent
        fund3Category
      }
    }
  }
`;
