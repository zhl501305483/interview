const makeIterator = function(arr){
    let firstIndex = 0 ;
    return {
        next(){
            return firstIndex < arr.length ? {value: arr[firstIndex++] , done: false} : {value: undefined , done: true}
        }
    }
}

const it = ['神话','星月']
let temp = makeIterator(it)
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const len = arr.length;

var iterator = {
    n: 0,
    next() {
        return this.n < arr.length ? {
            value: arr[this.n++],
            done: false
        } : {
            value: undefined,
            done: true
        }
    }
}

for(let i = 0 ; i < len ; i++){
    console.log(iterator.next().value);
}








