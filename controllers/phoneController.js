export function applyPhoneMask(phone) {
  return phone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{5})(\d{1,4})/, '$1-$2')
    .replace(/(\-\d{4})\d+?$/, '$1');
}

export function clearPhoneMask(phone) {
  return phone.replace(/\D/g, '');
}

export function phoneIsCompleted(phone) {
  return phone.length === 15;
}
