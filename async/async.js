function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}


function toDo() {
    var p1, p2, p3;
    var time = 300;
    step1(time)
        .then(data => step2(time, p2 = data))
        .then(data => step3(time, p2, p3 = data))
        .then(res => {
            console.log('res is' + res);
        })
}

toDo()