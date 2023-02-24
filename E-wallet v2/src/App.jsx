import { Route,Routes } from 'react-router-dom';

import Home from './views/Home';
import AddCard from './views/AddCard';
import Error from './views/Error';

import './App.css'



function App() {

  const betaCards = [
    {
      id: 'card-1',
      number: '0000 0000 0000 0000',
      name: 'Firstname Lastname',
      validTo: '00/00',
      vendor: ' Blockchain',
      ccv: 111,
     
    },

    {
      id: 'card-2',
      number: 'XXXX XXXX XXXX XXXX',
      name: 'Firstname Lastname',
      validTo: '00/00',
      vendor: ' Evil',
      ccv: 222,
     
    },

    {
      id: 'card-3',
      number: 'XXXX XXXX XXXX XXXX',
      name: 'Firstname Lastname',
      validTo: '00/00',
      vendor: ' Evil',
      ccv: 333,
     
    },

  ];
  localStorage.setItem('cardStack',JSON.stringify(betaCards))

  

 
 

  return (

    
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path="/addcard" element={ <AddCard/> } />
        <Route path="/*" element={ <Error/> } />
      </Routes>
    </div>
  )
}

export default App
