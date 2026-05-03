import React from "react";

const PrivacyPolicy = () => {
  return (
    <article className="prose-editorial mx-auto max-w-2xl py-16 px-6">
      <h1 className="text-h2 font-display mb-8">Política de privacidad</h1>

      <p className="text-sm text-muted-foreground italic mb-8">
        Última actualización: Noviembre 2025
      </p>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">1. Información al Usuario</h3>
        <p>
          Miguel Louwagie Sapena (en adelante,{" "}
          <strong>"EL RESPONSABLE"</strong>), es el Responsable del
          tratamiento de los datos personales del Usuario y le informa que
          estos datos serán tratados de conformidad con lo dispuesto en el
          Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la
          protección de las personas físicas y la Ley Orgánica 3/2018, de 5 de
          diciembre (LOPDGDD).
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">2. Finalidad del Tratamiento</h3>
        <p>¿Para qué tratamos tus datos personales?</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Para remitir comunicaciones comerciales de promociones (si has
            dado tu consentimiento).
          </li>
          <li>
            Para responder a las consultas y facilitar presupuestos
            solicitados a través del formulario de contacto.
          </li>
          <li>
            Para gestionar comunicaciones a través de WhatsApp si el usuario
            inicia el contacto por esta vía.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">3. Legitimación</h3>
        <p>
          El tratamiento de sus datos se realiza con las siguientes bases
          jurídicas que legitiman el mismo:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Consentimiento del interesado:</strong> Al marcar la
            casilla de aceptación en el formulario de contacto.
          </li>
          <li>
            <strong>Interés legítimo:</strong> Para responder a sus consultas
            previas a una contratación.
          </li>
        </ul>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">4. Conservación de los Datos</h3>
        <p>
          Se conservarán mientras exista un interés mutuo para mantener el fin
          del tratamiento y cuando ya no sea necesario para tal fin, se
          suprimirán con medidas de seguridad adecuadas.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">5. Destinatarios</h3>
        <p>
          No se comunicarán los datos a terceros, salvo obligación legal o a
          proveedores de servicios necesarios (como proveedores de hosting o
          mensajería instantánea como WhatsApp LLC).
        </p>
        <p className="text-sm text-muted-foreground">
          Nota sobre WhatsApp: Al utilizar el botón de WhatsApp o enviar el
          formulario que redirige a dicha aplicación, aceptas que tus datos
          (número de teléfono) sean tratados por WhatsApp LLC (Meta), lo que
          puede implicar una transferencia internacional de datos a EE.UU.
          amparada en el marco de privacidad Data Privacy Framework.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">6. Derechos</h3>
        <p>El Usuario tiene derecho a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Derecho a retirar el consentimiento en cualquier momento.</li>
          <li>
            Derecho de acceso, rectificación, portabilidad y supresión de sus
            datos.
          </li>
          <li>
            Derecho a presentar una reclamación ante la Autoridad de Control
            (www.aepd.es) si considera que el tratamiento no se ajusta a la
            normativa vigente.
          </li>
        </ul>
        <p>
          <strong>Datos de contacto para ejercer sus derechos:</strong>
          <br />
          Miguel Louwagie Sapena. Calle Antares 5J, Alicante.
          <br />
          Email: studiopixelens@gmail.com
        </p>
      </section>
    </article>
  );
};

export default PrivacyPolicy;
