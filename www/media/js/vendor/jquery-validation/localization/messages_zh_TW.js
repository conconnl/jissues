!function(e){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){return e.extend(e.validator.messages,{required:"必須填寫",remote:"請修正此欄位",email:"請輸入有效的電子郵件",url:"請輸入有效的網址",date:"請輸入有效的日期",dateISO:"請輸入有效的日期 (YYYY-MM-DD)",number:"請輸入正確的數值",digits:"只可輸入數字",creditcard:"請輸入有效的信用卡號碼",equalTo:"請重複輸入一次",extension:"請輸入有效的後綴",maxlength:e.validator.format("最多 {0} 個字"),minlength:e.validator.format("最少 {0} 個字"),rangelength:e.validator.format("請輸入長度為 {0} 至 {1} 之間的字串"),range:e.validator.format("請輸入 {0} 至 {1} 之間的數值"),max:e.validator.format("請輸入不大於 {0} 的數值"),min:e.validator.format("請輸入不小於 {0} 的數值")}),e});