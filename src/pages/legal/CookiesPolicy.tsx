import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8 text-neutral-300">
        <h1 className="text-3xl font-bold text-white mb-8">
          Política de Cookies
        </h1>

        <section className="space-y-4">
          <p>
            Studio Pixelens informa acerca del uso de las cookies en su página
            web: https://studiopixelens.com
          </p>
          <h2 className="text-xl font-semibold text-white">
            ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son archivos que se pueden descargar en su equipo a
            través de las páginas web. Son herramientas que tienen un papel
            esencial para la prestación de numerosos servicios de la sociedad de
            la información. Entre otros, permiten a una página web almacenar y
            recuperar información sobre los hábitos de navegación de un usuario
            o de su equipo.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Tipos de cookies utilizadas en este sitio
          </h2>
          <p>
            Esta web utiliza principalmente <strong>cookies técnicas</strong> y
            estrictamente necesarias para el funcionamiento del sitio (como las
            de sesión para autenticación o preferencias de idioma).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies técnicas:</strong> Son aquellas que permiten al
              usuario la navegación a través de la página web y la utilización
              de las diferentes opciones o servicios que en ella existan.
            </li>
            <li>
              <strong>Cookies de análisis (Opcionales):</strong> Actualmente
              esta web no utiliza cookies de terceros invasivas como Google
              Analytics. En caso de implementarse en el futuro, se solicitará su
              consentimiento previo.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Aceptación de la Política de cookies
          </h2>
          <p>
            Al ser cookies estrictamente técnicas las que se cargan por defecto,
            la normativa permite su uso sin necesidad de bloqueo preventivo,
            aunque informamos de su existencia para garantizar la máxima
            transparencia.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiesPolicy;
