const peopleNames = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return getFirstName(peopleNames);
};
module.exports = getPeopleInCity;
