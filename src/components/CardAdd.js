
import React, {useState} from 'react';


const CardAdd = ({data}) => {

    const [showNewCardForm, setShowNewCardForm] = useState(false);

    const createNewCard = () => {
        console.log("Just cheking!")
        setShowNewCardForm(true)
    }




return (
<button onClick={() => createNewCard()}> Add new card </button>


  ); 


};




export default CardAdd; 