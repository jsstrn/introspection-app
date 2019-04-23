import axios from "axios";
import api from './api';

export const introspectionData = async params => {
  const response = await axios.get(`${api}/${params}`);
  return response.data;
};


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
  getLevelTable
};
