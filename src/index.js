import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Header, Label} from "semantic-ui-react";
import { Message, Icon,Image,Card,Reveal} from 'semantic-ui-react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logoimage from './Qrcode.png';
import arrowimage from './arrow.png';
import logo from './Google-QR.png';



const Intro = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3" color='teal'>DYNAMIC QR-CODE GENERATION </Header>
    

    <Message color='teal'>
    <Message.Header><Icon name='idea' size='large' />QR-Code API ENDPOINT</Message.Header>
    <div class="ui segment">
      <div class="ui black message">QR-Code is a type of matrix barcode, it uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently.<br />
        <p></p>
        QR Code is a add-on feature into our Newsletter. The need for this feature is for those clients who face internet separation concerns where they are unable to open the links within our automated newsletters.<br />


        <div class="ui white message">

          <div class="ui teal segment">
            <p>

              <h3 class="ui header">QR-CODE API ENDPOINT  <br /></h3>
              <br />
              <a class="ui teal image label">
                <i class="hand point right icon"></i>https://0thtkwdzuh.execute-api.us-east-1.amazonaws.com/dev
              </a>
              <p></p>
              <br/>
              <h3 class="ui header"><i class="lock icon"></i>Securing QR-Code API Endpoint</h3><br/>

              Encrypting and Decrypting the API endpoint.

              <p></p>
              <div class="ui two column grid">
                <div class="column">
                  <div class="ui raised segment">
                    <a class="ui teal ribbon label">Step 1</a>
                    <p></p>
                    <span button class="ui teal basic button" data-tooltip="Generate hash value of the input URL in XML file structure" data-position="bottom left" >
                    https://0thtkwdzuh.execute-api.us-east-1.amazonaws.com/dev/hash?a=
                    </span>

                  </div>
                </div>
                <div class="column">
                  <div class="ui segment">
                    <a class="ui teal right ribbon label">Step 2</a>
                    <p></p>
                    <span button class="ui teal basic button" data-tooltip="Pass the generated hash value to the query string parameter to get the QR-CODE of the input URL" data-position="bottom left">
                    https://0thtkwdzuh.execute-api.us-east-1.amazonaws.com/dev/qr?a=
                    </span>
                  </div>
                </div>
              </div>



              <Message
    header='Overview'
    list={[
      'The QR-Code API Endpoint will be used in the Newsletter XSLT Code and in the code, we can specify the height and width of the QR-Code image.',
      'A QR-Code will be generated based on each article URL in the newsletter. Any parameters other than the valid URL will restrict the generation of the QR code.',
    ]}
  />
  <Header as='h2' color='teal' textAlign='left'>
  <Icon link name='file code' /> How to use the API endpoint on Newsletter
      </Header>
      
 
  




  <Message color='black'  >  <Image src={logoimage} size='800px' />  </Message>
  <Label as='a' color='teal' tag>
      OUTPUT
    </Label>
  <Card>
    <Image src={logo} wrapped ui={false} />
  </Card>




            </p>
            <br />
            
          </div>
 
         
        </div>
      </div>
      
    </div>




  </Message>


    {children}
  </Container>

  
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Intro>
    <App />
  </Intro>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
