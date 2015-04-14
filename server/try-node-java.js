var list = java.newInstanceSync("java.util.ArrayList");
list.addSync("item1");
list.addSync("item2");
console.log(list.getSync(1)); // prints "item2"