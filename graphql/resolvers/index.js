const authResolver = require("./auth");
const eventsResolver = require("./events");
const gardenersResolver = require("./gardeners");
const bookingResolver = require("./booking");

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...gardenersResolver,
  ...bookingResolver
};

module.exports = rootResolver;
