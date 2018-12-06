import { Section } from "./interfaces";

const section1: Section = {
  id: 1,
  title: "Section1.1"
};

const section2: Section = {
  id: 2,
  title: "Section1.2"
};

const section3: Section = {
  id: 3,
  title: "Section1.3"
};

const section4: Section = {
  id: 4,
  title: "Section1.4"
};

const section5: Section = {
  id: 5,
  title: "Section2.1"
};

const section6: Section = {
  id: 6,
  title: "Section2.2"
};

const section7: Section = {
  id: 7,
  title: "Section2.3"
};

const section8: Section = {
  id: 8,
  title: "Section2.4"
};

export const sections: Section[] = [
  {
    ...section1,
    list: [section2]
  },
  {
    ...section2,
    list: [section3, section4]
  },
  section3,
  section4,
  { ...section5, list: [section6, section7, section8] },
  section6,
  section7,
  section8
];

export const getSectionById = (searchId): Section | undefined =>
  sections.find(({ id }) => searchId === id);

export const sectionsForMenuItems = {
  "menu-item-1": getSectionById(1),
  "menu-item-2": getSectionById(2),
  "menu-item-3": getSectionById(5)
};
