function* createFeiboIterator() {
    let prev1 = 1,
        prev2 = 1,
        n = 1;
    while (true) {
        if (n <= 2) {
            yield 1;
        } else {
            const value = prev1 + prev2;

            prev2 = prev1;
            prev1 = value;
            yield value;


        }
        n++;
    }
}

var f = createFeiboIterator()