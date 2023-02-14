import {Article} from "./models/article.model";
import {Education} from "./models/education.model";
import {Project} from "./models/project.model";
import {Skill} from "./models/skill.model";
import {Profile} from "./models/profile.model";

export const testArticles: Article[] = [
  {
    title: 'Article 1',
    content: 'Content 1',
    category: 'Stuff',
    isPublished: true,
  },
  {
    title: 'Article 2',
    content: 'Content 2',
    category: 'Things',
    isPublished: true,
  },
  {
    title: 'Article 3',
    content: 'Content 3',
    category: 'Stuff',
    isPublished: false,
  }
]

export const testEducation: Education[] = [
  {
    name: 'School 1',
    gpa: 4,
    gpaMax: 4,
    startYear: 2020,
    startMonth: 2024,
    endMonth: 1,
    endYear: 12,
    degree: 'PhD',
    major: 'Magitek',
    minor: 'Feline History',
    honors: 'All of Them',
    details: 'Did cool stuff',
    isCurrent: true
  }
]

export const testProfile: Profile = {
  name: 'Emrys Corbin',
  pronouns: 'He/Him/They/Them',
  shortDescription: 'string',
  longDescription: 'string',
  phone: 'string',
  email: 'string',
  linkedin: 'string',
  twitter: 'string',
  github: 'string',
  mastodon: 'string',
  twitch: 'string',
  instagram: 'string',
  youtube: 'string',
  location: 'string'
}

export const testProjects: Project[] = [
  {
    _id: '001',
    name: 'Project 1',
    shortDescription: 'string',
    longDescription: 'string',
    company: 'string',
    title: 'string',
    type: 'string',
    startDate: 1990,
    endDate: 2000,
    skills: [{
      display: 'string',
      value: 'string'
    }],
    features: 'string',
    stack: 'string',
    url: 'string',
    photo: 'string',
    category: 'string',
    hasLink: true,
    hasDetails: true,
    isCurrent: true,
  },
  {
    _id: '002',
    name: 'Project 2',
    shortDescription: 'string',
    longDescription: 'string',
    company: 'string',
    title: 'string',
    type: 'string',
    startDate: 1990,
    endDate: 2000,
    skills: [{
      display: 'string',
      value: 'string'
    }],
    features: 'string',
    stack: 'string',
    url: 'string',
    photo: 'string',
    category: 'string',
    hasLink: true,
    hasDetails: true,
    isCurrent: true,
  },
  {
    _id: '003',
    name: 'Project 3',
    shortDescription: 'string',
    longDescription: 'string',
    company: 'string',
    title: 'string',
    type: 'string',
    startDate: 1990,
    endDate: 2000,
    skills: [{
      display: 'string',
      value: 'string'
    }],
    features: 'string',
    stack: 'string',
    url: 'string',
    photo: 'string',
    category: 'string',
    hasLink: true,
    hasDetails: true,
    isCurrent: true,
  }
]

export const testSkills: Skill[] = [
  {
    name: 'Skill 1',
    level: 22,
    highlight: false
  },
  {
    name: 'Skill 2',
    level: 47,
    highlight: true
  },
  {
    name: 'Skill 3',
    level: 80,
    highlight: true
  },
  {
    name: 'Skill 4',
    level: 40,
    highlight: true
  }
]
