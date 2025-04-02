import './foodspin.css';
import { useState } from 'react';
import Eclipse from './eclipse';

export default function Foodspin (){
    const [selectedImage, setSelectedImage] = useState(null);
    const [rotationAngle, setRotationAngle] = useState(0);
    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const rotateLeft = () => {
        setRotationAngle(rotationAngle - 45); // Adjust the step size as needed
    };

    const rotateRight = () => {
        setRotationAngle(rotationAngle + 45); // Adjust the step size as needed
    };


    return(
        <>
        <div className='Container' style={{height:"100%",width:"100%",border:"3px solid black",overflow:'hidden'}}>
        <div className='EclipseContainer'>
                    <Eclipse />
                </div>
            <div className='Content'>
        <div className="Header">
        <div><img src='.\foodspinLogo.png'></img></div>
        <div style={{display:'flex',justifyContent:"space-between",width:"25%"}}>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
        </div>
        <div>
            <img src='.\lock.png'></img>
        </div>
        </div>

        <div className='Information'>
            <div className='Detail'>
                <h1>$35</h1>
                <p style={{fontSize:"24px"}}>Asian Cucumber Salad</p>
                <p style={{width:"30%"}}>Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!</p>
                <button style={{padding:"15px",borderRadius:"25px",backgroundColor:"#54BF29",color:'white',border:"none"}}>ORDER NOW</button>
            </div>
            <div className='Images'>
<div className='ImageContainer' style={{transform: `rotate(${rotationAngle}deg)`}}>
<img src='.\image1.svg' className='Food'  onClick={() => handleImageClick('./image1.svg')}></img>
<img src='.\image2.svg' className='Food'  onClick={() => handleImageClick('./image2.svg')}></img>
<img src='.\image3.svg' className='Food'  onClick={() => handleImageClick('./image3.svg')}></img>
<img src='.\image4.svg' className='Food'  onClick={() => handleImageClick('./image4.svg')}></img>
<img src='.\image5.svg' className='Food'  onClick={() => handleImageClick('./image5.svg')}></img>
<img src='.\image1.svg' className='Food'  onClick={() => handleImageClick('./image1.svg')}></img>
<img src='.\image2.svg' className='Food'  onClick={() => handleImageClick('./image2.svg')}></img>
<img src='.\image3.svg' className='Food'  onClick={() => handleImageClick('./image3.svg')}></img>

</div>



{selectedImage && (
                            <div className='SelectedImageContainer'>
                                <img src={selectedImage} className='SelectedFood' alt='Selected'></img>
                            </div>
  )}

  
<div style={{display:"flex",justifyContent:"space-between",width:"75%",position:"absolute",top:"80%"}}>
<button onClick={rotateLeft}>left</button>
<button onClick={rotateRight}>right</button>
  </div>


            </div>


           
        </div>

       
        </div>
        </div>
        </>
    )
}