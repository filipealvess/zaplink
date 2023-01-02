import React from 'react';
import styles from './styles.module.css';

export default function Input({
  type = 'text',
  placeholder,
  label,
  value = '',
  description,
  onChange = () => {}
}) {
  return (
    <label className={styles.container}>
      <span>{label}:</span>

      {description && <p className={styles.description}>{description}</p>}

      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
