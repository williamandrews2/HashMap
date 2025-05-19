# 🗂️ JavaScript HashMap Implementation

Welcome to my custom HashMap implementation in JavaScript! This project is a clean, educational build of a hash table with all the essentials: dynamic resizing, collision handling, and handy map methods.

## 🚀 Features

- 🔄 Dynamic resizing: Automatically doubles capacity when load factor is exceeded
- 🔗 Separate chaining: Handles collisions by storing multiple key-value pairs in buckets
- 🔍 Core methods: `set()`, `get()`, `has()`, `remove()`, `clear()`, plus `keys()`, `values()`, and `entries()`
- 📊 Size tracking: Keeps count of the current number of elements for quick access
- 🧮 Simple hashing: Uses a prime multiplier to turn string keys into bucket indices

## 📚 About This Project

This HashMap project is part of the JavaScript HashMap lesson on The Odin Project.
If you want to see the full assignment details and instructions, check out the lesson here: [➡️ The Odin Project - JavaScript HashMap](https://www.theodinproject.com/lessons/javascript-hashmap)

## 💡 Usage Example

```bash
const map = new HashMap(10, 0.75);

map.set("apple", 5);
map.set("banana", 10);

console.log(map.get("apple"));    // Output: 5
console.log(map.has("banana"));   // Output: true

map.remove("apple");

console.log(map.keys());           // Output: ["banana"]
console.log(map.values());         // Output: [10]
console.log(map.entries());        // Output: [["banana", 10]]

map.clear();
console.log(map.length());         // Output: 0
```

## 🛠️ Implementation Details

- The buckets are initialized as arrays for separate chaining
- Uses a private #resize() method to double capacity and rehash keys when needed
- Keys are hashed with a simple function using character codes and a prime number multiplier
- Resizing ensures performance stays optimal as the map grows


