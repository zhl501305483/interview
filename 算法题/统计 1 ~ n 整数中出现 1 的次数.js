function findOne(n) {
    var res = 0;
    var item;
    for (let i = 1; i < n + 1; i++) {
        item = String(i).split('')
        if (item.includes('1')) {
            res += item.filter(item => item === '1').length;
        }
        // item = String(i);
        // if (item.indexOf('1')) {
        //     // res += Math.max(item.split('').filter(item=> item === '1'))

        // }
        // Math.max(item.map(item=> item))

    }
    console.log(res);
}

findOne(20)