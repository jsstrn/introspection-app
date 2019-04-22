import axios from "axios";
import { hosts, isValidHost } from "./hosts";

const host = window.location.host;
const protocol = window.location.protocol;
const url = isValidHost(host)
  ? `${protocol}//${hosts[window.location.host]}`
  : "";

export const introspectionData = async params => {
  const response = await axios.get(`${url}/${params}`);
  return response.data;
};

const category = [
  { name: "Diversity and Inclusion", sector: [0, 45] },
  { name: "Religious Minorities", sector: [45, 90] },
  { name: "Society and Privilege", sector: [90, 135] },
  { name: "Climate Injustice", sector: [135, 180] },
  { name: "Equitable Tech", sector: [180, 225] },
  { name: "Sexual Orientation and Gender Identity", sector: [225, 270] },
  { name: "Racial Minorities", sector: [270, 315] },
  { name: "Economic Justice", sector: [315, 360] }
];

const data = [
  {
    time: Date.now(),
    name: "John Dory",
    email: "jd@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0].name, level: 4, action: ["Would like to share"] },
      {
        category: category[1].name,
        level: 3,
        action: ["Would like to explore", "Would like to share"]
      },
      {
        category: category[2].name,
        level: 2,
        action: ["Would like to deepen"]
      },
      {
        category: category[3].name,
        level: 2,
        action: ["Would like to deepen"]
      },
      {
        category: category[4].name,
        level: 1,
        action: ["Would like to deepen"]
      },
      {
        category: category[5].name,
        level: 2,
        action: ["Would like to deepen"]
      },
      { category: category[6].name, level: 4, action: ["Would like to share"] },
      { category: category[7].name, level: 2, action: ["Would like to deepen"] }
    ]
  },
  {
    time: Date.now(),
    name: "Anna Pavlova",
    email: "ap@thoughtworks.com",
    office: "Singapore",
    categories: [
      {
        category: category[0].name,
        level: 1,
        action: ["Would like to deepen"]
      },
      { category: category[1].name, level: 4, action: ["Would like to share"] },
      { category: category[2].name, level: 4, action: ["Would like to share"] },
      { category: category[3].name, level: 4, action: ["Would like to share"] },
      {
        category: category[4].name,
        level: 1,
        action: ["Would like to deepen"]
      },
      {
        category: category[5].name,
        level: 4,
        action: ["Would like to share", "Would like to deepen"]
      },
      {
        category: category[6].name,
        level: 2,
        action: ["Would like to explore"]
      },
      { category: category[7].name, level: 3, action: ["Would like to deepen"] }
    ]
  },
  {
    time: Date.now(),
    name: "Nellie Melba",
    email: "nb@thoughtworks.com",
    office: "Singapore",
    categories: [
      {
        category: category[0].name,
        level: 1,
        action: ["Would like to explore"]
      },
      {
        category: category[1].name,
        level: 2,
        action: ["Would like to explore"]
      },
      { category: category[2].name, level: 3, action: ["Would like to share"] },
      { category: category[3].name, level: 4, action: ["Would like to share"] },
      {
        category: category[4].name,
        level: 2,
        action: ["Would like to deepen", "Would like to explore"]
      },
      {
        category: category[5].name,
        level: 3,
        action: ["Would like to explore"]
      },
      {
        category: category[6].name,
        level: 3,
        action: ["Would like to explore"]
      },
      { category: category[7].name, level: 4, action: ["Would like to share"] }
    ]
  },
  {
    time: Date.now(),
    name: "James Salisbury",
    email: "js@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0].name, level: 4, action: ["Would like to share"] },
      {
        category: category[1].name,
        level: 1,
        action: ["Would like to explore"]
      },
      {
        category: category[2].name,
        level: 2,
        action: ["Would like to deepen"]
      },
      {
        category: category[3].name,
        level: 3,
        action: ["Would like to explore", "Would like to deepen"]
      },
      { category: category[4].name, level: 4, action: ["Would like to share"] },
      {
        category: category[5].name,
        level: 1,
        action: ["Would like to explore"]
      },
      { category: category[6].name, level: 4, action: ["Would like to share"] },
      {
        category: category[7].name,
        level: 1,
        action: ["Would like to explore"]
      }
    ]
  }
];

const findOne = (data, tarName) => {
  const oneDatum = data.find(a => a.name === tarName);
  return [oneDatum];
};

const findAllExcept = (data, tarName) => {
  const oneDatum = data.find(a => a.name === tarName);
  const index = data.indexOf(oneDatum);
  const copy = data.slice();
  copy.splice(index, 1);
  return copy;
};

const getCategoriesByOffice = (data, office) => {
  const tarOfficeEmployees = data.filter(a => a.office === office);
  const categories = tarOfficeEmployees[0].categories.map(cat => cat.category);
  return categories;
};

const getLevelTable = (data, office, categoryName, level) => {
  const tarOffice = data.filter(person => person.office === office);
  return tarOffice.filter(person =>
    person.categories.some(category => {
      return category.level === level && category.category === categoryName;
    })
  );
};

const getBrickElement = (data, office, categoryName, action) => {
  const tarOffice = data.filter(elem => elem.office === office);
  const persons = [];
  tarOffice.forEach(person => {
    if (
      person.categories.some(category => {
        return (
          category.action.indexOf(action) >= 0 &&
          category.category === categoryName
        );
      })
    ) {
      const { name, email, office } = person;
      const foundPerson = { name, email, office };
      persons.push(foundPerson);
    }
  });
  return persons;
};

const getBrickTable = (data, office, categoryName, actions) => {
  const result = {};
  actions.forEach(action => (result[action] = []));
  actions.forEach(
    action =>
      (result[action] = getBrickElement(data, office, categoryName, action))
  );
  return result;
};

export {
  findOne,
  findAllExcept,
  getCategoriesByOffice,
  getBrickElement,
  getBrickTable,
  getLevelTable,
  data
};
