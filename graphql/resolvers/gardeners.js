const Gardener = require("../../models/gardener");
const { transformGardener } = require("./merge");

module.exports = {
  gardeners: async () => {
    try {
      const gardeners = await Gardener.find();
      return gardeners.map(gardener => {
        return transformGardener(gardener);
      });
    } catch (err) {
      throw err;
    }
  }
};
