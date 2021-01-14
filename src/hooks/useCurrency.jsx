import React, {Fragment, useState} from 'react'

const useCurrency = (labelText, initialState, options) =>{



    //custom hook state
    const [state, updateState] = useState(initialState);

    const Select = () => (
        <>
            <label>{labelText}</label>
            <select
                onChange={ e => updateState(e.target.value)}
                value={state}
            >
                {options.map(option =>(
                    <option key={option.code} value={option.code}>
                        {option.name}
                    </option>
                ))}
            </select>
        </>
    )

    //return state, the "UI" and the function that updates the state

    return[state, Select];
}

export default useCurrency
