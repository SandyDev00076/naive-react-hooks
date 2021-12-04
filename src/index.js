import { React } from "./hooks";

const { useState, resetIndex, useEffect } = React;

const Component = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Sanjeet");
    console.log("Counter", counter);
    console.log("Name", name);
    
    useEffect(() => {
        console.log("useEffect");
    }, [name])

    if (counter !== 1) {
        setCounter(1);
    }

    if (name !== "Tiwari" && counter === 1) {
        setName("Tiwari");
    }
}

console.log(Component());
resetIndex();
console.log(Component());
resetIndex();
console.log(Component());