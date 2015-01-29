process.chdir(__dirname);

require('app.init')(
    './Test'
);

module.exports = function() {
    $.Export.apply(null, arguments);
};