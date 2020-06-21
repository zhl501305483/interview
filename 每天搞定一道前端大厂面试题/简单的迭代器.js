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


var obj = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 3
}
let t = [...obj]
console.log(t);