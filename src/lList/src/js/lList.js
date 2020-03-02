const Node = require('./node/node');

function lList(array) {
    List.apply(this, arguments);
    this.root = null;
    this.defaultArray = array;
    this.init(array)
}
lList.prototype = Object.create(List.prototype);
lList.prototype.constructor = lList;
lList.prototype.init = function(array) {
    this.root = new Node(array[array.length - 1]);
    for (let i = array.length - 2; i > 0; i--) {
        this.addStart(array[i]);
    }
}

lList.prototype.addStart = function(elem) {
    const node = new Node(elem);
    node.next = this.root;
    this.root = node;
};
lList.prototype.size = function() {
    if (this.root) {
        let current = this.root;
        let size = 1;
        while (current.next) {
            current = current.next;
            size++;
        }
        return size;
    }
    return 0;
};
lList.prototype.addEnd = function() {
    let node = this.get(this.size() - 2);
    let last = this.get(this.size() - 1);
    node.next = null;
    return last.val;
}
lList.prototype.addPos = function(pos, elem) {
    let node = newNode(lem);
    if (pos == 0) {
        return this.addStart(node.val);
    }
    if (pos == this.size()) {
        return this.addEnd(node.val)
    }
    node.next = this.get(pos);
    this.get(pos - 1).next = node;
    return;
}

let lList1 = new lList([5, 2, 9, 4]);


console.log(lList1.init());