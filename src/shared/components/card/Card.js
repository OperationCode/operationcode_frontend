import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import styles from './Card.css';

Card.propTypes = {
  cardHeaderClassName: PropTypes.string,
  cardContentClassName: PropTypes.string,
  cardFooterClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node
};

Card.defaultProps = {
  cardHeaderClassName: '',
  cardContentClassName: '',
  cardFooterClassName: '',
  className: '',
  headerContent: '',
  footerContent: ''
};

export default function Card({
  cardHeaderClassName,
  cardContentClassName,
  cardFooterClassName,
  children,
  className,
  headerContent,
  footerContent
}) {
  const header = headerContent ? (
    <CardHeader classNames={`${styles.header} ${cardHeaderClassName}`}>{headerContent}</CardHeader>
  ) : null;

  const content = () => (
    <section className={`${styles.footer} ${cardContentClassName}`}>{children}</section>
  );

  const footer = footerContent ? (
    <CardFooter classNames={`${styles.defaultCardFooter} ${cardFooterClassName}`}>
      {footerContent}
    </CardFooter>
  ) : null;

  if (header && footer) {
    return (
      <article className={`${styles.Card} ${className}`}>
        {header}
        {content}
        {footer}
      </article>
    );
  }

  return (
    <div className={`${styles.Card} ${className}`}>
      {header}
      {content}
      {footer}
    </div>
  );
}
