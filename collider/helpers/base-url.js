var path = require('path');

module.exports.register = function (Handlebars) {
  'use strict';

  Handlebars.registerHelper('base-url', function (options) {
    var fileBase = options.data.file.base;
    var filePath = path.parse(options.data.file.path).dir;
    var relative = path.relative(filePath, fileBase);

    return relative.length > 0 ? relative : '.';
  });
};
