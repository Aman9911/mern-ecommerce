const passport = require("passport");
exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};
exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //token ==
  //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2JlMmZlMTYyNjg0OTQzNWMyYjY4YyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MTMyMzk4NX0.eWemNQ3_w2LNLABLygYc7SJf-QfEpeVNJVPdkv7xvgM";
  return token;
};
