export default function UserInput({ onChangeData, userInputData}) {

    

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input 
                    type="number" 
                    value={userInputData.initialInvestment ? userInputData.initialInvestment : null} 
                    onChange={(e) => onChangeData('initialInvestment',e.target.value)} 
                    required />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input 
                    type="number" 
                    value={userInputData.annualInvestment ? userInputData.annualInvestment : null} 
                    onChange={(e) => onChangeData('annualInvestment',e.target.value)} 
                    required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input 
                    type="number" 
                    value={userInputData.expectedReturn ? userInputData.expectedReturn : null} 
                    onChange={(e) => onChangeData('expectedReturn',e.target.value)} 
                    required />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input 
                    type="number" 
                    value={userInputData.duration ? userInputData.duration : null} 
                    onChange={(e) => onChangeData('duration',e.target.value)} 
                    required />
                </p>
            </div>
            
        </section>
        
    )
}