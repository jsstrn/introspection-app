import axios from "axios";
import api from "./api";
const _ = require("lodash");

export const introspectionData = async params => {
  const response = await axios.get(`${api}/${params}`, {
    withCredentials: true
  });
  return response.data;
};

const getCategoriesByOffice = (data, office) => {
  const tarOfficeEmployees = data.filter(a => a.office === office);
  const categories = tarOfficeEmployees[0].categories.map(cat => cat.category);
  return categories;
};

const getLevelTable = (data, office, categoryName, level) => {
  const tarOffice = data.filter(elem => {
    if (office.toLowerCase() === "all") {
      return true;
    }
    return elem.office === office;
  });
  return tarOffice.filter(person =>
    person.categories.some(category => {
      return (
        category.level.includes(level.trim()) &&
        category.category === categoryName
      );
    })
  );
};

const getBrickElement = (data, office, categoryName, action) => {
  const tarOffice = data.filter(elem => {
    if (office.toLowerCase() === "all") {
      return true;
    }
    return elem.office === office;
  });
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

const getAvailableOffices = data => {
  const availOffices = _.uniq(data.map(a => a.office));
  return availOffices;
};

const getCategories = data => {
  const categories = data[0].categories.map(a => a.category);
  return categories;
};

const oneAngle = data => {
  return 360 / getCategories(data).length;
};

const getNames = data => {
  return data.map(a => a.name);
};

const nameArray = data => {
  const arr = [];
  getNames(data).forEach(function(element) {
    _.times(getCategories(data).length, () => arr.push(element));
  });
  return arr;
};

const categoriesAngleArray = data => {
  const arr = [0];
  for (let i = 1; i < getCategories(data).length; i++) {
    arr.push(oneAngle(data) * i);
  }
  return arr;
};

const levelArray = data => {
  const arr = data.map(a => a.categories.map(a => parseInt(a.level)));
  return _.flatten(arr);
};

const levelArrayRandomized = data => {
  const radius = [];
  levelArray(data).forEach(function(element) {
    switch (element) {
      case 1:
        radius.push(_.random(0.7, 1.8));
        break;
      case 2:
        radius.push(_.random(2.3, 3.2));
        break;
      case 3:
        radius.push(_.random(3.5, 4.5));
        break;
      case 4:
        radius.push(_.random(5, 5.8));
        break;
      default:
        radius.push();
    }
  });
  return radius;
};

const thetaArraySingle = data => {
  return getCategories(data).map((a, index) =>
    _.random(index * oneAngle(data) + 10, (index + 1) * oneAngle(data) - 10)
  );
};

const thetaArray = data => {
  const arr = [];
  data.forEach(function(element) {
    arr.push(thetaArraySingle(data));
  });
  return _.flatten(arr);
};

export {
  getCategoriesByOffice,
  getBrickElement,
  getBrickTable,
  getLevelTable,
  getCategories,
  oneAngle,
  getNames,
  nameArray,
  categoriesAngleArray,
  levelArrayRandomized,
  thetaArraySingle,
  thetaArray,
  getAvailableOffices
};
