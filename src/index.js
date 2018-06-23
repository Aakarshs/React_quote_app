import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {

  render() {
    return (
      
      <div className="app">
        <div className="circle"> 
            <Header />  
          </div>
        <div className = "bg"></div>
         
      </div>
    );
  }
}

//===================================================================================================================
//===================================================================================================================

class Header extends React.Component{
  constructor(props){
      super(props)

      this.state={
          text:'Click on the generate button to generate inspiring quotes and share them.',
          color:'silver',
          
          quotes: [
          'Don’t let yesterday take up too much of today.',
          'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
          'It’s not whether you get knocked down, it’s whether you get up.',
          'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.',
          'People who are crazy enough to think they can change the world, are the ones who do.',
          'Failure will never overtake me if my determination to succeed is strong enough.',
          'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.',
          'We may encounter many defeats but we must not be defeated.',
          'Knowing is not enough; we must apply. Wishing is not enough; we must do.'], 
          
          author:'',
          author_arr:['-Will Rogers','-Unknown','-Vince Lombardi','-Steve Jobs','-Rob Siltanen','-Og Mandino','-Mohnish Pabrai','-Maya Angelou','-Johann Wolfgang Von Goethe'],

          colorsarr: ['blue','green','red','purple','cyan','black','silver','maroon','magenta']
      
      };
      this.random_quote = this.random_quote.bind(this);      
   
  }





  random_quote(){
   
    var rand= Math.floor(Math.random()*9);

      this.setState({ 
          text: this.state.quotes[rand], 
          author: this.state.author_arr[rand],
          color: this.state.colorsarr[Math.floor(Math.random() * 9)] 
      }); 
  }
  

  
  render(){
      
      var new_link = "https://twitter.com/intent/tweet?&related=freecodecamp&text="+this.state.text+" "+this.state.author;
      
      const pStyle = {
          background:this.state.color
        };
    
      return ( 
      <div>
          <button style = {pStyle} className= "button" type="text" onClick={this.random_quote}> Generate </button>
          <style>{document.body.style.backgroundColor = this.state.color} </style>
          <p> </p>

          <p className="quote">"{this.state.text}"</p>
          <div className="author">{this.state.author}</div>
         
          <a href={new_link}> <img  className="twitter" src={require('./twitter.png')} alt="twitter-icon" /> </a>
          <a href="https://www.tumblr.com/"> <img className="tumblr" src={require('./tumblr.png')} alt="tumblr-icon" href="https://www.google.com" /> </a>
       
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
