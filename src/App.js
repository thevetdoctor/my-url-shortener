import React, { Component } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Footer from './components/Footer'
import recordIcon from './images/icon-detailed-records.svg'
import brandRecog from './images/icon-brand-recognition.svg'
import fullyCustom from './images/icon-fully-customizable.svg'
import heroIllustration from './images/illustration-working.svg'
import './styles/App.scss';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       showNav: false
    }
  }
  
  togggleMenu = () => {
    this.state.showNav ? this.setState({showNav: false}) : this.setState({showNav: true});
  }

  render() {
    return (
      <div>
        <Nav showNav={this.state.showNav} togggleMenu={this.togggleMenu}/>
        
        <section id="hero">
          <div id="hero-text">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights 
              on how your links are performing.
            </p>
            <button className ="btn">Get Started</button>
          </div>
          <div id="image">
            <img src={heroIllustration} alt="Illustration of someone working"/>
          </div>
        </section>
        
        <section id="stats">
          <Form />
          <div id="results" class="container">
          </div>
          <div className="container">
            <div id="intro-text">
              <h2>Advanced Statistics</h2>
              <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div className="card-deck">
              <div className="card">
                <div className="feature-icon">
                  <img src={brandRecog} alt="brand recognition icon"/>
                </div>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Genetic links don't mean a thing. Branded links help instill confidence in your content.</p>
              </div>
              
              <div className="card">
                <div className="feature-icon">
                  <img src={recordIcon} alt="records icon"/>
                </div>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
              </div>
              
              <div className="card">
                <div className="feature-icon">
                  <img src={fullyCustom} alt="customizable icon"/>
                </div>
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="cta">
          <div className="container mx-auto">
            <h2>Boost your links today</h2>
            <button className="btn hover:bg-opacity-50 self-center tracking-widest">Get Started</button>
          </div>
        </section>
        
        <Footer />
      </div>
    )
  }
}
