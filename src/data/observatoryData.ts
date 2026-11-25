import {
  AuthorTheory,
  CaseFormat,
  CommunityContribution,
  GlossaryCategory,
  GlossaryTerm,
  MediaAuditCase,
  NormativeInstrument,
  ObservatoryConfig,
  ParticipantRole,
  PopularStrategy,
  TeamMember,
  VerifiedReference,
} from '../types/observatory';

// CONFIGURACIÓN EDITABLE DE IDENTIDAD DEL OBSERVATORIO
export const OBSERVATORY_CONFIG: ObservatoryConfig = {
  name: 'Radar Soberano: Observatorio de Narrativas y Guerra Cognitiva',
  shortTitle: 'Radar Soberano',
  institution: 'LAUICOM · Universidad Internacional de las Comunicaciones',
  centralCaseTitle:
    'Desinformación, audios de alarma y narrativas descontextualizadas sobre crisis y recursos estratégicos',
  centralCaseSummary:
    'Lectura crítica de portadas, encuadres mediáticos, audios virales y operaciones informativas en torno a los recursos estratégicos nacionales, el territorio Esequibo y el marco jurídico del Acuerdo de Ginebra de 1966.',
  academicCycle: 'Semanas 9, 10 y 11 · Análisis Crítico Mediático y Comunicación Popular',
};

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Integrante 1 (Editar nombre)',
    role: 'Coordinación Teórica y Encuadres',
    focus: 'Hegemonía mediática, portadas y lectura crítica de Gramsci y Mattelart',
    weekResponsibility: 'Semana 9 · Bases Teóricas',
  },
  {
    id: 'tm-2',
    name: 'Integrante 2 (Editar nombre)',
    role: 'Auditoría de Contenidos y Verificación',
    focus: 'Desmontaje de audios de alarma, deepfakes y contrastación con el Acuerdo de Ginebra',
    weekResponsibility: 'Semana 10 · Desmontaje',
  },
  {
    id: 'tm-3',
    name: 'Integrante 3 (Editar nombre)',
    role: 'Comunicación Popular y Territorio',
    focus: 'Praxis comunal, radio comunitaria y articulación dialógica (Freire y Luxemburg)',
    weekResponsibility: 'Semana 11 · Contranarrativa',
  },
  {
    id: 'tm-4',
    name: 'Integrante 4 (Editar nombre)',
    role: 'Documentación Normativa y Archivo',
    focus: 'CRBV (Arts. 57 y 58), Ley RESORTE, fuentes verificadas y sistematización',
    weekResponsibility: 'Transversal · Rigor Jurídico',
  },
];

export const INITIAL_SHARED_WORKSPACE = {
  url: 'https://campus.lauicom.edu.ve/',
  label: 'Campus Virtual LAUICOM / Carpeta compartida del equipo',
  notes:
    'Bitácora de trabajo colaborativo: Semana 9 (marco teórico cerrado), Semana 10 (auditoría de 3 casos y glosario), Semana 11 (propuesta comunal y recolección de aportes).',
};

