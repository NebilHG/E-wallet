import './CardForm.css';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CardForm(){
    const navigate = useNavigate();

   
    const[number, setNumber] = useState('');
    const [name, setName] = useState("");
    const [validTo, setValid] = useState("");
    const [ccv, setCcv] = useState("");
    const [vendor, setVendor] = useState("");





    function getNumber (event){
        setNumber(event.target.value);
    }

    function getName(event) {
        setName(event.target.value);
    }

    function getValid(event) {
        setValid(event.target.value);
    }

    function getCcv(event) {
        setCcv(event.target.value);
    }

    function getVendor(event) {
        setVendor(event.target.value);
    }







    function submitForm(){

        if (number.length === 19 && validTo.length === 5 && ccv.length === 3){
        goToHomePage()
        addCardToStack()
        console.log( 'Nytt kort: ',number, name, validTo, ccv, vendor );
    }
    else { alert('Card details not correct')}

    }


    function addCardToStack(){
        let newCardToStack = getCardStack();
        newCardToStack.push({
           
            number: number, 
            name: name,
            validTo: validTo,
            vendor: vendor,
            ccv: ccv 
        });
        localStorage.setItem('cardStack',JSON.stringify(newCardToStack));
    }

    function goToHomePage(){
        navigate ('/');
    }

    function getCardStack(){
        const cardStack = JSON.parse(localStorage.cardStack);
        localStorage.clear();
        return cardStack;
    }








    return(
        <div className='CardForm'>
        

        <form className="form">

            <section className='cardForm_name-nr'>
                <label>Cardnumber</label>
                <input type="text" className="input_name-nr" placeholder="1111 1111 1111 1111" value={number} onChange={getNumber}/>

                <label> Cardholders name</label>
                <input type="text" className='input_name-nr' placeholder='Firstname Lastname' value={name} onChange={getName}/>
            </section>


            <section className='cardForm_valid-CCV'>
                <article className='valid'>
                <label>Valid Thru</label>
                <input type="text" className='input_valid-ccv' placeholder='01/01' value={validTo} onChange={getValid} />
                </article>
                
                <article className='ccv'>
                <label>CCV</label>
                <input type="text" className='input_valid-ccv' placeholder='123' value={ccv} onChange={getCcv} />
                </article>
            </section>



            <section className='cardForm_vendor'>
                <label>Vendor</label>
                <select className='input_vendor' value={vendor} onChange={getVendor}>
                    <option value="">Select vendor</option>
                    <option value="Bitcoin">Bitcoin INC</option>
                    <option value="Evil">Evil Corp</option>
                    <option value="Blockchain">Block chain INC</option>
                    <option value="Ninja">Ninja Bank</option>
                </select>
            </section>

           

        </form>
        <button className='CardForm_btn' onClick={submitForm}>Add Card</button>
        </div>
    );
}

export default CardForm

