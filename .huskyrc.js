module.exports = {
  hooks: {
    "commit-msg": "npm run commitlint",
    "pre-commit": "npm run lint:staged",
    "pre-push": "npm run test:all",
  },
};