export const AUTHOR_THEORIES: AuthorTheory[] = [
  {
    id: 'gramsci',
    author: 'Antonio Gramsci',
    work: 'Cuadernos de la cárcel',
    yearOrContext: '1929–1935 · Filosofía de la praxis',
    quote: 'La hegemonía se construye con dirección intelectual y moral, no solo fuerza.',
    explanation:
      'Gramsci demuestra que el poder dominante no se sostiene únicamente mediante coerción estatal o militar, sino a través del consenso cultural fabricado en escuelas, prensa, opinión pública y sentido común cotidiano.',
    caseApplication:
      'Las portadas y titulares corporativos buscan naturalizar una visión única sobre la crisis y el Esequibo, presentando intereses geopolíticos externos como sentido común neutral.',
    category: GlossaryCategory.HegemoniaMedios,
    verifiedSearchUrl: 'https://www.youtube.com/results?search_query=Antonio+Gramsci+hegemonia+cultural+comunicacion',
    verifiedSearchLabel: 'Buscar ponencias sobre Gramsci en YouTube',
    defaultVideoUrl: '',
    verificationNote:
      'Nota académica: Verifica que la URL que pegues corresponda a una conferencia o clase íntegra y cita minuto exacto antes de la defensa oral.',
  },
  {
    id: 'mattelart',
    author: 'Armand Mattelart',
    work: 'La comunicación mundo',
    yearOrContext: '1993 · Economía política de la comunicación',
    quote: 'Comunicar exige leer las estructuras de poder transnacionales y culturales.',
    explanation:
      'Mattelart analiza cómo las redes globales de información, agencias de noticias y conglomerados tecnológicos no son canales neutros: responden a arquitecturas históricas de dominación económica y cultural.',
    caseApplication:
      'Al estudiar narrativas sobre recursos estratégicos venezolanos y la Guayana Esequiba, resulta indispensable rastrear qué agencias, plataformas algorítmicas y consorcios energéticos financian o amplifican cada encuadre.',
    category: GlossaryCategory.HegemoniaMedios,
    verifiedSearchUrl: 'https://www.youtube.com/results?search_query=Armand+Mattelart+comunicacion+poder+transnacional',
    verifiedSearchLabel: 'Buscar conferencias de Armand Mattelart en YouTube',
    defaultVideoUrl: 'https://www.facebook.com/watch/?v=25865415209825603',
    verificationNote:
      'Nota académica: Pega aquí la URL verificada de la entrevista o conferencia de Mattelart y confirma su disponibilidad antes de exponer.',
  },
  {
    id: 'pasquali',
    author: 'Antonio Pasquali',
    work: 'Comprensión de la comunicación',
    yearOrContext: '1970 · Teoría crítica latinoamericana',
    quote: 'La información unidireccional anula el diálogo auténtico entre sujetos libres.',
    explanation:
      'Pasquali distingue rigurosamente entre "información" (transmisión vertical, unilateral y sin retorno, donde el receptor queda reducido a objeto) y "comunicación" (relación bilateral de reciprocidad entre interlocutores con igual dignidad).',
    caseApplication:
      'Los audios de alarma por mensajería y las matrices mediáticas operan como pura información unidireccional diseñada para provocar pánico inmediato sin posibilidad de réplica ni contraste comunitario.',
    category: GlossaryCategory.HegemoniaMedios,
    verifiedSearchUrl: 'https://www.youtube.com/results?search_query=Antonio+Pasquali+comprension+de+la+comunicacion',
    verifiedSearchLabel: 'Buscar clases sobre Antonio Pasquali en YouTube',
    defaultVideoUrl: '',
    verificationNote:
      'Nota académica: Verifica el enlace de YouTube seleccionado (por ejemplo, ponencias académicas venezolanas sobre Pasquali) antes de la defensa.',
  },
  {
    id: 'garces',
    author: 'Róger Garcés',
    work: 'Dimensiones de la guerra cognitiva (LAUICOM)',
    yearOrContext: 'Investigación LAUICOM · Psicología política',
    quote: 'La guerra cognitiva es insidiosa; manipula percepción y creencias.',
    explanation:
      'Desde la psicología y el análisis de conflictos en LAUICOM, Garcés explica que la guerra cognitiva interviene sobre la arquitectura emocional, la memoria y las creencias colectivas mediante estímulos repetitivos e invisibles.',
    caseApplication:
      'El "goteo emocional" de audios alarmistas sobre escasez, colapso o presunta indefensión territorial busca fracturar la serenidad y el juicio crítico de la población.',
    category: GlossaryCategory.GuerraCognitiva,
    verifiedSearchUrl: 'https://www.youtube.com/@LAUICOM',
    verifiedSearchLabel: 'Explorar canal oficial @LAUICOM en YouTube',
    defaultVideoUrl: '',
    verificationNote:
      'Nota académica: Consulta el canal oficial @LAUICOM para copiar la URL directa de la ponencia de Róger Garcés antes de la defensa.',
  },
  {
    id: 'delgado-arria',
    author: 'Luis Delgado Arria',
    work: 'La ingeniería de la percepción (LAUICOM, 2025)',
    yearOrContext: '2025 · Vicerrectorado de Investigación LAUICOM',
    quote: 'Disputa por la razón y la percepción frente al cibercontrol.',
    explanation:
      'Delgado Arria examina cómo las operaciones político-cognitivas contemporáneas emplean la saturación de estímulos, la fragmentación del yo y el cibercontrol algorítmico para disputar la razón pública y aislar la soberanía nacional.',
    caseApplication:
      'La lectura descontextualizada de portadas internacionales sobre el Esequibo y los recursos estratégicos responde a una ingeniería discursiva que sustituye el debate jurídico del Acuerdo de Ginebra por consignas emocionales.',
    category: GlossaryCategory.GuerraCognitiva,
    verifiedSearchUrl: 'https://www.youtube.com/@LAUICOM',
    verifiedSearchLabel: 'Explorar ponencias en @LAUICOM en YouTube',
    defaultVideoUrl: '',
    verificationNote:
      'Nota académica: Verifica el enlace exacto del seminario o presentación de Luis Delgado Arria en @LAUICOM o portal lauicom.edu.ve.',
  },
  {
    id: 'delgado-mincyt',
    author: 'Delgado Arria et al.',
    work: 'La guerra cognitiva en la agonía digital - 4.0 (MINCYT)',
    yearOrContext: 'Fondo Editorial MINCYT · Obra colectiva',
    quote: 'El desafío de la conciencia comunitaria frente a la agonía digital.',
    explanation:
      'Esta obra colectiva impulsada por el MINCYT (editada por Nerliny Carucí con aportes de Luis Delgado Arria, Róger Garcés, Gabriela Jiménez-Ramírez, entre otros) analiza la saturación de pantallas, IA generativa y la urgencia de reconstruir conciencia y tejido comunal.',
    caseApplication:
      'Frente a videos sintéticos y campañas automatizadas en redes sociales, la respuesta no es únicamente técnica sino organizativa: redes comunales capaces de contrastar información desde el territorio.',
    category: GlossaryCategory.GuerraCognitiva,
    verifiedSearchUrl: 'https://www.youtube.com/results?search_query=La+guerra+cognitiva+en+la+agonia+digital+MINCYT',
    verifiedSearchLabel: 'Buscar presentación del libro MINCYT en YouTube',
    defaultVideoUrl: '',
    verificationNote:
      'Nota académica: Confirma que la URL audiovisual corresponde a la presentación oficial del libro editado por MINCYT.',
  },
  {
    id: 'freire-luxemburg',
    author: 'Paulo Freire y Rosa Luxemburg',
    work: 'Comunicación Popular y Horizonte Emancipador',
    yearOrContext: 'Pedagogía del oprimido · Iniciativa consciente de las masas',
    quote:
      'Leer críticamente el mundo mediante comunicación dialógica y praxis comunal, donde la iniciativa consciente del pueblo supera toda tutela y lo convierte en sujeto productor.',
    explanation:
      'Freire propone una educación y comunicación dialógica en la que nadie educa ni informa verticalmente a otro, sino que las comunidades leen críticamente su realidad para transformarla. Rosa Luxemburg aporta la confianza radical en la iniciativa consciente de las masas frente a las tutelas burocráticas o élites iluminadas.',
    caseApplication:
      'El observatorio no se limita a desmentir noticias desde un escritorio universitario: impulsa radios comunitarias, murales digitales y asambleas donde vecinas, estudiantes y trabajadores producen su propia palabra soberana.',
    category: GlossaryCategory.ComunicacionPopular,
    verifiedSearchUrl: 'https://www.youtube.com/results?search_query=Paulo+Freire+comunicacion+popular+educacion+dialogica',
    verifiedSearchLabel: 'Buscar recursos sobre Freire y comunicación popular',
    defaultVideoUrl: '',
    verificationNote:
      'Nota académica: Verifica la URL de la clase o documental sobre Paulo Freire / Rosa Luxemburg que el equipo expondrá en la Semana 11.',
  },
];

