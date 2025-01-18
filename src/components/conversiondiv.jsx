

function Conversiondiv ({curr,defval,name,Conval,Selected,setSelected,isDisabled,Input,setInput}) {
     
    

    return (
        <>
       
        <div className="condiv"  style={{overflow:'visible',padding:'0 5% 5% 5%',margin:'0 4% 0 4%'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <p style={{}}>{name}</p>
            <p style={{}}>Currency Type</p>

            </div>
           
           <div  style={{display:'flex',justifyContent:'space-between'}}>
           <input type="text" value={Conval} readOnly={isDisabled} onChange={(e)=>{setInput(Input=e.target.value) 
                                                                let numInput= Number.parseInt(Input) 
                                                                }}style={{width:'30%', border:'none'}}/>
           <select  value= {defval} onChange={(e)=>{setSelected(e.target.value)}} style={{border:'1px solid #85bb65',borderRadius:'5px',color:'#85bb65'}}>
           {curr && curr.length > 0
    ? curr.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))
    : null}
            
           </select>
           </div>
            
         </div>
        </>
    )
}
export default Conversiondiv