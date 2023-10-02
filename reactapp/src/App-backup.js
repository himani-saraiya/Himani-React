
import Welcome from "./Welcome"
// import , {A} from "./Button"


// console.log(Neeraj, A)

import Button from "./Button"

function App() {
  const userName = { name: "Parinita" }

  const clickHandler = () => {
    console.log("hello")
  }
  return <>
    {/* <input type="text"/> */}
    {/* <p className="">this is para</p>
    <h2>this is a heading</h2>
    <h1>welcome {JSON.stringify(userName)}</h1>
    <button onClick={clickHandler}>click here</button> */}
    <Welcome name="Deepak" />
    <Welcome name="Gourav" />
    
    <Button
      label={"button 1"}
      disabled={false}
      onClick={() => {
        setTimeout(function () {
          console.log("button 1")
        }, 5000)
      }}
    />

    <Button
      label={"button 2"}
      disabled={false}
      onClick={() => console.log("button 2 clicked")}
    />

  </>
}

export default App