export const INITIAL_MEDIA_CASES: MediaAuditCase[] = [
  {
    id: 'case-esequibo-portada',
    title:
      'Portada digital: "Tensión unilateral por el Esequibo amenaza estabilidad regional sin marco jurídico"',
    format: CaseFormat.Portada,
    sourceLabel: 'Encuadre tipo de portada internacional / Portal informativo regional',
    dateLabel: 'Caso de estudio · Semana 10',
    dominantFrame:
      'Presenta la controversia territorial exclusivamente como un conflicto reciente e impulsivo, empleando vocabulario bélico y adjetivos de alarma para fijar la idea de un acto unilateral.',
    hiddenOrDecontextualized:
      'Omite por completo la nulidad histórica del Laudo Arbitral de París de 1899 y silencia el Acuerdo de Ginebra del 17 de febrero de 1966, instrumento jurídico vigente que obliga a una solución práctica, pacífica y negociada entre las partes (Art. I y IV) y prohíbe generar nuevos derechos mientras dure la controversia (Art. V). Tampoco menciona las concesiones petroleras otorgadas en áreas marinas por delimitar.',
    applicableNormative:
      'Acuerdo de Ginebra de 1966 (Arts. I, IV y V) · Art. 33 de la Carta de la ONU · Art. 58 CRBV (derecho a información veraz, oportuna e imparcial).',
    verdict:
      'Encuadre sesgado por omisión histórica y jurídica. Requiere reposición documental del Acuerdo de Ginebra y contextualización sobre recursos energéticos estratégicos.',
    verdictCategory: 'Encuadre sesgado',
  },
  {
    id: 'case-audio-alarma',
    title:
      'Audio viral de WhatsApp: "Cadena de presunto cierre inminente de distribución eléctrica y combustible"',
    format: CaseFormat.AudioViral,
    sourceLabel: 'Mensajería instantánea · Reenviado muchas veces sin autoría identificable',
    dateLabel: 'Caso de estudio · Semana 10',
    dominantFrame:
      'Voz masculina con tono de urgencia extrema que invoca "fuentes internas confiables" para provocar compras nerviosas, acaparamiento y zozobra vecinal en menos de 24 horas.',
    hiddenOrDecontextualized:
      'Carece de fecha, lugar verificable, vocería institucional o registro periodístico contrastable. Explota el sesgo de confirmación y el contagio emocional descrito por Róger Garcés para inducir pánico colectivo.',
    applicableNormative:
      'Art. 57 CRBV (no se permite el anonimato ni la propaganda que incite a la zozobra) · Art. 58 CRBV (derecho a información veraz) · Ley RESORTE (responsabilidad en medios electrónicos).',
    verdict:
      'Desinformación anónima de alarma psicológica. No supera verificación mínima de autoría, fecha ni fuente primaria.',
    verdictCategory: 'Manipulado / Falso',
  },
  {
    id: 'case-video-recortado',
    title:
      'Clip corto en redes: "Declaración recortada sobre recursos minerales y soberanía energética"',
    format: CaseFormat.Deepfake,
    sourceLabel: 'Video vertical de 18 segundos con subtítulos en rojo y audio acelerado',
    dateLabel: 'Caso de estudio · Semana 10',
    dominantFrame:
      'Aísla una frase de 6 segundos de una intervención técnica más amplia, añadiendo música tensa y un cintillo alarmista para sugerir la entrega de activos estratégicos.',
    hiddenOrDecontextualized:
      'Suprime el contexto previo y posterior de la intervención donde se explicaban salvaguardas soberanas y mecanismos de cooperación. Ejemplifica la fragmentación del discurso analizada por Luis Delgado Arria.',
    applicableNormative:
      'Art. 58 CRBV (réplica y rectificación) · Ley Especial contra los Delitos Informáticos (manipulación y falsificación de contenidos electrónicos) · Declaración de Seúl UNESCO (MIL).',
    verdict:
      'Contenido descontextualizado por edición selectiva. El contraste con la grabación íntegra desmiente el titular superpuesto.',
    verdictCategory: 'Descontextualizado',
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'g-hegemonia',
    term: 'Hegemonía',
    category: GlossaryCategory.HegemoniaMedios,
    definition:
      'Capacidad de un bloque social o potencia para dirigir intelectual, moral y culturalmente a una sociedad, logrando que sus intereses particulares parezcan sentido común universal sin depender solo de la fuerza física.',
    practicalExample:
      'Cuando portadas internacionales presentan el extractivismo corporativo en zonas en reclamación como "desarrollo inevitable" e invisibilizan los tratados históricos.',
    reference: 'Antonio Gramsci — Cuadernos de la cárcel (1929–1935).',
  },
  {
    id: 'g-guerra-cognitiva',
    term: 'Guerra cognitiva',
    category: GlossaryCategory.GuerraCognitiva,
    definition:
      'Modalidad de conflicto contemporáneo cuyo blanco principal es la mente, la emoción, la memoria y la toma de decisiones de la población, buscando modificar creencias y conductas sin necesidad de ocupación militar directa.',
    practicalExample:
      'Campañas sincronizadas de rumores sobre servicios públicos y recursos estratégicos diseñadas para inducir desesperanza o fractura social.',
    reference: 'Róger Garcés — Dimensiones de la guerra cognitiva (LAUICOM).',
  },
  {
    id: 'g-cibercontrol',
    term: 'Cibercontrol',
    category: GlossaryCategory.GuerraCognitiva,
    definition:
      'Gestión algorítmica, vigilancia de datos y modulación automatizada de la atención en plataformas digitales que prioriza contenidos polarizantes o funcionales a intereses geopolíticos hegemónicos.',
    practicalExample:
      'Amplificación desproporcionada de clips de alarma mientras se reducen el alcance o la visibilidad de documentos jurídicos y voces comunitarias.',
    reference: 'Luis Delgado Arria — La ingeniería de la percepción (LAUICOM, 2025).',
  },
  {
    id: 'g-ingenieria-percepcion',
    term: 'Ingeniería de la percepción',
    category: GlossaryCategory.GuerraCognitiva,
    definition:
      'Conjunto sistemático de técnicas discursivas, visuales y psicológicas orientadas a fabricar estados de opinión, instalar marcos interpretativos previos y disputar la razón pública.',
    practicalExample:
      'Uso coordinado de encuestas sin ficha técnica, portadas espejo y titulares emocionales previos a coyunturas diplomáticas sobre el Esequibo.',
    reference: 'Luis Delgado Arria — La ingeniería de la percepción (LAUICOM, 2025).',
  },
  {
    id: 'g-encuadre-mediatico',
    term: 'Encuadre mediático',
    category: GlossaryCategory.HegemoniaMedios,
    definition:
      'Operación editorial mediante la cual un medio selecciona ciertos aspectos de la realidad, los enfatiza en titulares o imágenes y omite otros datos clave para inducir una interpretación específica.',
    practicalExample:
      'Publicar un mapa sin la línea de zona en reclamación o titular una nota diplomática omitiendo por completo el Acuerdo de Ginebra de 1966.',
    reference: 'Armand Mattelart — La comunicación mundo / Análisis crítico del discurso.',
  },
  {
    id: 'g-descontextualizacion',
    term: 'Descontextualización / Deepfake',
    category: GlossaryCategory.GuerraCognitiva,
    definition:
      'Extracción deliberada de una imagen, audio o fragmento de video de su fecha, lugar o discurso original —o su síntesis mediante inteligencia artificial— para atribuirle un significado falso o alarmista.',
    practicalExample:
      'Reutilizar fotografías de apagones de años anteriores o clonar voces mediante IA en audios de WhatsApp para simular emergencias actuales.',
    reference: 'Delgado Arria et al. — La guerra cognitiva en la agonía digital - 4.0 (MINCYT).',
  },
  {
    id: 'g-comunicacion-dialogica',
    term: 'Comunicación dialógica',
    category: GlossaryCategory.ComunicacionPopular,
    definition:
      'Modelo horizontal y recíproco de intercambio donde las personas se reconocen como sujetos pensantes capaces de nombrar y transformar su realidad en común, opuesto a la transmisión vertical.',
    practicalExample:
      'Asambleas vecinales y mesas de radio comunitaria donde las familias analizan juntas un audio viral y construyen una respuesta verificada.',
    reference: 'Paulo Freire — Pedagogía del oprimido / Antonio Pasquali — Comprensión de la comunicación.',
  },
  {
    id: 'g-contranarrativa',
    term: 'Contranarrativa',
    category: GlossaryCategory.ComunicacionPopular,
    definition:
      'Relato argumentado, documentado y arraigado en la experiencia popular que desmonta las matrices de desinformación y propone claves de lectura soberanas y verificables.',
    practicalExample:
      'Serie de microcápsulas sonoras y gráficas explicando de forma clara los artículos del Acuerdo de Ginebra y los derechos comunicacionales de la CRBV.',
    reference: 'LAUICOM — Líneas de investigación en comunicación contrahegemónica.',
  },
  {
    id: 'g-praxis-comunal',
    term: 'Praxis comunal',
    category: GlossaryCategory.ComunicacionPopular,
    definition:
      'Articulación consciente entre reflexión crítica y acción organizativa en el territorio mediante la cual el pueblo deja de ser receptor pasivo de mensajes y asume la producción comunicacional.',
    practicalExample:
      'Comités locales de comunicación popular que editan boletines barriales, murales digitales y nodos de verificación entre pares.',
    reference: 'Rosa Luxemburg (iniciativa de las masas) & Paulo Freire — Horizonte emancipador.',
  },
];

