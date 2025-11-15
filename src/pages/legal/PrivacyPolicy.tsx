import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8 text-neutral-300">
        <h1 className="text-3xl font-bold text-white mb-8">
          Política de Privacidad
        </h1>

        <p className="italic text-sm">Última actualización: Noviembre 2025</p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            1. Información al Usuario
          </h2>
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

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2. Finalidad del Tratamiento
          </h2>
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

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">3. Legitimación</h2>
          <p>
            El tratamiento de sus datos se realiza con las siguientes bases
            jurídicas:
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

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Conservación de los Datos
          </h2>
          <p>
            Se conservarán mientras exista un interés mutuo para mantener el fin
            del tratamiento y cuando ya no sea necesario para tal fin, se
            suprimirán con medidas de seguridad adecuadas.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">5. Destinatarios</h2>
          <p>
            No se comunicarán los datos a terceros, salvo obligación legal o a
            proveedores de servicios necesarios (como proveedores de hosting o
            mensajería instantánea como WhatsApp LLC).
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Nota sobre WhatsApp: Al utilizar el botón de WhatsApp o enviar el
            formulario que redirige a dicha aplicación, aceptas que tus datos
            (número de teléfono) sean tratados por WhatsApp LLC (Meta), lo que
            puede implicar una transferencia internacional de datos a EE.UU.
            amparada en el marco de privacidad Data Privacy Framework.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">6. Derechos</h2>
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
              normativa.
            </li>
          </ul>
          <p className="mt-4">
            <strong>Datos de contacto para ejercer sus derechos:</strong>
            <br />
            Miguel Louwagie Sapena. Calle Antares 5J, Alicante.
            <br />
            Email: studiopixelens@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
