import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import HelpButton from '../components/HelpButton';
import Input from '../components/Input';
import Introduction from '../components/Introduction';
import PrimaryButton from '../components/PrimaryButton';
import RadioGroup from '../components/RadioGroup';
import targets from '../static/targets';
import { applyPhoneMask, phoneIsCompleted } from '../controllers/phoneController';
import axios from 'axios';
import WhatsappLink from '../components/WhatsappLink';
import GuidePopup from '../components/GuidePopup';

export default function Index() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [linkSectionIsVisible, setLinkSectionIsVisible] = useState(false);
  const [guidePopupIsVisible, setGuidePopupIsVisible] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState(() => {
    return targets.filter(({ isActive }) => isActive)[0].title;
  });

  useEffect(() => {
    const phoneOrMessageAreEmpty = phone === '' || message === '';
    const phoneIsNotCompleted = !phoneIsCompleted(phone);

    setButtonIsDisabled(phoneOrMessageAreEmpty || phoneIsNotCompleted);
  }, [phone, message]);

  const handlePhoneChange = ({ target: { value } }) => setPhone(applyPhoneMask(value));

  const handleMessageChange = ({ target: { value } }) => setMessage(value);

  const handleTargetChange = ({ target: { value } }) => setSelectedTarget(value);
  
  const handleGuidePopupClose = () => setGuidePopupIsVisible(false);
  
  const handleHelpButtonClick = () => setGuidePopupIsVisible(true);

  async function handleFormSubmit(event) {
    event.preventDefault();

    const response = await axios.get('/api/link', {
      params: { phone, message, target: selectedTarget }
    });

    setWhatsappLink(response.data.link);
    setLinkSectionIsVisible(true);
    setPhone('');
    setMessage('');
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crie links e divulgue pelo aplicativo ou versão web do WhatsApp" />
        <meta name="keywords" content="Whatsapp, links, divulgação, alcance" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>ZapLink - Gerador de link para WhatsApp</title>
      </Head>

      <Introduction />

      <Form onSubmit={handleFormSubmit}>
        <Input
          label="Número do celular"
          placeholder="(DDD) 00000-0000"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          description="Digite apenas números [ ex.: (82) 98188-8888 ]"
        />

        <Input
          label="Mensagem"
          placeholder="Escreva o texto..."
          value={message}
          onChange={handleMessageChange}
          description="Digite uma ou duas boas frases ;)"
        />

        <RadioGroup
          title="Destino do link"
          options={targets}
          name="target"
          onChange={handleTargetChange}
        />

        {linkSectionIsVisible && <WhatsappLink link={whatsappLink} />}

        <PrimaryButton text="Gerar Link" disabled={buttonIsDisabled} />
      </Form>

      <HelpButton onClick={handleHelpButtonClick} />

      {guidePopupIsVisible && <GuidePopup onClose={handleGuidePopupClose} />}
    </>
  );
}
