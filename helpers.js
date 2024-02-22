module.exports = {

  formatFormErrors: function(errors) {

    const formatted = {};

    if (Array.isArray(errors)) {

      errors.forEach(function(e) {

        formatted[e.param] = e.msg;

      });

    } else {

      console.error("Errors is not an array:", errors);

    }

    return formatted;

  },
 
  formatModelErrors: function(errors) {

    const formatted = {};

    if (Array.isArray(errors)) {

      errors.forEach(function(e) {

        formatted[e.property] = e.msg;

      });

    } else {

      console.error("Errors is not an array:", errors);

    }

    return formatted;

  },
 
  loginRequired: function (req, res, next) {

    if (req.isAuthenticated()) { return next(); }

    res.redirect('/signin');

  }

};
