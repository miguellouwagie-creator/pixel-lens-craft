import React from "react";

const LegalNotice = () => {
  return (
    <article className="prose-editorial mx-auto max-w-2xl py-16 px-6">
      <h1 className="text-h2 font-display mb-8">Aviso legal</h1>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">1. Datos Identificativos</h3>
        <p>
          En cumplimiento con el deber de información recogido en artículo 10
          de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico (LSSI), se reflejan a
          continuación los siguientes datos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Titular del sitio web:</strong> Miguel Louwagie Sapena (en
            adelante, "Studio Pixelens")
          </li>
          <li>
            <strong>NIF:</strong> 53950718D
          </li>
          <li>
            <strong>Domicilio:</strong> Calle Antares 5J, Alicante (España)
          </li>
          <li>
            <strong>Correo electrónico de contacto:</strong>{" "}
            studiopixelens@gmail.com
          </li>
          <li>
            <strong>Sitio Web:</strong> https://studiopixelens.com
          </li>
        </ul>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">2. Usuarios</h3>
        <p>
          El acceso y/o uso de este portal de Studio Pixelens atribuye la
          condición de USUARIO, que acepta, desde dicho acceso y/o uso, las
          Condiciones Generales de Uso aquí reflejadas. Las citadas
          Condiciones serán de aplicación independientemente de las
          Condiciones Generales de Contratación que en su caso resulten de
          obligado cumplimiento.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">3. Uso del Portal</h3>
        <p>
          Studio Pixelens proporciona el acceso a multitud de informaciones,
          servicios, programas o datos (en adelante, "los contenidos") en
          Internet pertenecientes a Studio Pixelens o a sus licenciantes a los
          que el USUARIO pueda tener acceso. El USUARIO asume la
          responsabilidad del uso del portal.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">
          4. Propiedad Intelectual e Industrial
        </h3>
        <p>
          Studio Pixelens por sí o como cesionaria, es titular de todos los
          derechos de propiedad intelectual e industrial de su página web, así
          como de los elementos contenidos en la misma (a título enunciativo,
          imágenes, sonido, audio, vídeo, software o textos; marcas o
          logotipos, combinaciones de colores, estructura y diseño, selección
          de materiales usados, programas de ordenador necesarios para su
          funcionamiento, acceso y uso, etc.). Todos los derechos reservados.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h3 className="text-h4 font-sans">5. Ley Aplicable y Jurisdicción</h3>
        <p>
          La relación entre Studio Pixelens y el USUARIO se regirá por la
          normativa española vigente y cualquier controversia se someterá a
          los Juzgados y tribunales de la ciudad de Alicante.
        </p>
      </section>
    </article>
  );
};

export default LegalNotice;
