import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/fontawesome-free-solid';
import quotes from './quotes.json';
import styles from './jumboQuote.css';

class JumboQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {}
    };
  }

  componentDidMount() {
    if (quotes.quotes.length > 0) {
      const randomQuoteID = Math.floor(Math.random() * quotes.quotes.length);

      this.setState({
        quote: quotes.quotes[randomQuoteID]
      });
    }
  }

  render() {
    return (
      <div className={styles.quotes}>
        <h4 className={styles.quoteBody}>
          <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
          {this.state.quote.body}
          <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIcon} />
        </h4>
        <h5 className={styles.quoteAuthor}>{this.state.quote.author} </h5>
      </div>
    );
  }
}

export default JumboQuote;
