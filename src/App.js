import React, { Component } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Footer from './components/Footer'
import ResultList from './components/ResultList'
import { getShortenedURL } from './Api'
import recordIcon from './images/icon-detailed-records.svg'
import brandRecog from './images/icon-brand-recognition.svg'
import fullyCustom from './images/icon-fully-customizable.svg'
import heroIllustration from './images/illustration-working.svg'
import './styles/App.scss';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
       showNav: false,
       inputValue:"",
       errorMessage:"",
       formFieldValid: true,
       formValid: true,
       shortenedURLs: []
    }

    this.togggleMenu = this.togggleMenu.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
  }

  togggleMenu = () => {
    this.state.showNav ? this.setState({showNav: false}) : this.setState({showNav: true});
  }

  handleInputFieldChange = (event) => {
    const value = event.target.value
    this.setState({
      inputValue: event.target.value
    }, () => {this.validateField(value)})
  }

  validateField = (fieldValue) => {
    const urlRegEx = /((http|https|ftp):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%;:#-~+&amp/]*[\w@?^=%&amp;/~+#-])?/g;

    if(!fieldValue || fieldValue === " "){
      this.setState({
        errorMessage: "Field cannot be blank. Please enter a URL.",
        formFieldValid: false
      })
    }
    else if(!urlRegEx.test(fieldValue)){
      this.setState({
        errorMessage: "Please enter a valid URL",
        formFieldValid: false
      })
    }
    else{
      this.setState({
        errorMessage: "",
        formFieldValid: true
      })
    }
  }

  validateForm =  () => {
    this.setState({
      formValid: this.state.formFieldValid
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    getShortenedURL(this.state.inputValue).then(response => {
      this.setState(prevState => ({
        shortenedURLs: [...prevState.shortenedURLs, response.data.result]
      }))
      localStorage.setItem('pastQueries', JSON.stringify(this.state.shortenedURLs));
      console.log(response.data);
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    try{
      const stateQueries = JSON.parse(localStorage.getItem('pastQueries'));
      if(stateQueries){
        this.setState({
          shortenedURLs: stateQueries
        })
      }
    }
    catch(e){
      console.error(e)
    }
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
          <Form value={this.state.inputValue} onSubmit={this.handleFormSubmit} onChange={this.handleInputFieldChange} errorMessage={this.state.errorMessage} formFieldValid={this.state.formFieldValid} />
          <ResultList results={this.state.shortenedURLs}/>
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
