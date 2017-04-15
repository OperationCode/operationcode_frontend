import React, { Component } from 'react';
import quotes from './quotes.json';
import FontAwesome from 'react-fontawesome';
import styles from './jumboQuote-styles';

class JumboQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {}
    }
  }

  componentDidMount() {
    // TODO: Pull this from an API with fetch
    const quote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
    this.setState({ quote });
  }

  render() {
    return (
      <div style={styles.quotes} >
        <h4 style={styles.quoteBody}>
          <FontAwesome name="quote-left" style={styles.quoteIcon}  />
            {this.state.quote.body}
          <FontAwesome name="quote-right" style={styles.quoteIcon} /></h4>
        <h5 style={styles.quoteAuthor} >{this.state.quote.author}</h5>
      </div>
    );
  }
}

export default JumboQuote;