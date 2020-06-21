// Array.prototype.splice = function (start,end) {
//     let temp = [];
//     let a;
//     this.forEach((item,index)=>{
//         if(index == end){
//             a = item;
//         }
//     })
//     // let a =  this.splice(start,)
// }

Array.prototype._splice = function (start, deleteCount, ...addList) {
    if (start < 0) {
        if (Math.abs(start) > this.length) {
            start = 0
        } else {
            start += this.length
        }
    }

    if (typeof deleteCount === 'undefined') {
        deleteCount = this.length - start
    }
    const removeList = this.slice(start, start + deleteCount)
    console.log(removeList);
    if (typeof addList == 'undefined') {
        const right = this.slice(start + deleteCount)

        let addIndex = start
        addList.concat(right).forEach(item => {
            this[addIndex] = item
            addIndex++
        })
        this.length = addIndex;
        console.log(this);
    } else {
        console.log(removeList);
    }




}
var arr = [9, 2, 4, 6, 1, 8, 5, 10];
arr._splice(2, 3,0,0)
// let a = arr.slice(2,5)
// console.log(a);

// let b = arr.splice(2,3)
// console.log(b);