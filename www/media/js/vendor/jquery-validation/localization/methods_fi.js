!function(e){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){return e.extend(e.validator.methods,{date:function(e,t){return this.optional(t)||/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(e)},number:function(e,t){return this.optional(t)||/^-?(?:\d+)(?:,\d+)?$/.test(e)}}),e});