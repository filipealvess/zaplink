import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../src/components/Form';
import HelpButton from '../src/components/HelpButton';
import Input from '../src/components/Input';
import Introduction from '../src/components/Introduction';
import PrimaryButton from '../src/components/PrimaryButton';
import RadioGroup from '../src/components/RadioGroup';
import targets from '../src/static/targets';
import { applyPhoneMask, phoneIsCompleted } from '../src/controllers/phoneController';
import WhatsappLink from '../src/components/WhatsappLink';
import GuidePopup from '../src/components/GuidePopup';
import countLinks from '../src/database/countLinks';

export default function Index({ links }) {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [linkSectionIsVisible, setLinkSectionIsVisible] = useState(false);
  const [guidePopupIsVisible, setGuidePopupIsVisible] = useState(false);
  const [generatedLinks, setGeneratedLinks] = useState(links);
  const [selectedTarget, setSelectedTarget] = useState(() => (
    targets.find(({ isActive }) => isActive).short
  ));
  const [buttonText, setButtonText] = useState('Gerar Link');

  useEffect(() => {
    setButtonIsDisabled(phone === '' || !phoneIsCompleted(phone));
  }, [phone]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    setButtonText('...');
    setButtonIsDisabled(true);

    const { data } = await axios.get('/api/link', {
      params: { phone, message, target: selectedTarget }
    });

    setButtonText('Gerar link');
    setWhatsappLink(data.link);
    setLinkSectionIsVisible(true);
    setPhone('');
    setMessage('');
    setGeneratedLinks(prevState => prevState + 1);
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

      <Introduction links={generatedLinks} />

      <Form onSubmit={handleFormSubmit}>
        <Input
          label="Número do celular"
          placeholder="(DDD) 00000-0000"
          type="tel"
          value={phone}
          onChange={({ target }) => setPhone(applyPhoneMask(target.value))}
          description="Digite apenas números [ ex.: (82) 98188-8888 ]"
        />

        <Input
          label="Mensagem"
          placeholder="Escreva o texto..."
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          description="Digite uma ou duas boas frases ;)"
        />

        <RadioGroup
          title="Destino do link"
          options={targets}
          name="target"
          onChange={({ target }) => setSelectedTarget(target.value)}
        />

        {linkSectionIsVisible && <WhatsappLink link={whatsappLink} />}

        <PrimaryButton text={buttonText} disabled={buttonIsDisabled} />
      </Form>

      <HelpButton onClick={() => setGuidePopupIsVisible(true)} />

      {guidePopupIsVisible && (
        <GuidePopup onClose={() => setGuidePopupIsVisible(false)} />
      )}
    </>
  );
}

export async function getServerSideProps() {
  const links = await countLinks();

  return { props: { links } };
}
