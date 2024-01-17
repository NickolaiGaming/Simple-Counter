import React from 'react';
import { useState , useEffect } from 'react';

import SimpleCounter from "./component/SimpleCounter"



const App = () => {
    const [contador, setContador] = useState(0);


    useEffect(()=>{
        const interval = setInterval(() => {
            setContador(contador => contador + 1)
        }, 1000)
        return () => clearInterval(interval)
}, [contador])


    function calcularSegundos(unContador, puesto){
        return Math.floor(unContador / puesto) % 10
    }

    return (
        <>
        <SimpleCounter 
        miles={calcularSegundos(contador, 1000)}
        centenas={calcularSegundos(contador, 100)}
        decenas={calcularSegundos(contador, 10)}
        segundos={calcularSegundos(contador, 1)}/>
        </>
    )
}

export default App;