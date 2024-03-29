import React,{useState,useEffect} from "react";
const Clock = () => {
  const [date , setDate] = useState(new Date());

   useEffect(() => {
      const timer = setInterval(()=>{
        setDate(new Date());
      },1000);

      return()=>{
        clearInterval(timer);
       };
   },[]);
    

   return(
    <div className="App">
       <h2>This is {date.toLocaleString()}</h2>
    </div>
   )
  
}

export default Clock;