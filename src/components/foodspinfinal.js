import './foodspinfinal.css';
import { useState } from 'react';
import DropdownButtons from './DropdownButton';
import Color from 'color';

export default function FoodSpinFinal (){
    const [selectedImage, setSelectedImage] = useState(null);
    const [rotationAngle, setRotationAngle] = useState(0);


    const foodDetails = {
        './image1.svg': { name: 'Green Goddess Chicken Salad', price: '$32', description: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.' ,color: '#FFEEDE' },
        './image2.svg': { name: 'Vegan Avocado Toast', price: '$25', description: 'A delicious vegan toast topped with fresh avocado slices, cherry tomatoes, and arugula.', color: '#EAFFE2' },
        './image3.svg': { name: 'Berry Smoothie Bowl', price: '$18', description: 'A refreshing smoothie bowl made with mixed berries, banana, and almond milk, topped with granola and chia seeds.' , color: '#FFEEDE'},
        './image4.svg': { name: 'Classic Caesar Salad', price: '$20', description: 'Crispy romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.' , color: '#FFEEDE' },
        './image5.svg': { name: 'Grilled Chicken Wrap', price: '$15', description: 'A whole wheat wrap filled with grilled chicken, lettuce, tomatoes, and a tangy sauce.', color: '#EAFFE2' },
        './image1.svg': { name: 'Green Goddess Chicken Salad', price: '$32', description: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.', color: '#FFEEDE' },
        './image2.svg': { name: 'Vegan Avocado Toast', price: '$25', description: 'A delicious vegan toast topped with fresh avocado slices, cherry tomatoes, and arugula.', color: '#FFEEDE' },
        './image3.svg': { name: 'Berry Smoothie Bowl', price: '$18', description: 'A refreshing smoothie bowl made with mixed berries, banana, and almond milk, topped with granola and chia seeds.', color: '#EAFFE2' },
        './image3.svg': { name: 'Berry Smoothie Bowl', price: '$18', description: 'A refreshing smoothie bowl made with mixed berries, banana, and almond milk, topped with granola and chia seeds.' , color: '#FFEEDE'},
      
    };

    const imageSources = [
        './image1.svg',
        './image2.svg',
        './image3.svg',
        './image4.svg',
        './image5.svg',
        './image1.svg',
        './image2.svg',
        './image3.svg',
        './image3.svg',
       
    ];

    const handleImageClick = (src) => {
        setSelectedImage({ ...foodDetails[src], src });
    };

    
    const rotateLeft = () => {
        setRotationAngle(rotationAngle - 45); // Adjust the step size as needed
    };

    const rotateRight = () => {
        setRotationAngle(rotationAngle + 45); // Adjust the step size as needed
    };

    const getBoxShadow = (color) => {
        // Use the color as the shadow color with reduced opacity
        return `0px 4px 6px ${color}66`; // 66 in hex is approximately 0.4 in alpha (40% opacity)
    };

    const darkenColor = (color, amount = 0.5) => {
        return Color(color).darken(amount).hex();
    };
    return(
        <>
        <div style={{border:"1px solid black",height:"100vh",width:"100vw",position:"relative",overflow:"hidden"}}>

           <div style={{paddingLeft:"5%",paddingRight:"5%",paddingTop:"3%"}}>
            <div className="Eclipse" style={{backgroundColor: selectedImage ? selectedImage.color : 'grey' }}>
            <div className='Images'>
<div className='ImageContainer' style={{transform: `rotate(${rotationAngle}deg)`}}>
{imageSources.map((src, index) => (
                                <img key={index} src={src} className='Food' onClick={() => handleImageClick(src)}></img>
                            ))}




</div>
</div>


  
            </div>


            {selectedImage && (
                            <div className='SelectedImageContainer'>
                                <img src={selectedImage.src} className='SelectedFood' alt='Selected'></img>
                            </div>
  )}
  <DropdownButtons 
                     color={selectedImage ? darkenColor(selectedImage.color) : 'grey'}
                    RotateLeft={rotateLeft} 
                    RotateRight={rotateRight} 
                />

            <div className="Header">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:'center',width:"42%"}}>
                <div><img src='.\foodspinLogo.png'></img></div>
        <div style={{display:'flex',justifyContent:"space-between",width:"45%"}}>
            <p>Breakfast</p>
            <p>Lunch</p>
            <p>Dinner</p>
        </div>
                </div>
       
        <div>
            <img src='.\lock.png'></img>
        </div>
                  

        </div>

        {selectedImage && (
                    <div className="Details" style={{ marginTop: "10%" }}>
                        <h1 style={{ color: darkenColor(selectedImage.color),fontSize:"50px",marginBottom:"0"}}>{selectedImage.price}</h1>
                        <h1 style={{ width: "25%" ,fontSize:"35px" ,marginTop:"0",fontStyle:"normal"}}>{selectedImage.name}</h1>
                        <p style={{ width: "28%" }}>{selectedImage.description}</p>
                        <button style={{ padding: "15px", borderRadius: "30px", backgroundColor: darkenColor(selectedImage.color) , border: "none",marginTop:"10px",color:"white",  boxShadow: getBoxShadow(selectedImage.color) }}>ORDER NOW</button>
                    </div>
                )}

</div>
        </div>
        </>
    )
}