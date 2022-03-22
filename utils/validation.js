function isNotEmpty(s) {
  return !!s && true;
}

function getYearDifference(startDate, endDate) {
  if (isNaN(startDate) && isNaN(endDate)) {
    return false;
  }
  return parseInt((endDate - startDate) / 1000 / 60 / 60 / 24 / 365);
}

function isWithinRange(v, min, max) {
  if (isNaN(v) && isNaN(min) && isNaN(max)) {
    return false;
  }
  return min < v && v < max;
}

function isAnEmail(s) {
  if (!s) {
    return false;
  }
  return !!s
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
module.exports = {
  isNotEmpty,
  getYearDifference,
  isWithinRange,
  isAnEmail,
};
