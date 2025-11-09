let items = ["man",12,true,"potato"]

function iterator (items){
    this.index = 0
    this.items = items
}
iterator.prototype = {
    hasNext : function(){
        return  this.index < this.items.lenght
    },
    Next : function() {
        return this.items[this.index++]
}
}
let iter = new iterator(items)
console.log(iter.Next())
console.log(iter.Next())
console.log(iter.Next())
while (iter.Next()){
    console.log(iter.Next())
}