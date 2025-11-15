import React from "react";
import { useTranslation } from "react-i18next";

const LegalNotice = () => {
  // Si usas i18n, idealmente esto iría en los JSON, pero para cumplir YA, lo ponemos en texto duro (hardcoded) en español que es lo legalmente vinculante en España.
  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8 text-neutral-300">
        <h1 className="text-3xl font-bold text-white mb-8">Aviso Legal</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            1. Datos Identificativos
          </h2>
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

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">2. Usuarios</h2>
          <p>
            El acceso y/o uso de este portal de Studio Pixelens atribuye la
            condición de USUARIO, que acepta, desde dicho acceso y/o uso, las
            Condiciones Generales de Uso aquí reflejadas. Las citadas
            Condiciones serán de aplicación independientemente de las
            Condiciones Generales de Contratación que en su caso resulten de
            obligado cumplimiento.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            3. Uso del Portal
          </h2>
          <p>
            Studio Pixelens proporciona el acceso a multitud de informaciones,
            servicios, programas o datos (en adelante, "los contenidos") en
            Internet pertenecientes a Studio Pixelens o a sus licenciantes a los
            que el USUARIO pueda tener acceso. El USUARIO asume la
            responsabilidad del uso del portal.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Propiedad Intelectual e Industrial
          </h2>
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

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            5. Ley Aplicable y Jurisdicción
          </h2>
          <p>
            La relación entre Studio Pixelens y el USUARIO se regirá por la
            normativa española vigente y cualquier controversia se someterá a
            los Juzgados y tribunales de la ciudad de Alicante.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice;
