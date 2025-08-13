import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5217225390427"
      accountName="Carlosr.dev"
      chatMessage="¡Hola! 👋 Escríbeme, hablemos de tu proyecto 🚀"
      placeholder="Escribe tu mensaje..."
      avatar="/whatsapp_logo.jpg"
      statusMessage="En línea"
      notification
      notificationSound
    />
  );
}
