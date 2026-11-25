import React from 'react';

export const CognitiveDisputeDiagram: React.FC = () => {
  return (
    <figure className="bg-white border border-stone-200 rounded-xl p-5">
      <svg
        viewBox="0 0 460 320"
        className="w-full h-auto"
        role="img"
        aria-label="Diagrama comparativo entre circuito de guerra cognitiva y circuito de soberanía comunicacional"
      >
        <rect x="0" y="0" width="460" height="320" fill="#FAF9F6" rx="8" />

        {/* Circuito superior: Guerra Cognitiva */}
        <text
          x="20"
          y="30"
          fill="#EC4899"
          fontSize="12"
          fontWeight="700"
          fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif"
        >
          CIRCUITO DE GUERRA COGNITIVA (UNIDIRECCIONAL)
        </text>

        <rect x="20" y="44" width="122" height="58" rx="6" fill="#FFFFFF" stroke="#EC4899" strokeWidth="1.5" />
        <text x="81" y="69" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Audios y Portadas
        </text>
        <text x="81" y="86" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          Alarma / Omisión
        </text>

        <path d="M144 73 L170 73" stroke="#EC4899" strokeWidth="2" />
        <polygon points="168,68 176,73 168,78" fill="#EC4899" />

        <rect x="178" y="44" width="126" height="58" rx="6" fill="#FFFFFF" stroke="#EC4899" strokeWidth="1.5" />
        <text x="241" y="69" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Cibercontrol
        </text>
        <text x="241" y="86" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          Saturación y miedo
        </text>

        <path d="M306 73 L332 73" stroke="#EC4899" strokeWidth="2" />
        <polygon points="330,68 338,73 330,78" fill="#EC4899" />

        <rect x="340" y="44" width="100" height="58" rx="6" fill="#FDF2F8" stroke="#EC4899" strokeWidth="1.5" />
        <text x="390" y="69" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Receptor Pasivo
        </text>
        <text x="390" y="86" textAnchor="middle" fill="#9D174D" fontSize="10" fontFamily="Arial, sans-serif">
          Desmovilización
        </text>

        {/* Eje divisor de disputa */}
        <line x1="20" y1="138" x2="440" y2="138" stroke="#3B28CC" strokeWidth="1.5" strokeDasharray="5 4" />
        <rect x="115" y="124" width="230" height="26" rx="4" fill="#3B28CC" />
        <text
          x="230"
          y="141"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="700"
          fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif"
        >
          DISPUTA POR LA RAZÓN Y EL SENTIDO COMÚN
        </text>

        {/* Circuito inferior: Soberanía Comunicacional */}
        <text
          x="20"
          y="182"
          fill="#065F46"
          fontSize="12"
          fontWeight="700"
          fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif"
        >
          CIRCUITO DE COMUNICACIÓN POPULAR (DIALÓGICO)
        </text>

        <rect x="20" y="196" width="122" height="62" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
        <text x="81" y="222" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Lectura Crítica
        </text>
        <text x="81" y="239" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          Desmontaje y fuente
        </text>

        <path d="M144 227 L170 227" stroke="#10B981" strokeWidth="2" />
        <polygon points="168,222 176,227 168,232" fill="#10B981" />

        <rect x="178" y="196" width="126" height="62" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
        <text x="241" y="222" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Praxis Comunal
        </text>
        <text x="241" y="239" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          Diálogo y territorio
        </text>

        <path d="M306 227 L332 227" stroke="#10B981" strokeWidth="2" />
        <polygon points="330,222 338,227 330,232" fill="#10B981" />

        <rect x="340" y="196" width="100" height="62" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
        <text x="390" y="222" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Sujeto Productor
        </text>
        <text x="390" y="239" textAnchor="middle" fill="#065F46" fontSize="10" fontFamily="Arial, sans-serif">
          Contranarrativa
        </text>

        {/* Retorno dialógico */}
        <path
          d="M390 258 L390 286 L81 286 L81 264"
          fill="none"
          stroke="#3B28CC"
          strokeWidth="1.5"
        />
        <polygon points="76,266 81,258 86,266" fill="#3B28CC" />
        <rect x="152" y="274" width="156" height="22" rx="4" fill="#FAF9F6" stroke="#3B28CC" strokeWidth="1" />
        <text x="230" y="289" textAnchor="middle" fill="#3B28CC" fontSize="10" fontWeight="700" fontFamily="Arial, sans-serif">
          Retorno bilateral (Pasquali / Freire)
        </text>
      </svg>
      <figcaption className="text-xs text-stone-600 mt-3">
        Fig. 1 — Contraste estructural entre la transmisión unidireccional de alarma y la comunicación dialógica territorial.
      </figcaption>
    </figure>
  );
};

