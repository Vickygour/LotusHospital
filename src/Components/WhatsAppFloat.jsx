import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const message = encodeURIComponent(
    "Hello Lotus Hospital 👋 I would like to get more information about your services and appointments."
  );

  return (
    <a
      href={`https://wa.me/919210399470?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "30px",
        left: "30px",
        backgroundColor: "#25D366",
        color: "#fff",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        zIndex: 9999,
        cursor: "pointer",
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;
