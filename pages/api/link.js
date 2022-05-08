import { clearPhoneMask } from '../../controllers/phoneController';
import targets from '../../static/targets';

export default function handler({ query }, res) {
  try {
    const { phone, message, target } = query;

    if (!phone || !message || !target) {
      throw new Error('Os parâmetros `phone`, `message` e `target` são obrigatórios');
    }

    const foundTarget = targets.filter(({ short }) => short === target)[0];

    if (!foundTarget) throw new Error('O parâmetro `target` é inválido');

    const subdomain = foundTarget.subdomain;
    const phoneNumber = clearPhoneMask(phone);
    const link = `https://${subdomain}.whatsapp.com/send?phone=55${phoneNumber}&text=${message}`;

    res.status(200).json({ link });
  } catch ({ message }) {
    res.status(400).json({ error: message });
  }
}
