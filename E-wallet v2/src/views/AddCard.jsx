
import Top from "../components/Top/Top"
import CardForm from "../components/CardForm/CardForm"
import './AddCard.css'
function AddCard() {
  
        
    return (
        
        
        <div className="addCard">
        <Top title="Add a new bank card" undertitle="New card" />
           
           

        <CardForm/>

        </div>
    )
  }
  
  export default AddCard