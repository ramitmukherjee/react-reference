
import { useEffect, useState } from "react"

export default function UseEffectExample() {

    
    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(0);
    const [ count3, setCount3 ] = useState(0);
    
    // this will logged every second.
    console.log(`UseEffectExample is being rendered now. ${count1}, ${count2}, ${count3}`);

    setTimeout(() => {
        let i = count1 + 1
        setCount1(i)
        
    }, 1000);

    useEffect(() => {
        setCount3(count1)
    }, [count1]);

    useEffect(() => {
        setTimeout(() => {
            setCount2(count2 + 1);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Use Effect:</h1>
            <p>Count1: {count1}</p>
            <ul>
                <li>Count 1 will keep incrementing as it is updated in a timeout directly in the component body.</li>
                <li>Inside the timeout setCount1 will cause a rerender and the setTimeout will be set again.</li>
                <li>This will keep happening in a loop and new timeouts will keep getting created.</li>
            </ul>
            <p>Count 2: {count2}</p>
            <ul>
                <li>Count2 is also incremented using a timer but that timer is not called directly in the component body.</li>
                <li>It's timer is set within a useEffect with an empty array as dependency.</li>
                <li>This effectively means that the useEffect body will only be run once when the component is loaded.</li>
            </ul>

            <h1>Use Effect Dependency:</h1>
            <p>Count3: {count3}</p>
            <ul>
                <li>Count 3 is not incremented by any timeout or interval then how us it incrementing?</li>
                <li>We are setting the value of count3 to the value of count1 inside a useEffect.</li>
                <li>We have passed count1 as the dependency to this use effect.</li>
                <li>Now every time count1 changes, this useEffect body will get called and count3 will get updated</li>
            </ul>
        </>
    )
}