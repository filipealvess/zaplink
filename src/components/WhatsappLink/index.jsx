import copy from 'copy-to-clipboard';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './styles.module.css';

export default function WhatsappLink({ link }) {
  const [containerClasses, setContainerClasses] = useState(styles.container);

  function copyToClipboard() {
    copy(link);
    setContainerClasses(`${styles.container} ${styles.active}`);
  }

  function handleContainerMouseLeave() {
    setTimeout(() => setContainerClasses(styles.container), 300);
  }

  return (
    <article
      className={containerClasses}
      onClick={copyToClipboard}
      onMouseLeave={handleContainerMouseLeave}
    >
      <p className={styles.link}>{link}</p>

      <button className={styles.copyButton} type="button">
        <Image
          src="/copy-icon.svg"
          alt="Botão de copiar link para Whatsapp"
          width={20}
          height={20}
        />
      </button>
    </article>
  );
}
