const fn = {
  fetchData: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      }, 3000);
    });
  },
};

module.exports = fn;