export const POPULAR_STRATEGIES: PopularStrategy[] = [
  {
    id: 'ps-radio',
    channel: 'Radio Comunitaria y Perifoneo',
    title: 'Cápsulas "Verdad en 90 Segundos" y Lectura Colectiva',
    territoryAction:
      'Emisión de microprogramas en emisoras comunitarias y puntos de perifoneo parroquial desmontando los audios de alarma semanales con datos verificables.',
    caseConnection:
      'Contrarresta el pánico inducido por cadenas anónimas sobre recursos estratégicos y explica en lenguaje cotidiano el Acuerdo de Ginebra de 1966.',
    expectedImpact: 'Alcance directo en audiencias con conectividad intermitente y adultos mayores.',
  },
  {
    id: 'ps-mural',
    channel: 'Mural Digital y Cartelería Urbana',
    title: 'Láminas de Contraste Visual en Espacios Comunales',
    territoryAction:
      'Diseño de afiches físicos en casas comunales, paradas y liceos junto con versiones ligeras en imagen (menos de 200 KB) para difusión por mensajería vecinal.',
    caseConnection:
      'Expone lado a lado "Qué dice la portada sesgada" vs. "Qué establece el documento histórico o jurídico real".',
    expectedImpact: 'Circulación orgánica rápida sin depender de algoritmos comerciales.',
  },
  {
    id: 'ps-video',
    channel: 'Piezas Audiovisuales Breves',
    title: 'Micro-pedagogía de Desmontaje en 45 Segundos',
    territoryAction:
      'Videos breves grabados por estudiantes y voceros comunitarios señalando las tres señales de alerta de un deepfake o un clip recortado.',
    caseConnection:
      'Enseña a identificar cortes abruptos, ausencia de fuente primaria y música inductora de miedo en noticias sobre energía y territorio.',
    expectedImpact: 'Alfabetización mediática práctica entre jóvenes y usuarios de redes sociales.',
  },
  {
    id: 'ps-talleres',
    channel: 'Talleres de Lectura Crítica',
    title: 'Círculos Dialógicos de Prensa y Redes (Freire)',
    territoryAction:
      'Encuentros presenciales en consejos comunales y aulas de la LAUICOM para analizar portadas impresas y digitales aplicando la ficha de auditoría de Semana 10.',
    caseConnection:
      'Convierte a vecinos y estudiantes en analistas críticos capaces de detectar omisiones deliberadas y propaganda de guerra (Art. 57 CRBV).',
    expectedImpact: 'Apropiación colectiva del método de análisis más allá del aula universitaria.',
  },
  {
    id: 'ps-redes',
    channel: 'Redes Soberanas y Verificación Vecinal',
    title: 'Nodos Territoriales de Contrastación Documental',
    territoryAction:
      'Grupos comunitarios de verificación con enlaces directos a fuentes primarias (Gacetas Oficiales, MINCYT, Cancillería, ONU) antes de reenviar cualquier alerta.',
    caseConnection:
      'Sustituye la cadena de reenvío compulsivo por una cultura de pausa crítica y consulta de fuentes oficiales verificadas.',
    expectedImpact: 'Reducción de la velocidad de propagación de rumores locales.',
  },
];

