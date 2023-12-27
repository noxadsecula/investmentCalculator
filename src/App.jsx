import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultTable from "./components/ResultTable" 
import { useState } from "react"





function App() {
 
//  States
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10
  })

  const inputIsValid = userInput.duration >= 1;





  // Event listeners, handler and utils
  function userInputHandler(inputIdentifier, newValue) {
    setUserInput((prevData) => {
      return{
        ...prevData,
        [inputIdentifier]: +newValue,

      }

      

      
    } )
  }
  



  return (
    <main>
      <Header/>
      <UserInput onChangeData={ userInputHandler } userInputData = { userInput }/>
      {inputIsValid ? <ResultTable userInputData ={ userInput } /> : <p className="center">Please provide duration decently</p>}
      
    </main>
  )
}

export default App
