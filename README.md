# Challenge Fullstack Developer
The objective of this file is to explain the solution used in the code that I wrote

Given the limitation of the challenge, the approach that I took was to iterate over something that could replace the number that we are evaluating, so for that I create a dictionary with the conditions that were requested in the challenge ordered by priority, this priority allows the condition of 3 and 5 at the same time to be evaluated first and that way exists, otherwise would be overridden by any of the following evals.

The first step is to create an array to store the values that we need to display, after that start a variable to evaluate the possible conditions
Technically the eval is just a dictionary with the text wanted to be displayed as key and the regarding condition as value, that way we are going to have something like this

```
For I = 3

evals = {
      Marketplace: false, //i % 3 === 0 && i % 5 === 0,
      Falabella: true, //i % 3 === 0,
      IT: false //i % 5 === 0
    }


For I = 5

evals = {
      Marketplace: false, //i % 3 === 0 && i % 5 === 0,
      Falabella: false, //i % 3 === 0,
      IT: true //i % 5 === 0
    }


For I = 15

evals = {
      Marketplace: true, //i % 3 === 0 && i % 5 === 0,
      Falabella: true, //i % 3 === 0,
      IT: true //i % 5 === 0
    }
```

Then, we assign a default value to the position that we are evaluating in this case the default value is the number itself <sub> numbers[i] = i </sub>, to end by iterating the eval dict, and if we find a true value, we reassign the number position to the key that is true, in this case <sub> numbers[i] = key </sub>

Finally, we join the array to display the text value of it
