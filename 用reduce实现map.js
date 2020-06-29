// function myMap(data, func) {
//     return data.reduce((prev, item, index) => {
//         prev[index] = func(item);
//         return prev;
//     }, [])
// }

// var a = myMap([1, 2, 3], (item) => item + 1)
function isSelect(select, element) {
    if (select.includes('.')) {
        return Array.prototype.includes.call(element, select.slice(1)) ? true : false
    }
}

function myQuerySelector(select, element) {

    if (!element || element === document) {
        element = document.body;
    }
    var children = element.children;
    var res;
    for (const item of children) {
        if (isSelect(select, item)) {
            return item
        }
        res = myQuerySelector(select, item);
        if (res) {
            return res;
        }
    }
    return null;
}

var a = myQuerySelector('.demo');