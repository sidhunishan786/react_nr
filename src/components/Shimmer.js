const Shimmer=()=>{
    return (
        <div id="shimmers">
           
           {Array(20).fill("").map((e)=>(<div key={e} className="w-20 bg-slate-500 flex flex-wrap px-6 py-6"></div>))}
        </div>

    )
}

export default Shimmer;