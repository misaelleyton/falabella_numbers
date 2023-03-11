import React from 'react'
import './App.css'

const App: React.FC = () => {
  const numbers: Array<string | number> = []
  // For loop to create the baseline (1-100 numbers)
  for (let i = 1; i < 101; i++) {
    // Create a dict to store the values that are going to replace the numbers when the condition on value is true
    const evals = {
      Marketplace: i % 3 === 0 && i % 5 === 0,
      Falabella: i % 3 === 0,
      IT: i % 5 === 0
    }
    // Assign a default value, in this case the number
    numbers[i] = i
    // Iterate the dict to search for true, since we sort the dict with priority, the replacement is going to be in the same priority
    for (const [key, value] of Object.entries(evals)) {
      if (value) {
        // If we find a true condition, eg on number 15, the key replace the number and we exit the for loop
        numbers[i] = key
        break
      }
    }
  }
  // just to print we delete the 0 index since has no value
  numbers.splice(0, 1)
  // Join the text to be printed
  const text = numbers.join(', ')
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-text">
          {text}
        </p>
      </header>
    </div>
  )
}

export default App
