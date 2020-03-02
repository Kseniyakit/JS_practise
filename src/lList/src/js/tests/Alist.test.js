const { AList } = require('../AList');

describe(".size", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {
        assert.deepEqual(tArray.size(), 4);
    });
});
describe(".addStart", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.addStart(5), 5);
    });
});
describe(".addEnd", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.addEnd(1), 5);
    });
});
describe(".delStart", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.delStart(), 5);
    });
});
describe(".delEnd", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.delEnd(), 4);
    });
});
describe(".delPosition", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.delPosition(2), 9);
    });
});
describe(".get", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.get(1), 2);
    });
});
describe(".set", function() {

    let tArray = new AList([5, 2, 9, 4]);

    it('index = 3, value = 99', function() {

        tArray.set(3, 99);

        assert.deepEqual(tArray.get(3), 99);

    });

    it('index = 3, value = 99', function() {
        tArray.set(3, 99);

        assert.deepEqual(tArray.arr, [5, 2, 9, 99]);;

    });
    it('index = 9, value = 99', function() {

        assert.deepEqual(tArray.set(9, 99), undefined);

    });
});
describe(".toString", function() {
    let tArray = new AList([5, 2, 9, 4]);


    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.toString(), " 5 2 9 4");
    });
});
describe(".clear", function() {

    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем предыдущий массив", function() {

        assert.deepEqual(tArray.clear(), [5, 2, 9, 4]);
    });
});
describe(".min", function() {
    let tArray = new AList([5, 2, 9, 4]);


    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.min(), 2);
    });
});
describe(".max", function() {
    let tArray = new AList([5, 2, 9, 4]);
    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.max(), 9);
    });
});
describe(".sort", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.arr.sort(), [2, 4, 5, 9]);
    });
});
describe(".maxIndex", function() {
    let tArray = new AList([5, 2, 9, 4]);


    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.maxIndex(), 2);
    });
});

describe(".minIndex", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.minIndex(), 1);
    });
});
describe(".reverse", function() {
    let tArray = new AList([5, 2, 9, 4]);

    it("Пердаем массив:[5, 2, 9, 4]", function() {

        assert.deepEqual(tArray.arr.reverse(), [4, 9, 2, 5]);
    });
});
describe(".halfreverse", function() {

    let tArray = new AList([5, 2, 9, 4]);


    it('halfReverse is done', function() {

        tArray.halfR();

        assert.deepEqual(tArray.arr, [2, 5, 4, 9]);

    })
});