export const FramingAnatomyDiagram: React.FC = () => {
  return (
    <figure className="bg-white border border-stone-200 rounded-xl p-5">
      <svg
        viewBox="0 0 680 180"
        className="w-full h-auto"
        role="img"
        aria-label="Anatomía en cuatro pasos del desmontaje crítico de portadas y audios"
      >
        <rect x="0" y="0" width="680" height="180" fill="#FAF9F6" rx="8" />

        {/* Paso 1 */}
        <rect x="16" y="26" width="146" height="128" rx="6" fill="#FFFFFF" stroke="#3B28CC" strokeWidth="1.5" />
        <rect x="16" y="26" width="146" height="28" rx="6" fill="#3B28CC" />
        <text x="89" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif">
          1. TITULAR / PIEZA
        </text>
        <text x="89" y="78" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Portada, audio o clip
        </text>
        <text x="89" y="98" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          Identificar formato,
        </text>
        <text x="89" y="114" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          fecha y autoría real.
        </text>

        <path d="M164 90 L182 90" stroke="#3B28CC" strokeWidth="2" />
        <polygon points="180,85 188,90 180,95" fill="#3B28CC" />

        {/* Paso 2 */}
        <rect x="190" y="26" width="146" height="128" rx="6" fill="#FFFFFF" stroke="#EC4899" strokeWidth="1.5" />
        <rect x="190" y="26" width="146" height="28" rx="6" fill="#EC4899" />
        <text x="263" y="44" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif">
          2. ENCUADRE
        </text>
        <text x="263" y="78" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Carga emocional
        </text>
        <text x="263" y="98" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          ¿Qué emoción induce?
        </text>
        <text x="263" y="114" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          (Miedo, urgencia, sesgo)
        </text>

        <path d="M338 90 L356 90" stroke="#EC4899" strokeWidth="2" />
        <polygon points="354,85 362,90 354,95" fill="#EC4899" />

        {/* Paso 3 */}
        <rect x="364" y="26" width="146" height="128" rx="6" fill="#FFFFFF" stroke="#3B28CC" strokeWidth="1.5" />
        <rect x="364" y="26" width="146" height="28" rx="6" fill="#3B28CC" />
        <text x="437" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif">
          3. OMISIÓN CLAVE
        </text>
        <text x="437" y="78" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Lo que silencia
        </text>
        <text x="437" y="98" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          Acuerdo de Ginebra,
        </text>
        <text x="437" y="114" textAnchor="middle" fill="#52525B" fontSize="10" fontFamily="Arial, sans-serif">
          datos y normativa CRBV.
        </text>

        <path d="M512 90 L530 90" stroke="#10B981" strokeWidth="2" />
        <polygon points="528,85 536,90 528,95" fill="#10B981" />

        {/* Paso 4 */}
        <rect x="538" y="26" width="126" height="128" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
        <rect x="538" y="26" width="126" height="28" rx="6" fill="#10B981" />
        <text x="601" y="44" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif">
          4. VEREDICTO
        </text>
        <text x="601" y="78" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Contraste real
        </text>
        <text x="601" y="98" textAnchor="middle" fill="#065F46" fontSize="10" fontFamily="Arial, sans-serif">
          Fuente verificada y
        </text>
        <text x="601" y="114" textAnchor="middle" fill="#065F46" fontSize="10" fontFamily="Arial, sans-serif">
          contranarrativa local.
        </text>
      </svg>
      <figcaption className="text-xs text-stone-600 mt-3">
        Fig. 2 — Método de auditoría en cuatro fases aplicado al caso de estudio sobre recursos estratégicos y el Esequibo.
      </figcaption>
    </figure>
  );
};

