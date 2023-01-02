import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function GuidePopup({ onClose = () => {} }) {
  const [containerClass, setContainerClass] = useState(`${styles.container} ${styles.hidden}`);
  
  useEffect(() => {
    setTimeout(() => setContainerClass(styles.container), 100);
  }, []);
  
  function handleClose() {
    setContainerClass(`${styles.container} ${styles.hidden}`);
    setTimeout(onClose, 300);
  }

  return (
    <div className={containerClass}>
      <section className={styles.content}>
        <header className={styles.header}>
          <p className={styles.title}>Como funciona?</p>
          <button className={styles.close} onClick={handleClose} type="button">
            <Image src="/close-icon.svg" alt="Ícone x" width={20} height={20} />
          </button>
        </header>

        <ol className={styles.list}>
          <li><span>1.</span> Insira o número do WhatsApp</li>
          <li><span>2.</span> Escreva a mensagem que será exibida</li>
          <li><span>3.</span> Selecione onde o link será compartilhado (aplicativo ou WhatsApp web)</li>
          <li><span>4.</span> Clique em &#34;GERAR LINK&#34;</li>
          <li><span>5.</span> Copie o link e compartilhe</li>
        </ol>
      </section>
    </div>
  );
}
