import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = ( value = 1 ) => {

        setCounter( counter + value );
    }

    const reset = () => {

        setCounter( initialValue );
    }

    const decrease = () => {

        setCounter( counter - 1 );
    }

    return {
        counter,
        increment,
        reset,
        decrease,
    }
}