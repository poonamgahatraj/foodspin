import './foodspinfinal.css';
import { useState } from 'react';

export default function FoodSpinFinal (){
    const [selectedImage, setSelectedImage] = useState(null);
    const [rotationAngle, setRotationAngle] = useState(0);


    const foodDetails = {
        './image1.svg': { name: 'Green Goddess Chicken Salad', price: '$32', description: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.' ,color: '#FF6347' },
        './image2.svg': { name: 'Vegan Avocado Toast', price: '$25', description: 'A delicious vegan toast topped with fresh avocado slices, cherry tomatoes, and arugula.', color: '#FF69B4' },
        './image3.svg': { name: 'Berry Smoothie Bowl', price: '$18', description: 'A refreshing smoothie bowl made with mixed berries, banana, and almond milk, topped with granola and chia seeds.' , color: '#32CD32'},
        './image4.svg': { name: 'Classic Caesar Salad', price: '$20', description: 'Crispy romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.' , color: '#FFD700' },
        './image5.svg': { name: 'Grilled Chicken Wrap', price: '$15', description: 'A whole wheat wrap filled with grilled chicken, lettuce, tomatoes, and a tangy sauce.', color: '#FF69B4' },
        './image1.svg': { name: 'Green Goddess Chicken Salad', price: '$32', description: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.', color: '#FFA500' },
        './image2.svg': { name: 'Vegan Avocado Toast', price: '$25', description: 'A delicious vegan toast topped with fresh avocado slices, cherry tomatoes, and arugula.', color: '#FFD700' },
        './image3.svg': { name: 'Berry Smoothie Bowl', price: '$18', description: 'A refreshing smoothie bowl made with mixed berries, banana, and almond milk, topped with granola and chia seeds.', color: '#FF69B4' }
    };

    const handleImageClick = (src) => {
        setSelectedImage({ ...foodDetails[src], src });
    };

    
    const rotateLeft = () => {
        setRotationAngle(rotationAngle - 45); // Adjust the step size as needed
    };

    const rotateRight = () => {
        setRotationAngle(rotationAngle + 45); // Adjust the step size as needed
    };
    return(
        <>
        <div style={{border:"1px solid black",height:"100vh",width:"100vw",position:"relative",overflow:"hidden"}}>

           <div style={{paddingLeft:"5%",paddingRight:"5%",paddingTop:"2%"}}>
            <div className="Eclipse" style={{backgroundColor: selectedImage ? selectedImage.color : 'grey' }}>
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
                                <img src={selectedImage.src} className='SelectedFood' alt='Selected'></img>
                            </div>
  )}
  <div  className="Dropdown">
<button style={{backgroundColor: selectedImage ? selectedImage.color : 'grey' ,border:"none"}} onClick={rotateLeft}><img src='.\dropdown.png'></img></button>
<button style={{backgroundColor: selectedImage ? selectedImage.color : 'grey' ,border:"none"}} onClick={rotateRight}><img src='.\dropdown.png'></img></button>
  </div>

            <div className="Header">
        <div><img src='.\foodspinLogo.png'></img></div>
        <div style={{display:'flex',justifyContent:"space-between",width:"20%"}}>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
        </div>
        <div>
            <img src='.\lock.png'></img>
        </div>
                  

        </div>

        {selectedImage && (
                    <div className="Details" style={{ marginTop: "5%" }}>
                        <h1 style={{ color: selectedImage.color ,fontSize:"50px"}}>{selectedImage.price}</h1>
                        <h1 style={{ width: "20%" ,fontSize:"35px" }}>{selectedImage.name}</h1>
                        <p style={{ width: "25%" }}>{selectedImage.description}</p>
                        <button style={{ padding: "15px", borderRadius: "20px", backgroundColor: selectedImage.color , border: "none",marginTop:"10px",color:"white" }}>ORDER NOW</button>
                    </div>
                )}

</div>
        </div>
        </>
    )
}