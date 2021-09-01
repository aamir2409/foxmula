import React,{useEffect,useState} from 'react'
import "./Homepage.css";
import $ from 'jquery';
import AOS from 'aos';

function Homepage() {
    const[show,setshow]=useState(false)
    const[show2,setshow2]=useState(false)
    const[show3,setshow3]=useState(false)
    useEffect(()=>{
        $(document).on('scroll',function(){
            $('h1').css("top", Math.max(100 - 0.45*window.scrollY) + "px");
        })
        // $(document).on('scroll',function(){
        //     $('image').css("top", Math.max(0 - 1.15*window.scrollY) + "px");
        // })
    },[])

    console.log(show)
    return (
        <div className="home">
            <div>
            <h1 className="letter" data-aos="fade-down" data-aos-duration="3000">Text</h1>
            <img className="image" src="https://t3.ftcdn.net/jpg/03/18/35/02/360_F_318350288_wM00J6BUaEMgaheLWPNEiFfT9tP9mYAZ.jpg" alt="pic" />
            
            </div>
            
            
            
            
            <div className="bottom">
                
            </div>  

            <div className="whole_bottom">
                <div className="whole">
                <div className="dropdown">
                    <span className="selected">WEEK 1</span>
                    <i className={`angle ${show? "down": "right"} icon`} id="arrow" onClick={()=> setshow(!show)}></i>
                </div>
                {show? 
                <ul className="list">
                  <li>list Item</li>
                  <li>list Item</li>
                </ul> : null
                }
                <div className="dropdown">
                    <span className="selected">WEEK 2</span>
                    <i className={`angle ${show2? "down": "right"} icon`} id="arrow" onClick={()=> setshow2(!show2)}></i>
                </div>
                {show2? 
                <ul className="list">
                  <li>list Item</li>
                  <li>list Item</li>
                  <li>list Item</li>
                  <li>list Item</li>
                  <li>list Item</li>
                </ul> : null
                }

                <div className="dropdown">
                    <span className="selected">WEEK 2</span>
                    <i className={`angle ${show3? "down": "right"} icon`} id="arrow" onClick={()=> setshow3(!show3)}></i>
                </div>
                {show3? 
                <ul className="list">
                  <li>list Item</li>
                  <li>list Item</li>
                  <li>list Item</li>
                  <li>list Item</li>
                  <li>list Item</li>
                </ul> : null
                }
            </div>
            </div>
            
        </div>
    )
}

export default Homepage
