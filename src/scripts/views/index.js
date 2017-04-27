var str = require('../tpls/index.string');
var footer = require('../tpls/footer.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'), str);
common.append($('.container'), footer);
