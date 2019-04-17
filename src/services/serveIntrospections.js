import axios from "axios";

const introURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:7890"
    : `https://${process.env.BACKEND_URL}.herokuapp.com`;

export const introspectionData = async params => {
  try {
    const response = await axios.get(`${introURL}/${params}`);
    return response.data;
  } catch (err) {
    return { error: err };
  }
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
      { category: category[0].name, level: 4, action: ["would like to share"] },
      {
        category: category[1].name,
        level: 3,
        action: ["would like to explore", "would like to share"]
      },
      {
        category: category[2].name,
        level: 2,
        action: ["would like to deepen"]
      },
      {
        category: category[3].name,
        level: 2,
        action: ["would like to deepen"]
      },
      {
        category: category[4].name,
        level: 1,
        action: ["would like to deepen"]
      },
      {
        category: category[5].name,
        level: 2,
        action: ["would like to deepen"]
      },
      { category: category[6].name, level: 4, action: ["would like to share"] },
      { category: category[7].name, level: 2, action: ["would like to deepen"] }
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
        action: ["would like to deepen"]
      },
      { category: category[1].name, level: 4, action: ["would like to share"] },
      { category: category[2].name, level: 4, action: ["would like to share"] },
      { category: category[3].name, level: 4, action: ["would like to share"] },
      {
        category: category[4].name,
        level: 1,
        action: ["would like to deepen"]
      },
      {
        category: category[5].name,
        level: 4,
        action: ["would like to share", "would like to deepen"]
      },
      {
        category: category[6].name,
        level: 2,
        action: ["would like to explore"]
      },
      { category: category[7].name, level: 3, action: ["would like to deepen"] }
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
        action: ["would like to explore"]
      },
      {
        category: category[1].name,
        level: 2,
        action: ["would like to explore"]
      },
      { category: category[2].name, level: 3, action: ["would like to share"] },
      { category: category[3].name, level: 4, action: ["would like to share"] },
      {
        category: category[4].name,
        level: 2,
        action: ["would like to deepen", "would like to explore"]
      },
      {
        category: category[5].name,
        level: 3,
        action: ["would like to explore"]
      },
      {
        category: category[6].name,
        level: 3,
        action: ["would like to explore"]
      },
      { category: category[7].name, level: 4, action: ["would like to share"] }
    ]
  },
  {
    time: Date.now(),
    name: "James Salisbury",
    email: "js@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0].name, level: 4, action: ["would like to share"] },
      {
        category: category[1].name,
        level: 1,
        action: ["would like to explore"]
      },
      {
        category: category[2].name,
        level: 2,
        action: ["would like to deepen"]
      },
      {
        category: category[3].name,
        level: 3,
        action: ["would like to explore", "would like to deepen"]
      },
      { category: category[4].name, level: 4, action: ["would like to share"] },
      {
        category: category[5].name,
        level: 1,
        action: ["would like to explore"]
      },
      { category: category[6].name, level: 4, action: ["would like to share"] },
      {
        category: category[7].name,
        level: 1,
        action: ["would like to explore"]
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
      persons.push(person.name);
    }
  });
  return persons;
};

const getBrickTable = (office, categoryName, actionList) => {
  const result = {};
  actionList.forEach(elem => (result[elem] = []));
  actionList.forEach(
    elem => (result[elem] = getBrickElement(office, categoryName, elem))
  );
  return result;
};

export {
  findOne,
  findAllExcept,
  getCategoriesByOffice,
  getBrickElement,
  getBrickTable
};
