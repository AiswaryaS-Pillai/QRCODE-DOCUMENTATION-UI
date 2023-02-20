import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Message, Icon, } from 'semantic-ui-react'
// import logo from './Google-QR.png'
// var XMLParser = require('react-xml-parser');


function App() {

    const [userInput, setUserInput] = useState("");
    const [image, setImage] = useState("");
    const [hashValue, setHashValue] = useState("");

   // let hash="";

    const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
      console.log(userInput)
    }



    const handleSubmit = (e) => {
     
     
      e.preventDefault();
     
      console.log(userInput);


      async function fetchBarcode(){

        //get hash value
        let hash = await axios.get("https://jcwy0hn4n2.execute-api.us-east-1.amazonaws.com/dev/hash?a=" + userInput);
        //console.log(hash.data);

        hash =  hash.data.replace(/<[^>]*>/g, '');
        console.log(hash);
    
        setHashValue("https://jcwy0hn4n2.execute-api.us-east-1.amazonaws.com/dev/hash?a=" + userInput);

        setImage("https://jcwy0hn4n2.execute-api.us-east-1.amazonaws.com/dev/qr?a="+ hash);

       // console.log(hashValue);

      //remove the tags from response
       

        // setHashValue(hash);

      }

      async function fetchQrCode(){

        //get hash value
        // let qr = await axios.get("https://0thtkwdzuh.execute-api.us-east-1.amazonaws.com/dev/hash?a="+hashValue);
        // setImage(qr);

      }
    
      fetchBarcode();
      // fetchQrCode();
      
    }
 

  return (

    


    <div className="App">

      
    <form onSubmit={handleSubmit}>


    <fieldset>
      <legend> <h2> <Message.Header><Icon name='edit' size='large' />Try It!</Message.Header> </h2> </legend>

    {/* <Message color='black'> */}
     {/* <Message.Header><Icon name='idea' size='large' />Try It!</Message.Header> <br/> */}
    

     {/* <div class="ui raised segment"> */}
                    
                    <span style={{paddingRight:'10px', paddingTop:'20px'}}> <br/><br/>  <input value={userInput} style={{width:'600px', padding:'10px'}} type="text" onChange={handleChange} placeholder="Enter URL"/> </span>

                    <span style={{paddingRight:'10px', paddingTop:'20px'}}>  <button style={{padding:'10px'}}>Generate QR Code</button><br/><br/> </span>

                  {/* </div> */}
     

      <div class="ui raised segment" style={{backgroundColor:'#48c1b9'}}>
        <h3 style={{color:'white'}}>Step 1: Hash Value</h3>
      </div>

        <iframe width="90%" height="40px" title="output" style = {{border: 0, whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}  src={hashValue}/> <br/>


        <div class="ui raised segment" style={{backgroundColor:'#48c1b9'}}>
        <h3 style={{color:'white'}}>Step 2: QR Code</h3>
      </div>

        <iframe width="250px" height="250px" style = {{border: 0, overflowWrap: 'break-word'}} title="output" src={image}/>
    
 
        {/* </Message> */}
        </fieldset>

        
    </form>
    </div>
  );


}
//App() closed

export default App;
