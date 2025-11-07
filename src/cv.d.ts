export type CV = {
  basics: Basics;
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  awards: Awards[];
  certificates: Certificates[];
  publications: Publications[];
  skills: Skills[];
  languages: Languages[];
  interests: Interests[];
  references: References[];
  projects: Projects[];
};

type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profiles[];
};

type Location = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
};

type Profiles = {
  network: string;
  username: string;
  url: string;
};

type Work = {
  name: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Highlight;
};

type DateStr = `${string}-${string}-${string}`;

type Volunteer = {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
};

type Skills = {
  name: string;
  level: string;
  keywords: string[];
};

type Awards = {
  title: string;
  date: string;
  awarder: string;
  summary: string;
};

type Certificates = {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
};

type Publications = {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
};

type Education = {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score: string;
  courses: string[];
};

type Languages = {
  language: Language;
  fluency: string;
};

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

export type Projects = {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
};

type Interests = {
  name: string;
  keywords: string[];
};

type References = {
  name: string;
  reference: string;
};

type Highlight = string[];