export const PopularPraxisDiagram: React.FC = () => {
  return (
    <figure className="bg-white border border-stone-200 rounded-xl p-5">
      <svg
        viewBox="0 0 420 260"
        className="w-full h-auto"
        role="img"
        aria-label="Diagrama de articulación territorial de la comunicación popular"
      >
        <rect x="0" y="0" width="420" height="260" fill="#FAF9F6" rx="8" />

        {/* Líneas conectoras al núcleo */}
        <line x1="210" y1="130" x2="88" y2="52" stroke="#10B981" strokeWidth="2" />
        <line x1="210" y1="130" x2="332" y2="52" stroke="#EC4899" strokeWidth="2" />
        <line x1="210" y1="130" x2="88" y2="208" stroke="#EC4899" strokeWidth="2" />
        <line x1="210" y1="130" x2="332" y2="208" stroke="#10B981" strokeWidth="2" />
        <line x1="210" y1="130" x2="210" y2="228" stroke="#3B28CC" strokeWidth="2" />

        {/* Nodos periféricos */}
        <rect x="20" y="24" width="136" height="44" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
        <text x="88" y="43" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Radio Comunitaria
        </text>
        <text x="88" y="58" textAnchor="middle" fill="#065F46" fontSize="9.5" fontFamily="Arial, sans-serif">
          Desmentido en vivo
        </text>

        <rect x="264" y="24" width="136" height="44" rx="6" fill="#FFFFFF" stroke="#EC4899" strokeWidth="1.5" />
        <text x="332" y="43" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Mural Digital
        </text>
        <text x="332" y="58" textAnchor="middle" fill="#9D174D" fontSize="9.5" fontFamily="Arial, sans-serif">
          Infografía territorial
        </text>

        <rect x="20" y="182" width="136" height="44" rx="6" fill="#FFFFFF" stroke="#EC4899" strokeWidth="1.5" />
        <text x="88" y="201" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Piezas Breves
        </text>
        <text x="88" y="216" textAnchor="middle" fill="#9D174D" fontSize="9.5" fontFamily="Arial, sans-serif">
          Micro-pedagogía 45s
        </text>

        <rect x="264" y="182" width="136" height="44" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
        <text x="332" y="201" textAnchor="middle" fill="#18181B" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
          Talleres Críticos
        </text>
        <text x="332" y="216" textAnchor="middle" fill="#065F46" fontSize="9.5" fontFamily="Arial, sans-serif">
          Lectura de portadas
        </text>

        <rect x="132" y="212" width="156" height="36" rx="6" fill="#FFFFFF" stroke="#3B28CC" strokeWidth="1.5" />
        <text x="210" y="234" textAnchor="middle" fill="#3B28CC" fontSize="10.5" fontWeight="700" fontFamily="Arial, sans-serif">
          Redes Soberanas Vecinales
        </text>

        {/* Núcleo central */}
        <circle cx="210" cy="126" r="52" fill="#3B28CC" />
        <text
          x="210"
          y="120"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="12"
          fontWeight="700"
          fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif"
        >
          PRAXIS
        </text>
        <text
          x="210"
          y="136"
          textAnchor="middle"
          fill="#10B981"
          fontSize="11"
          fontWeight="700"
          fontFamily="Franklin Gothic Demi Cond, Arial Black, sans-serif"
        >
          COMUNAL
        </text>
        <text x="210" y="151" textAnchor="middle" fill="#E4E4E7" fontSize="9" fontFamily="Arial, sans-serif">
          Freire · Luxemburg
        </text>
      </svg>
      <figcaption className="text-xs text-stone-600 mt-3">
        Fig. 3 — Articulación de medios populares donde la comunidad asume la producción contranarrativa.
      </figcaption>
    </figure>
  );
};
