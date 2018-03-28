import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './index.css';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pageValue: 'Home'};
  }

  render() {
    let visiblePage = null;
    switch(this.state.pageValue) {
      case 'Home':
        visiblePage = <LandingPage />;
        break;
      default:
        visiblePage = null;
    }
    return (
      <div className='container'>
        <Header />
        {visiblePage}
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <img src={logo} className='modemo-logo' alt='logo' />
        <h2 className='modemo-title'>modemo</h2>
      </div>
    );
  }
}

class LandingPage extends React.Component {
  render() {
    return (
      <div className='pageContent'>
        <h2 className='title'>Analyze a URL</h2>
        <UrlInput />
        <p>
          modemo can analyze the political bias of any news article for you.
          Just input the article url of your choice and let Modemo show you the results.
        </p>
      </div>);
  }
}

class UrlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    alert('A url was submitted: ' + this.state.url);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='url-input-row'>
        <label>
          <input type='text' value={this.state.url} onChange={this.handleChange} placeholder='Input a URL'/>
        </label>
        <input type='submit' value='Submit' className='submit-button' />
      </form>
    );
  }
}

ReactDOM.render(
  (<Root />),
  document.getElementById('root')
);