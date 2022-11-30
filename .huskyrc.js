module.exports = {
  hooks: {
    "pre-commit": "lint-staged && npm run test:unit",
    "lint-staged": {
      "*.js": [ "lint" ],
      "*.vue": [ "lint" ]
   }   
  },
};