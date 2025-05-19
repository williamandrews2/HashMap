class HashTable {
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

    for(const bucket of oldBuckets){ // iterate through each bucket
        for(const [key, value] of bucket){ // iterate through each key-value pair
            this.set(key, value);
        }
    }
  }

  set(key, value) {
    if(this.size >= (this.capacity * this.loadFactor)){
        this.#resize();
    }

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
    this.size++;
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