export const INITIAL_CONTRIBUTIONS: CommunityContribution[] = [
  {
    id: 'contrib-1',
    authorName: 'Camila R.',
    role: ParticipantRole.Estudiante,
    stance: 'Lectura histórica obligatoria sobre el Esequibo',
    comment:
      'Al revisar portadas de la última semana notamos que casi ninguna menciona el Artículo V del Acuerdo de Ginebra. Incluir esa cita jurídica en infografías comunitarias cambia por completo la conversación.',
    createdAt: '2026-11-20',
  },
  {
    id: 'contrib-2',
    authorName: 'Héctor M.',
    role: ParticipantRole.Comunicador,
    stance: 'Desmentido rápido en radio parroquial',
    comment:
      'En nuestra emisora comunitaria probamos leer al aire los audios de alarma anónimos junto con la verificación técnica y el Art. 57 de la CRBV; la audiencia empezó a enviarnos audios para contrastar antes de reenviarlos.',
    createdAt: '2026-11-22',
  },
  {
    id: 'contrib-3',
    authorName: 'Marisol G.',
    role: ParticipantRole.Vecino,
    stance: 'Talleres intergeneracionales en el consejo comunal',
    comment:
      'Muchos adultos mayores reciben videos manipulados por WhatsApp sin saber cómo verificar la fecha original. Necesitamos guías sencillas paso a paso desde el módulo de comunicación popular.',
    createdAt: '2026-11-24',
  },
];

