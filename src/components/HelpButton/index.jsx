import React from 'react';
import styles from './styles.module.css';

export default function HelpButton({ onClick = () => {} }) {
  return (
    <button type="button" className={styles.container} onClick={onClick}>
      ?
    </button>
  );
}
