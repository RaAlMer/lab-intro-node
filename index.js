class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length === 0){
      this.items.push(item);
      this.length = 1;
    } else {
      this.items.push(item);
      this.length += 1;
      this.items.sort((a,b) => {
        return a - b;
      });
    };    
  };

  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    };
  };

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  };

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  };

  sum() {
    if (this.length === 0){
      return 0;
    } else {
      let sum = 0;
      for(let i = 0; i < this.length; i++){
        sum += this.items[i];
      };
      return sum;
    };
  };

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.length;
    };
  };
};

module.exports = SortedList;
