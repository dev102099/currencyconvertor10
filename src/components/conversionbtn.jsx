

function Conbtn({From,To,conRate,Input,setConval}){
    
    return (
        <>
        <button style={{margin:'4%',backgroundColor:'#85bb65',color:'white',padding:'7%',border:'0.5px solid white',borderRadius:'12px',fontSize:'120%'}} onClick={()=>{setConval(Input*conRate)}}><b>Convert {From.toUpperCase()} To {To.toUpperCase()}</b></button>
        </>
    )
}
export default Conbtn