export const NORMATIVE_INSTRUMENTS: NormativeInstrument[] = [
  {
    id: 'norm-crbv',
    title: 'Constitución de la República Bolivariana de Venezuela (CRBV, 1999)',
    scope: 'Nacional (Venezuela)',
    publicationData: 'Gaceta Oficial Extraordinaria N° 5.453 (24 de marzo de 2000)',
    keyArticles:
      'Art. 57 (Libertad de expresión sin censura previa; prohibición del anonimato, de la propaganda de guerra y de mensajes que inciten al odio o intolerancia) y Art. 58 (Comunicación libre y plural con deberes y responsabilidades; derecho a la información oportuna, veraz e imparcial, así como a la réplica y rectificación).',
    observatoryRelevance:
      'Sustenta constitucionalmente el desmontaje de audios anónimos de alarma y el derecho ciudadano a exigir información veraz y contextualizada.',
  },
  {
    id: 'norm-resorte',
    title: 'Ley de Responsabilidad Social en Radio, Televisión y Medios Electrónicos (Ley RESORTE)',
    scope: 'Nacional (Venezuela)',
    publicationData: 'Gaceta Oficial N° 38.081 (07/12/2004) · Reforma Parcial G.O. N° 39.579 (22/12/2010) y N° 39.610 (07/02/2011)',
    keyArticles:
      'Establece la responsabilidad social de prestadores de servicios de radio, televisión y medios electrónicos, productores nacionales y usuarios para promover la formación ciudadana, el respeto democrático y la protección de niños, niñas y adolescentes.',
    observatoryRelevance:
      'Aporta el marco regulatorio nacional aplicable a contenidos difundidos en portales electrónicos y plataformas digitales con incidencia pública.',
  },
  {
    id: 'norm-lotel',
    title: 'Ley Orgánica de Telecomunicaciones',
    scope: 'Nacional (Venezuela)',
    publicationData: 'Gaceta Oficial N° 36.970 (12/06/2000) · Reforma G.O. N° 39.610 (07/02/2011)',
    keyArticles:
      'Garantiza el derecho humano a la comunicación y la realización de las actividades de telecomunicaciones como servicio de interés general, regulando el espectro radioeléctrico y habilitando la radiodifusión sonora y televisiva comunitaria sin fines de lucro.',
    observatoryRelevance:
      'Respalda jurídicamente la propuesta de radios comunitarias y redes de comunicación popular en la Semana 11.',
  },
  {
    id: 'norm-delitos',
    title: 'Ley Especial contra los Delitos Informáticos',
    scope: 'Nacional (Venezuela)',
    publicationData: 'Gaceta Oficial N° 37.313 (30 de octubre de 2001)',
    keyArticles:
      'Tipifica conductas ilícitas vinculadas al acceso indebido, sabotaje de sistemas, falsificación de documentos electrónicos y fraude mediante tecnologías de la información.',
    observatoryRelevance:
      'Marco de referencia para distinguir entre error informativo y adulteración dolosa o suplantación digital en casos de deepfakes y documentos apócrifos.',
  },
  {
    id: 'norm-odio',
    title: 'Ley Constitucional contra el Odio, por la Convivencia Pacífica y la Tolerancia',
    scope: 'Nacional (Venezuela)',
    publicationData: 'Gaceta Oficial N° 41.274 (8 de noviembre de 2017)',
    keyArticles:
      'Promueve el reconocimiento de la diversidad, la tolerancia y la prevención de mensajes que inciten públicamente al odio, la discriminación o la violencia en medios tradicionales y electrónicos.',
    observatoryRelevance:
      'Permite evaluar discursos polarizantes o estigmatizantes dentro del análisis crítico de campañas cognitivas.',
  },
  {
    id: 'norm-ginebra',
    title: 'Acuerdo de Ginebra del 17 de febrero de 1966',
    scope: 'Internacional / Multilateral',
    publicationData: 'Suscrito en Ginebra el 17/02/1966 entre Venezuela y el Reino Unido (con adhesión de Guyana)',
    keyArticles:
      'Reconoce la contención venezolana sobre la nulidad del Laudo Arbitral de París de 1899; crea la Comisión Mixta (Art. I); remite a los medios de solución pacífica del Art. 33 de la Carta de la ONU (Art. IV); y establece que ningún acto durante su vigencia genera derechos de soberanía (Art. V).',
    observatoryRelevance:
      'Piedra angular jurídica para auditar portadas y narrativas descontextualizadas sobre la controversia de la Guayana Esequiba.',
    officialReferenceUrl: 'https://peacemaker.un.org/',
    officialReferenceLabel: 'Archivo de Acuerdos de Paz de la ONU (UN Peacemaker)',
  },
  {
    id: 'norm-unesco',
    title: 'Declaración de Seúl de la UNESCO sobre Alfabetización Mediática e Informacional (MIL)',
    scope: 'Internacional / Multilateral',
    publicationData: 'UNESCO · Marco internacional frente a la desinfodemia',
    keyArticles:
      'Promueve capacidades críticas ciudadanas para evaluar fuentes, comprender sesgos algorítmicos y responder a la desinformación mediante educación mediática abierta y participativa.',
    observatoryRelevance:
      'Respalda pedagógicamente el Glosario Interactivo y los talleres populares de lectura crítica de medios.',
    officialReferenceUrl: 'https://www.unesco.org/',
    officialReferenceLabel: 'Portal oficial de la UNESCO',
  },
];

