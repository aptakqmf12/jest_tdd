const fn = {
  sum: (a, b) => {
    return a + b;
  },
  makeObj: (name, skill) => {
    return {
      name,
      skill,
    };
  },
  getIdLength: (id) => {
    return id.length;
  },
};

module.exports = fn;
