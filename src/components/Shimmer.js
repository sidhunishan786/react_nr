const Shimmer=()=>{
    return (
        <div data-testid="shimmer">
           
           {Array(30).fill("").map((e)=>(<div key={e} className="  h-2 w-6 bg-slate-500 flex flex-wrap justify-between px-2 py-2"></div>))}
        </div>

    )
}

export default Shimmer;