export const INITIAL_VERIFIED_REFERENCES: VerifiedReference[] = [
  {
    id: 'ref-lauicom-portal',
    group: 'clase',
    citation:
      'Universidad Internacional de las Comunicaciones (LAUICOM). Líneas de investigación, programas contrahegemónicos y publicaciones académicas (Delgado Arria, L., 2025, La ingeniería de la percepción; Garcés, R., Dimensiones de la guerra cognitiva).',
    contextNote: 'Material base y cátedra trabajada en clases · Semanas 9, 10 y 11.',
    url: 'https://lauicom.edu.ve/',
    urlLabel: 'Portal oficial LAUICOM (lauicom.edu.ve)',
  },
  {
    id: 'ref-lauicom-yt',
    group: 'clase',
    citation:
      'Canal Institucional de YouTube de la Universidad Internacional de las Comunicaciones (@LAUICOM). Conferencias, seminarios y cátedras abiertas sobre guerra cognitiva y comunicación popular.',
    contextNote: 'Canal institucional verificado para consulta de ponencias.',
    url: 'https://www.youtube.com/@LAUICOM',
    urlLabel: 'Canal oficial YouTube @LAUICOM',
  },
  {
    id: 'ref-mincyt-libro',
    group: 'clase',
    citation:
      'Carucí, N. (Ed.), Delgado Arria, L., Garcés, R., Jiménez-Ramírez, G., et al. La guerra cognitiva en la agonía digital 4.0: Sentidos y horizontes de la comunicación comunal en el tránsito hacia una humanidad nueva. Fondo Editorial MINCYT.',
    contextNote: 'Obra colectiva oficial del Ministerio del Poder Popular para Ciencia y Tecnología.',
    url: 'https://www.mincyt.gob.ve/',
    urlLabel: 'Portal oficial MINCYT (mincyt.gob.ve)',
  },
  {
    id: 'ref-clasicos',
    group: 'clase',
    citation:
      'Bibliografía clásica citada en programa: Gramsci, A. (Cuadernos de la cárcel); Mattelart, A. (La comunicación mundo, 1993); Pasquali, A. (Comprensión de la comunicación, 1970); Freire, P. (Pedagogía del oprimido); Luxemburg, R. (Obras sobre democracia socialista e iniciativa de las masas).',
    contextNote: 'Ediciones académicas y fichas de lectura de cátedra.',
  },
  {
    id: 'ref-un-peacemaker',
    group: 'externa',
    citation:
      'Naciones Unidas — UN Peacemaker. Registro documental de tratados y mecanismos de solución pacífica de controversias (Acuerdo de Ginebra, 17 de febrero de 1966).',
    contextNote: 'Fuente internacional verificada para el caso de estudio sobre el Esequibo.',
    url: 'https://peacemaker.un.org/',
    urlLabel: 'UN Peacemaker (peacemaker.un.org)',
    verifiedByTeam: true,
  },
  {
    id: 'ref-unesco',
    group: 'externa',
    citation:
      'UNESCO — Alfabetización Mediática e Informacional (MIL) y Declaración de Seúl contra la desinfodemia.',
    contextNote: 'Marco multilateral de alfabetización mediática verificado.',
    url: 'https://www.unesco.org/',
    urlLabel: 'UNESCO oficial (unesco.org)',
    verifiedByTeam: true,
  },
];
