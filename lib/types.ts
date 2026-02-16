export interface WPImage {
  node: {
    sourceUrl: string;
  };
}

export interface HomePageFields {
  heroHeadline: string;
  heroSubheadline: string;
  heroBody: string;
  heroImage: WPImage;
  heroPrimaryButton: string;
  heroBtnSecondary: string;
  stat1Number: string;
  stat1Label: string;
  stat1Icon: string;
  stat2Number: string;
  stat2Label: string;
  stat2Icon: string;
  stat3Number: string;
  stat3Label: string;
  stat3Icon: string;
  stat4Number: string;
  stat4Label: string;
  stat4Icon: string;
  time1Marker: string;
  time1Title: string;
  time1Desc: string;
  time2Marker: string;
  time2Title: string;
  time2Desc: string;
  time3Marker: string;
  time3Title: string;
  time3Desc: string;
  time4Marker: string;
  time4Title: string;
  time4Desc: string;
  tier1Amount: string;
  tier1Title: string;
  tier1Desc: string;
  tier2Amount: string;
  tier2Title: string;
  tier2Desc: string;
  tier3Amount: string;
  tier3Title: string;
  tier3Desc: string;
  quote: string;
  author: string;
  image: WPImage;
  efficiencyRating: string;
  fund1Percent: string;
  fund1Category: string;
  fund2Percent: string;
  fund2Category: string;
  fund3Percent: string;
  fund3Category: string;
}

export interface GetHomeDataResponse {
  page: {
    homePageFields: HomePageFields;
  };
}
