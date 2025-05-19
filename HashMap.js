class HashMap {
  constructor(capacity, loadFactor) {
    this.buckets = [];
    this.size = 0;
    this.capacity = capacity; // number of "buckets"
    this.loadFactor = loadFactor;
  }

  #resize() {
    console.log("Doubling size of array...");
    let oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      if (!bucket) continue; // skip undefined or null buckets
      // iterate through each bucket
      for (const [key, value] of bucket) {
        // iterate through each key-value pair
        this.set(key, value);
      }
    }
  }

  set(key, value) {
    if (this.size >= this.capacity * this.loadFactor) {
      this.#resize();
    }

    let index = hash(key, this.capacity);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = [[key, value]];
      this.size++;
    } else {
      let inserted = false; // check flag to mark a successful insertion
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          this.buckets[index][i][1] = value; // overwrite with the new value for this key
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.buckets[index].push([key, value]);
        this.size++;
      }
    }
  }

  get(key) {
    let index = hash(key, this.capacity);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return null;
  }

  has(key) {
    let index = hash(key, this.capacity);
    const bucket = this.buckets[index];
    if (!bucket) return false;
    for (const [k, v] of bucket) {
      if (k === key) return true;
    }
    return false;
  }

  remove(key) {
    let index = hash(key, this.capacity);
    const bucket = this.buckets[index];
    if (!bucket) return false;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  keys() {
    let result = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        result.push(key);
      }
    }
    return result;
  }

  values() {
    let result = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        result.push(value);
      }
    }
    return result;
  }

  entries() {
    let result = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        result.push([key, value]);
      }
    }
    return result;
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

const test = new HashMap(16, 0.75);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.length()); // 12
test.set("lion", "golden");
test.set("tomato", "red");
test.set("jackfruit", "green");
console.log(test.length()); // 14
console.log(test.has("grape")); // true
console.log(test.has("penguin")); // false
console.log(test.remove("dog")); // true
console.log(test.remove("cat")); // false
console.log(test.length()); // 13
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test.entries());
