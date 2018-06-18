module.exports.register = function (Handlebars) {
  'use strict';

  Handlebars.registerHelper('atom', includeMatter);
  Handlebars.registerHelper('molecule', includeMatter);
  Handlebars.registerHelper('organism', includeMatter);

  /**
   * Return a compiled partial by passing a Matter path and optional context.
   * @param  {string} matterPath        A forward-slash delimited path.
   * @param  {string} customContextPath A forward-slash delimited path.
   * @param  {object} options           An options object from Handlebars.
   * @return {string}                   An HTML string.
   */
  function includeMatter(matterPath, customContextPath, options) {

    // `customContextPath` is optional.
    if (arguments.length < 3) {
      options = customContextPath;
      customContextPath = null;
    }

    // Store information about the requested Matter.
    var matter = {
      locale: getMatterLocale(matterPath),
      category: options.name + 's',
      name: getMatterName(matterPath),
    };

    var partialPath = `${matter.locale}/matter/${matter.category}/${matter.name}/${matter.name}`;
    var partial = Handlebars.partials[partialPath];

    // Throw an Error if the requested partial cannot be found.
    if (partial === 'undefined') {
      throw new Error(`Partial not found: ${partialPath}`);
    }

    // Compile the partial, if needed.
    if (typeof partial !== 'function') {
      partial = Handlebars.compile(partial);
    }

    // Set the default context.
    var context = this;

    if (customContextPath) {
      context = getCustomContext(this, customContextPath, matter.category);
    }

    // Merge `options.hash` into `context`.
    if (options.hash) {
      context = extend({}, context, options.hash);
    }

    // Return the rendered HTML string of the partial.
    var html = partial(context);
    return new Handlebars.SafeString(html);
  }
};

/**
 * Get the locale segment, if it exists, from a Matter path.
 * @param  {string} matterPath A forward-slash delimited path.
 * @return {string}            The locale of a Matter component.
 */
function getMatterLocale(matterPath) {
  var matterPathSegs = matterPath.split('/', 2);
  var locale = 'project';
  if (matterPathSegs.length > 1) {
    locale = matterPathSegs[0];
  }

  return locale;
}

/**
 * Get the name segment from a Matter path
 * @param  {string} matterPath A forward-slash delimited path.
 * @return {string}            The name of a Matter component.
 */
function getMatterName(matterPath) {
  var matterPathSegs = matterPath.split('/', 2);
  var name = matterPathSegs[0];
  if (matterPathSegs.length > 1) {
    name = matterPathSegs[1];
  }

  return name;
}

/**
 * Parses `customContextPath` and returns a select segment from a larger context.
 * @param  {object} context           The context to search - usually the current Handlebars' context.
 * @param  {string} customContextPath A forward-slash delimited path consisting of a locale (optional) and name.
 * @param  {string} category          The category in which the context resides. Usually atoms, molecules or organisms.
 * @return {object}                   The selected segment from a larger context, if it's found.
 */
function getCustomContext(context, customContextPath, category) {
  var _context = {};

  var customContextPath = customContextPath.split('/', 2);
  var locale   = 'project';
  var category = category;
  var name     = customContextPath[0];

  // If a locale is found in `customContextPath` then correctly assign `name` and `locale`.
  if (customContextPath.length > 1) {
    locale = camelCase(customContextPath[0]);
    name   = customContextPath[1];
  }

  // If the requested context can be found, then assign it to `_context` before returning.
  if (
    context[locale] &&
    context[locale].data &&
    context[locale].data[category] &&
    context[locale].data[category][name]
  ) {
    _context = context[locale].data[category][name];
  }

  return _context;
}

/**
 * Merge a number of objects into the first object passed.
 * @param  {object} obj The object to merge other objects into.
 * @return {object}     The initial object after the merge.
 */
function extend(obj/* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

/**
 * Convert a dash-delimited string to camelCase.
 * @param  {string} input A dash-delimited string.
 * @return {string}       A camelCase'd string.
 */
function camelCase(input) {
  return input
    .toLowerCase()
    .replace(/-(.)/g, function (match, group1) {
      return group1.toUpperCase();
    });
}
