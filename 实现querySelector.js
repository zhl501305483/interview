function matchSelector(select, element) {
    if (select.includes('.')) {
        return Array.prototype.includes.call(element.classList, select.slice(1)) ? true : false;

    } else if (select.includes('#')) {
        return element.id.includes(select.slice(1)) ? true : false;
    } else {
        return element.tagName == select.toUpperCase() ? true : false;
    }
}

function querySelector(select, element) {

    if (!element || element == document) {
        element = document.body;
    }
    var children = element.children;
    var res = null;
    for (let item of children) {
        if (matchSelector(select, item)) {
            return item;
        }
        res = querySelector(select, item);
        if (res) {
            return res;
        }
    }
    return null;
}