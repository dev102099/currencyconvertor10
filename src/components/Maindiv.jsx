import Head from "./Head"
import Conversiondiv from "./conversiondiv"
import { useEffect,useState } from "react"
import Conbtn from "./conversionbtn"
function Maindiv () {
    let [From,setFrom] = useState("eur")
    let [To,setTo] = useState("inr")
    let [Input,setInput] = useState(0)
    let [Conval,setConval] = useState(0)
    let [conRate,setconRate]=useState(0)
    let [curr,setcurr] = useState([])
    

    function onSwap(){
      setFrom(To)
      setTo(From)
    }
   
    const Fetch= 
      async() => {
        
            let b = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${From}.json`)
            const data = await b.json()
              setconRate( data[From][To])
              setcurr(curr=Object.keys(data[From]))
              
              
             
      }
    
useEffect(() => {
  Fetch()

 
}, [From,To])



    return (
        <>
     
        <div className="maindiv">
<Head></Head>
<Conversiondiv defval = {From} name="From" Selected={From} isSelected={false} isSelected2={true} setSelected={setFrom} isDisabled={false} Input={Input} setInput={setInput} curr={curr}></Conversiondiv>
<button style={{width:'20%',padding:'2%',backgroundColor:'#85bb65',color:'white',border:'.5px solid white',alignSelf:'center',overflow:'visible',borderRadius:'8px'}} onClick={onSwap} >Swap</button>
<Conversiondiv defval = {To} name="To" isDisabled={true} isSelected={true} isSelected2={false}  Selected={To} setSelected={setTo} Conval={Conval} curr={curr}></Conversiondiv>
<Conbtn From={From} To={To} conRate={conRate} Input={Input} setConval={setConval}></Conbtn> 
        </div>
        </>
    )
}
export default Maindiv