class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.slice(-1)[0];
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  sum() {
    let suma = 0;
    for (let i = 0; i < this.items.length; i++) {
      suma += this.items[i];
    }
    return suma;
  }
  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let suma = 0;
      for (let i = 0; i < this.items.length; i++) {
        suma += this.items[i];
      }
      return suma / this.items.length;
    }
  }
}

module.exports = SortedList;
