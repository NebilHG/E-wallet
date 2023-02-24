import { useState } from 'react';
import './Card.css';


import Bitcoin from '../../assets/vendor-bitcoin.svg'
import Ninja from '../../assets/vendor-ninja.svg'
import Blockchain from '../../assets/vendor-blockchain.svg'
import Evil from '../../assets/vendor-evil.svg'


function Card(props) {
  let {  id ,number, name, validTo, color ,vendor}=props;
  const  [classNames, setClassNames] = useState('card');
  
    

    function setColor(){
      if (vendor === 'Bitcoin'){
        color = '#FFAE34';
      }
      else if (vendor === 'Ninja'){
        color = '#222222';
      }
      else if (vendor === 'Blockchain'){
        color = '#8B58F9';

      }
      else if(vendor === "Evil"){
        color = "#F33355";
      }
      else{
        color = 'grey'
      }
    }

    setColor();


    function setVendor(){
      if (vendor === 'Bitcoin'){
        vendor = Bitcoin;
      }
      else if (vendor === 'Ninja'){
        vendor = Ninja;
      }
      else if (vendor === 'Blockchain'){
        vendor = Blockchain;

      }
      else if(vendor === "Evil"){
        vendor = Evil;
      }
      else{
        vendor = Bitcoin
      }
    }
    setVendor()



    function updateClassNames() {
      let cards = document.querySelectorAll('.card');
      let isActiveCardAdded = false;
    
      for (let card of cards) {
        card.className = 'card';
    
        // Check if this is the first card being updated
        if (!isActiveCardAdded) {
          // Add the 'activeCard' class to the first card
          card.classList.add('activeCard');
          isActiveCardAdded = true;
        }
      }
    
      // Update the state variable only if the 'activeCard' class was added
      if (isActiveCardAdded) {
        setClassNames(classNames + ' activeCard');
      }
    }




  

    return (
        <div className='Card'>
        
        <div className={classNames} style={{backgroundColor:color}} onClick={updateClassNames}>
           

              <section className='card_pics'>
                <img src="src\assets\chip-light.svg" alt="chip" />
                <img src= {vendor} alt="" />
              </section>
              <p>{id}</p>
              <h2 className='card_number'>{number}</h2>

              <section className='card_name-valid' >
                <section className='card_name'>
                    <p>Cardholder</p>
                    <h5>{name}</h5>
                </section>
                
                <section className='card_valid'>
                  <p>Valid Throu</p>
                  <h5>{validTo}</h5>
                </section>
              </section>
             
        </div>
        </div>
    )

   
  }
  
  export default Card