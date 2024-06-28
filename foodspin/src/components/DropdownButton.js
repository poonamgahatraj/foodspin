export default function DropdownButtons({ color, RotateLeft, RotateRight }){
    return(
        <>
         <div className="Dropdown">
            <button style={{ backgroundColor: color, border: "none",height:"30px",width:"30px",display:"flex",justifyContent:"center",alignItems:'center',borderRadius:"50%" }} onClick={RotateLeft}>
                <img src='./dropdown.png' alt="Rotate Left"></img>
            </button>
            <button style={{backgroundColor: color, border: "none",height:"30px",width:"30px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:'center'  }} onClick={RotateRight}>
                <img src='./dropdown.png' alt="Rotate Right"></img>
            </button>
        </div>
        </>
    )
}