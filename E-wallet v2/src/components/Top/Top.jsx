import './Top.css'

function Top(props) {
    const {title,undertitle}= props;
  

    return (
        
        
        <div className="Top">
         
            <h1 className=" Top_header">{title}</h1>
            <h4 className="Top_subtitle">{undertitle}</h4>
            

        </div>
    )
  }
  
  export default Top