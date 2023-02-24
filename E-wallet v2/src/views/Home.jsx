import './Home.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import CardStack from '../components/CardStack/CardStack';
import Top from '../components/Top/Top';


function Home(){
    const navigate = useNavigate();
    const[newCardStack ]= useState('');


    function navAddCard(){
        navigate('./addcard')
    }

    

   

    



return(
    <div className='Home'>
        <Top title="E-Wallet" undertitle="Active card" />

        <div className='cardStack'>
        <CardStack cardstack = {newCardStack}/>
        </div>
        


        <section className="home_button">
        <button onClick={ navAddCard } className="btn" >Add a new card</button>
        
      </section>
    </div>
);
}

export default Home;