import Head from 'next/head';
import React, { useState } from 'react';
import Form from '../components/Form';
import HelpButton from '../components/HelpButton';
import Input from '../components/Input';
import Introduction from '../components/Introduction';
import PrimaryButton from '../components/PrimaryButton';
import RadioGroup from '../components/RadioGroup';
import targets from '../static/targets';
import { applyPhoneMask } from '../controllers/phoneController';

export default function Index() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  function handlePhoneChange({ target }) {
    const formatedPhone = applyPhoneMask(target.value);
    setPhone(formatedPhone);
  }

  function handleMessageChange({ target }) {
    setMessage(target.value);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crie links e divulgue pelo aplicativo ou versão web do Whatsapp" />
        <meta name="keywords" content="Whatsapp, links, divulgação, alcance" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>ZapLink - Gerador de link para Whatsapp</title>
      </Head>

      <Introduction />

      <Form>
        <Input
          label="Número do celular"
          placeholder="(DDD) 0000-0000"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
        />

        <Input
          label="Mensagem"
          placeholder="Escreva o texto..."
          value={message}
          onChange={handleMessageChange}
        />

        <RadioGroup title="Destino do link" options={targets} />

        <PrimaryButton text="Gerar Link" disabled={buttonIsDisabled} />
      </Form>

      <HelpButton />
    </>
  );
}
