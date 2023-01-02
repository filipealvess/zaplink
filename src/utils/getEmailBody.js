let generatedLinks = 0;

export default function getEmailBody() {
  generatedLinks += 1;

  return `
    Uma pessoa gerou um <i>link</i> para WhatsApp no <b>ZapLink</b>.
  
    <br /> <br />
    
    Com este, já são <strong>${generatedLinks}</strong> links gerados, parabéns!
  
    <br /> <br />

    Ah, caso não lembre, foi você mesmo quem criou essa notificação por e-mail :D
  `;
};
