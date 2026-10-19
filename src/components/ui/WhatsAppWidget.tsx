import { siteConfig } from "@/config/site";

export function WhatsAppWidget() {
  const phoneNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent("Hello AakashHydroTech! I'm interested in your products.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.706.442 3.313 1.221 4.706l-1.393 5.094 5.215-1.368A9.704 9.704 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75zm4.846 13.336c-.206.582-1.196 1.096-1.708 1.157-.456.054-.997.108-3.05-.745-2.47-1.026-4.04-3.554-4.164-3.718-.124-.165-.992-1.319-.992-2.518 0-1.198.62-1.787.847-2.035.227-.247.495-.31.66-.31.166 0 .332.003.477.01.156.008.367-.061.573.435.217.522.701 1.713.763 1.837.062.124.103.268.02.433-.082.165-.124.268-.247.412-.124.145-.258.32-.371.433-.124.124-.258.258-.113.506.144.247.64 1.056 1.371 1.705.942.835 1.737 1.097 1.984 1.22.247.124.391.103.536-.062.144-.165.62-.722.784-.97.165-.247.33-.206.557-.124.227.082 1.444.68 1.692.804.247.124.412.185.474.288.062.103.062.6-.144 1.182z" clipRule="evenodd" />
      </svg>
    </a>
  );
}
