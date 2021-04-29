import React from 'react';
import Portfolio from "./Portfolio";
import Card from "./Card";
import Social from "./Social";


function Welcome() {

  const [btnClass, addClass] = React.useState("");
  const [bgSection, setBg] = React.useState(<div></div>);
  const [socialIcons, setSocialIcons] = React.useState(<Social annimation="" />);
  const [cardState, setCardState] = React.useState(true);

  function open() {

    setCardState(false);

      if(btnClass.includes("open")){
        console.log("_______________________");
      }else{
        addClass("open");
        setSocialIcons(<Social annimation="exit"/>);
        setTimeout(setSocialIcons, 2000);
        setBg(<Portfolio/>);
      }
    
  }


  function logoCard(){

    if(cardState === true){
      return (
        <div className="cardDiv">
                <div className="container">
                  <Card 
                    onClick={()=>{open()}}
                  />
                </div>
        </div>
      )
    }
  }

    return (
        <div>
            <header className={`${btnClass}`}>
              <div className="triangle left">
              <h4 className="wordCarousel">    
                 
                  <div> 
                      <ul className="flip4"> 
                          <li className="textAnimate">வணக்கம்</li>  
                          <li className="textAnimate">नमस्कार</li> 
                          <li className="textAnimate">नमस्ते</li>
                          <li className="textAnimate">Hello</li>
                      </ul>
                  </div>  

                  <span className="textAnimate">This is Abhijeet</span>  
                </h4>
              </div>
              <div className="triangle right">
                <h4 className="wordCarousel">    
                  
                  <div> 
                      <ul className="flip4"> 
                          <li className="textAnimate">வணக்கம்</li>  
                          <li className="textAnimate">नमस्कार</li> 
                          <li className="textAnimate">नमस्ते</li>
                          <li className="textAnimate">Hello</li>
                      </ul>
                  </div>  

                  <span className="textAnimate">This is Abhijeet</span>  
                </h4>
              </div>

              {logoCard()}

              {socialIcons}

            </header>
            

            

    <nav>
      {/* <ul>
        <li>Section 1</li>
        <li>Section 3</li>
        <li>Section 2</li>
      </ul> */}
    </nav>

    <content>
      {bgSection}
    </content>
        
        
        
      </div>

    )
}

export default Welcome;

/*
 <Background 
          bg = {bgSectionClass}
        />
 */