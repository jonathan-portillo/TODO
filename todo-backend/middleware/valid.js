module.exports = {
  isValid,
};
function isValid(user) {
  return Boolean(user.username && user.passwrod === "string");
}
