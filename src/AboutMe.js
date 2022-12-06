import React, { Component } from 'react'
import './AboutMe.css'

export default class AboutMe extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         textAboutMe: 'Click on photo',
         header: '',
         age: 16,
         country: 'Belarus',
         educational_institution: 'Belarusian State Academy of Communications'
      }

      this.aboutMe = this.aboutMe.bind(this);
      this.changeClassOver = this.changeClassOver.bind(this);
      // this.changeClassOut = this.changeClassOut.bind(this)
    }

    changeClassOver(){
      let links = document.querySelectorAll('#link');
      for(let item of links){
        item.classList.add('link')
      }
    }
    changeClassOut(){
      let links = document.querySelectorAll('#link');
      for(let item of links){
        item.classList.remove('link')
      }
    }

    aboutMe(){

        this.setState({
            textAboutMe: `Hello! My name is Kostya, I\'m begginer frontend developer. I\'m 16 years old. I was born in Belarus`,
            header: 'About me:'
            })
    }


  render() {
    return (
      <div className='ContentWithMe'>
        <img src='\Photo.png' onClick={this.aboutMe}/>

        <p> 
            <h4>{this.state.header}</h4> 
            <h5 className='grid'>{this.state.textAboutMe}</h5>
        </p>

        <div className='facts'>
            <h5>
                Age: {this.state.age} <br></br>
                Country: {this.state.country} <br></br>
                Educational Institution: <br></br>
                <a href='http://www.bsac.by/' 
                   target='_blank' 
                   onMouseOver={this.changeClassOver} 
                   onMouseOut={this.changeClassOut}>{this.state.educational_institution}</a>
                <hr></hr>
                  Phones number: +375 (33) 661-27-02 <br></br>
                  Email: <i>kirik.kostya@list.ru</i> <br></br>
                <a id='link' 
                href='https://www.instagram.com/kirik_10/' 
                target='_black' 
                onMouseOver={this.changeClassOver} 
                onMouseOut={this.changeClassOut} >Instagram</a>/ 
                <a id='link' 
                href='https://vk.com/id261504347' 
                target='_black'
                onMouseOver={this.changeClassOver} 
                onMouseOut={this.changeClassOut}>VKontacte</a>
            </h5>
        </div>
      </div>
    )
  }
}