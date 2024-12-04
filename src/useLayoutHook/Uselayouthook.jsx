import { useEffect, useLayoutEffect, useRef } from "react";
export const Uselayouteffect=()=>{
    const inputRef = useRef(null);
    useEffect(()=>{
      inputRef.current.value= "HELLO";
    },[])
  useLayoutEffect(()=>{
    console.log(inputRef.current.value);
  },[])
    return(
      <div>
              <h1>useLayoutEffect</h1>
              <p>
                all thhe time when page loads in "anu" will console, but in input field 
                value will change as "HELLO", bcs useLayoutEffect Hook will call before 
                react start to print the values in UI after that useEffect hook will call.
              </p>
              <input ref={inputRef} value="ANU" style={{width:200, height:50}}></input>
      </div>
    )
  }