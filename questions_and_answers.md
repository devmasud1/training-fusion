<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined.

<i>Here, there is a variable named 'greeting', but when the value is being set, the name becomes 'greetign', and since there is no variable named 'greetign', it will give a ReferenceError.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>Here, a function named 'sum' is called, which returns the sum of two numbers. When the function is called, it is given a number (1) and a string ("2") as arguments. JavaScript concatenates numbers and strings when adding them, so the function returns the string "12."</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔'].

<i>Here, an array named `food` and an object named `info` are created. The object `info` has a property that initially holds the value of the first element of the `food` array.Then, the `info.favoriteFood` property is updated. However, this change does not affect the original `food` array, so when you log `food`, it remains unchanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined.

<i>In the same 'sayHi' function, there is a parameter named 'name'. However, when you call 'sayHi()' without providing any arguments, 'name' is not defined. Since the function cannot find the value of 'name', it concatenates "Hi there," with 'undefined'.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3.

<i>Here, the value of 'count' is 0, and an array 'nums' is provided, which contains four numbers. The 'forEach' method is used to iterate over the elements of the 'nums' array. The condition 'if (num)' checks whether the current element is truthy (not equal to 0). For the elements 1, 2, and 3 in the array, this condition is true, and the value of 'count' is incremented for each element. Therefore, the value of 'count' becomes 3, and that's the final output.</i>

</p>
</details>
