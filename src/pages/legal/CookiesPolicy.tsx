import React from "react";

const CookiesPolicy = () => {
  return (
    <article className="prose-editorial mx-auto max-w-2xl py-16 px-6">
      <h1 className="text-h2 font-display mb-8">Política de cookies</h1>

      <section className="space-y-4 mb-8">
        <p>
          Studio Pixelens informa acerca del uso de las cookies en su página
          web: https://studiopixelens.com
        </p>
        <h3 className="text-h4 font-sans">¿Qué son las cookies?</h3>
        <p>
          Las cookies son archivos que se pueden descargar en su equipo a
          través de las páginas web. Son herramientas que tienen un papel
          esencial para la prestación de numerosos servicios de la sociedad de
          la información. Entre otros, permiten a una página web almacenar y
          recuperar información sobre los hábitos de navegación de un usuario
          o de su equipo.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">
          Tipos de cookies utilizadas en este sitio
        </h3>
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

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">
          Aceptación de la Política de cookies
        </h3>
        <p>
          Al ser cookies estrictamente técnicas las que se cargan por defecto,
          la normativa permite su uso sin necesidad de bloqueo preventivo,
          aunque informamos de su existencia para garantizar la máxima
          transparencia.
        </p>
      </section>
    </article>
  );
};

export default CookiesPolicy;
