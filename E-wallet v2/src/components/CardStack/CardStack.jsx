import './CardStack.css';
import Card from "../Card/Card"

function CardStack(props) {
  const {newCardStack} = props
  const cardStack = JSON.parse(localStorage.cardStack);

    
    if (newCardStack !== cardStack.length){
    const cardItems = cardStack.map((card,index)=>{
      return <Card
      key={index} 
      number={ card.number } 
      name={ card.name }
      validTo={ card.validTo } 
      vendor={ card.vendor }
      />
    });


  

    return (
     
        
        <div className="CardStack">
            <h2>Cardstack</h2>
            {cardItems}
            

        </div>
    )
  }
}
  
  export default CardStack