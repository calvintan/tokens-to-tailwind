const tokens = require("./build/js/tokens");
const colors = Object.fromEntries(
  Object.values(tokens.color).map(({ attributes, value }) => [
    convertToDash(attributes.type),
    value,
  ])
);

console.log(colors);

function convertToDash(str) {
  return str.replace(/_/g, "-");
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
