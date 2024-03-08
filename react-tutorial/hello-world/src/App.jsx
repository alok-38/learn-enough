const App = () => {
const a = 10
const b = 20
const now = new Date()
  return (
    <div>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <p>
        Hello World, it is {now.toString()}
      </p>
    </div>
  )
}

export default App