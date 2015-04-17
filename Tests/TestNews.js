var news = require('./../rest/news');

var JSONObject = news.fetchNews()
var newItemList = JSONObject.query.results.item;

for (var i = 0, len = newItemList.length; i < len; i++) {

}

console.log("JSON: ", newItemList[0].author);
console.log("JSON: ", newItemList[0].title);