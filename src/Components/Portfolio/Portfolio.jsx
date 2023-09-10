import ChildPortfolio from "./ChildPortfolio";
import imageOneSrc from './../../images/poert1.png';
import imageTwoSrc from './../../images/port2.png';
import imageThreeSrc from './../../images/port3.png';
import { useState } from "react";

export default function Portfolio() {
    const  card =[
        {
            id: 'imageOne',
            src: imageOneSrc,
        },
        {
            id: 'imageTwo',
            src: imageTwoSrc,
        },
        {
            id: 'imageThree',
            src: imageThreeSrc,
        },
    ];
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const images=[
        //spread synitx
        ...card,...card
    ]
    const togglePopup = (image) => {
      setSelectedImage(image);
      setShowPopup(!showPopup);
    };
  return (
    <div>
      <ChildPortfolio images={images} showPopup={showPopup} selectedImage={selectedImage} togglePopup={togglePopup} />
    </div>
  );
}
