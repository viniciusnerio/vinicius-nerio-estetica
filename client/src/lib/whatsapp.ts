/**
 * WhatsApp Integration Utility
 * Generates WhatsApp links with pre-filled messages
 */

const WHATSAPP_NUMBER = '5535999325695'; // +55 35 99932-5695
const DEFAULT_MESSAGE = 'Olá, gostaria de agendar uma avaliação.';

export function getWhatsAppLink(message: string = DEFAULT_MESSAGE): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string = DEFAULT_MESSAGE): void {
  const link = getWhatsAppLink(message);
  window.open(link, '_blank');
}
