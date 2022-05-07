import { clearPhoneMask } from "../../controllers/phoneController";
import targets from "../../static/targets";

export default function handler({ query }, res) {
  try {
    const { phone, message, target } = query;

    if (phone && message && target) {
      const subdomain = targets.filter(({ title }) => title === target)[0].subdomain;
      const phoneNumber = clearPhoneMask(phone);
      const link = `https://${subdomain}.whatsapp.com/send?phone=55${phoneNumber}&text=${message}`;

      res.status(200).json({ error: false, link });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(400).json({ error: true });
  }
}
