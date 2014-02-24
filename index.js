var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(createPattern(path.dirname(require.resolve('chai-jquery')) + '/chai-jquery.js'));
  files.unshift(createPattern(path.dirname(require.resolve('chai')) + '/chai.js'));
  files.unshift(createPattern(path.dirname(require.resolve('jquery')) + '/jquery.js'));
};

framework.$inject = ['config.files'];
module.exports = {'framework:jquery-chai': ['factory', framework]};
