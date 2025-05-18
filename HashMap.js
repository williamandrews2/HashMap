class HashTable {
  constructor(capacity, loadFactor) {
    this.buckets = [];
    this.capacity = capacity; // number of "buckets"
    this.loadFactor = loadFactor;
  }

  #checkLength() {
    let checkValue = this.buckets.length * this.loadFactor;
    if (checkValue >= this.capacity) {
      this.#doubleArraySize();
    }
  }

  #doubleArraySize() {
    // create a new array double the size of the old one
    // copy all existing nodes over to the buckets of the new array
    // hash all the keys again to place in respective buckets.
  }

  set(key, value) {
    let index = hash(key, this.capacity);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = [[key, value]];
    } else {
      let inserted = false; // check flag to mark a successful insertion
      for (let i = 0; i < this.buckets.length; i++) {
        if (buckets[index][i][0] === key) {
          this.buckets[index][i][1] = value; // overwrite with the new value for this key
          inserted = true;
        }
      }
      if (inserted === false) {
        this.buckets[index].push([key, value]);
      }
    }
  }
}

function hash(key, capacity) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
  }

  return hashCode;
}
