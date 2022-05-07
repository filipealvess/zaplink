import React from 'react';
import RadioButton from '../RadioButton';
import styles from './styles.module.css';

export default function RadioGroup({
  options = [],
  title,
  name,
  onChange = () => {}
}) {
  return (
    <div>
      <p className={styles.title}>{title}:</p>

      <section className={styles.options}>
        {options.map(({ id, title, isActive }) => (
          <RadioButton
            key={id}
            label={title}
            checked={isActive}
            name={name}
            onChange={onChange}
          />
        ))}
      </section>
    </div>
  );
}
