import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "306948041931";
const MESSAGE = "Hello Isla Vida, I would like to request a booking.";

/**
 * A green WhatsApp button fixed in the lower corner of every page, so a guest
 * can reach us straight away without opening a form. It stays in place while
 * the page scrolls.
 */
export function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Request a booking on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Request booking</span>
    </a>
  );
}
