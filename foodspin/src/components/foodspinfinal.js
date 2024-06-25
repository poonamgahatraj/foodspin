import './foodspinfinal.css';
import { useState } from 'react';

export default function FoodSpinFinal (){
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
        <div style={{border:"1px solid black",height:"100vh",width:"100%",position:"relative",overflow:"hidden"}}>

           
            <div className="Eclipse">
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


{/* 
{selectedImage && (
                            <div className='SelectedImageContainer'>
                                <img src={selectedImage} className='SelectedFood' alt='Selected'></img>
                            </div>
  )} */}

</div>
</div>


  
            </div>


            {selectedImage && (
                            <div className='SelectedImageContainer'>
                                <img src={selectedImage} className='SelectedFood' alt='Selected'></img>
                            </div>
  )}
  <div  className="Dropdown">
<button style={{backgroundColor:'#FE912C',border:"none"}} onClick={rotateLeft}><img src='.\dropdown.png'></img></button>
<button style={{backgroundColor:'#FE912C' ,border:"none"}} onClick={rotateRight}><img src='.\dropdown.png'></img></button>
  </div>

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

        <div style={{marginTop:"15%"}}>
                <h1>$32</h1>
                <h1 style={{width:"20%"}}>Green Goddess Chicken Salad</h1>
                <p style={{width:"25%"}}>It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. </p>
                <button style={{padding:"10px",borderRadius:"20px",backgroundColor:"#FE912C",border:"none"}}>ORDER NOW</button>
            </div>
        </div>
        </>
    )
}