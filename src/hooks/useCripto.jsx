import React, {Fragment, useState} from 'react'

const useCripto = (labelText, initialState, options) =>{
    
    //custom hook state
    const [state, updateState] = useState(initialState);

    const SelectCripto = () => (
        <>
            <label>{labelText}</label>
            <select
                onChange={ e => updateState(e.target.value)}
                value={state}
            >
                {options.map(option =>(
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
                        {option.CoinInfo.FullName}
                    </option>
                ))}
                
            </select>
        </>
    )

    //return state, the "UI" and the function that updates the state

    return[state, SelectCripto];
}

export default useCripto
