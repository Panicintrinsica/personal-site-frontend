export interface Project {
  _id: string;
  name: string,
  shortDescription: string,
  longDescription: string,
  company: string,
  title: string,
  type: string,
  startDate: number,
  endDate: number,
  skills: [{
    display: string,
    value: string
  }],
  features: string,
  stack: string,
  url: string,
  photo: string,
  category: string
  hasLink: boolean,
  hasDetails: boolean,
  isCurrent: boolean,
}
