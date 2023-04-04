const Shimmer=()=>{
    return (
        <div id="shimmers">
           
           {Array(10).fill("").map((e)=>(<div key={e} id="shimmersCard"></div>))}
        </div>

    )
}

export default Shimmer;