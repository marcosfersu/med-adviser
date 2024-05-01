type head = {
  first: string;
  second: string;
};

export type IAboutData = {
  prehead: string;
  head: string;
  paragraph: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
  };
  btn: string;
  image: Image;
};

export interface IAccordionData {
  id: number;
  title: string;
  preTitle: string;
  content: string[];
}

export type IStudyPlanData = {
  head: string;
  accordion: IAccordionData[];
  btn: string;
};

export type IPerfiltData = {
  head: string;
  text: string;
  list: string[];
};

export type IProgramListData = {
  head: head;
  list: string[];
  btn: string;
};

export type IGoalData = {
  head: string;
  image: Image;
  paragraph: {
    one: string;
    two: string;
    three: string;
  };
};

export type IFundamentalsData = {
  head: string;
  subhead: string;
  paragraph: {
    one: string;
    two: string;
    three: string;
  };
};

export type Image = {
  img: string;
  alt: string;
};

export type IInfoShortData = {
  prehead: string;
  head: string;
  icon: string;
}[];

export type IHeroData = {
  paragraph: {
    head: head;
    subhead: string;
    text: string;
    btn: string;
  };
  image: {
    main: string;
    main2: string;
  };
};
