export enum CaseFormat {
  AudioViral = 'Audio viral',
  Deepfake = 'Deepfake / Video manipulado',
  FotoDescontextualizada = 'Foto fuera de contexto',
  Portada = 'Portada / Encuadre impreso o digital',
}

export enum GlossaryCategory {
  HegemoniaMedios = 'Hegemonía y Medios',
  GuerraCognitiva = 'Guerra Cognitiva',
  ComunicacionPopular = 'Comunicación Popular',
}

export enum ParticipantRole {
  Estudiante = 'Estudiante',
  Comunicador = 'Comunicador/a',
  Vecino = 'Vecino/a',
}

export interface ObservatoryConfig {
  name: string;
  shortTitle: string;
  institution: string;
  centralCaseTitle: string;
  centralCaseSummary: string;
  academicCycle: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  weekResponsibility: string;
}

export interface AuthorTheory {
  id: string;
  author: string;
  work: string;
  yearOrContext: string;
  quote: string;
  explanation: string;
  caseApplication: string;
  category: GlossaryCategory;
  verifiedSearchUrl: string;
  verifiedSearchLabel: string;
  defaultVideoUrl: string;
  verificationNote: string;
}

export interface MediaAuditCase {
  id: string;
  title: string;
  format: CaseFormat;
  sourceLabel: string;
  dateLabel: string;
  dominantFrame: string;
  hiddenOrDecontextualized: string;
  applicableNormative: string;
  verdict: string;
  verdictCategory: 'Descontextualizado' | 'Manipulado / Falso' | 'Encuadre sesgado';
  isCustom?: boolean;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: GlossaryCategory;
  definition: string;
  practicalExample: string;
  reference: string;
}

export interface PopularStrategy {
  id: string;
  channel: string;
  title: string;
  territoryAction: string;
  caseConnection: string;
  expectedImpact: string;
}

export interface CommunityContribution {
  id: string;
  authorName: string;
  role: ParticipantRole;
  stance: string;
  comment: string;
  createdAt: string;
}

export interface NormativeInstrument {
  id: string;
  title: string;
  scope: 'Nacional (Venezuela)' | 'Internacional / Multilateral';
  publicationData: string;
  keyArticles: string;
  observatoryRelevance: string;
  officialReferenceUrl?: string;
  officialReferenceLabel?: string;
}

export interface VerifiedReference {
  id: string;
  group: 'clase' | 'externa';
  citation: string;
  contextNote: string;
  url?: string;
  urlLabel?: string;
  verifiedByTeam?: boolean;
}
