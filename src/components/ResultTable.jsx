import { calculateInvestmentResults, formatter } from '../util/investment.js'


export default function ResultTable({ userInputData }) {
    const calculations = calculateInvestmentResults(userInputData)
    const initialInvestment = 
    calculations[0].valueEndOfYear -
    calculations[0].interest -
    calculations[0].annualInvestment;
    return (
        <table id='result'>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {calculations.map(yearData => {
                    const totalInterest = 
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    initialInvestment;

                    const totalAmountInvestment = yearData.valueEndOfYear - totalInterest;

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvestment)}</td>
                    </tr>
                })}
            </tbody>
            
            
        </table>
    )
}