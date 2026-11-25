import React, { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { CognitiveDisputeDiagram } from './components/EditorialDiagrams';
import { InteractiveGlossarySection } from './components/InteractiveGlossarySection';
import { MediaAuditSection } from './components/MediaAuditSection';
import { NormativeAndSourcesSection } from './components/NormativeAndSourcesSection';
import { PopularCommunicationSection } from './components/PopularCommunicationSection';
import { TeamIdentitySection } from './components/TeamIdentitySection';
import { TheoreticalFrameworkSection } from './components/TheoreticalFrameworkSection';
import {
  AUTHOR_THEORIES,
  GLOSSARY_TERMS,
  INITIAL_CONTRIBUTIONS,
  INITIAL_MEDIA_CASES,
  INITIAL_SHARED_WORKSPACE,
  INITIAL_TEAM_MEMBERS,
  INITIAL_VERIFIED_REFERENCES,
  NORMATIVE_INSTRUMENTS,
  OBSERVATORY_CONFIG,
  POPULAR_STRATEGIES,
} from './data/observatoryData';
import {
  CommunityContribution,
  MediaAuditCase,
  TeamMember,
  VerifiedReference,
} from './types/observatory';

const STORAGE_KEYS = {
  team: 'radar_soberano_team_v1',
  workspace: 'radar_soberano_workspace_v1',
  authorVideos: 'radar_soberano_author_videos_v1',
  cases: 'radar_soberano_cases_v1',
  contributions: 'radar_soberano_contributions_v1',
  references: 'radar_soberano_references_v1',
};

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() =>
    readStorage(STORAGE_KEYS.team, INITIAL_TEAM_MEMBERS)
  );
  const [workspace, setWorkspace] = useState(() =>
    readStorage(STORAGE_KEYS.workspace, INITIAL_SHARED_WORKSPACE)
  );
  const [savedVideoUrls, setSavedVideoUrls] = useState<Record<string, string>>(() =>
    readStorage(STORAGE_KEYS.authorVideos, {})
  );
  const [mediaCases, setMediaCases] = useState<MediaAuditCase[]>(() =>
    readStorage(STORAGE_KEYS.cases, INITIAL_MEDIA_CASES)
  );
  const [contributions, setContributions] = useState<CommunityContribution[]>(() =>
    readStorage(STORAGE_KEYS.contributions, INITIAL_CONTRIBUTIONS)
  );
  const [references, setReferences] = useState<VerifiedReference[]>(() =>
    readStorage(STORAGE_KEYS.references, INITIAL_VERIFIED_REFERENCES)
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.team, JSON.stringify(teamMembers));
    } catch {
      // Ignore storage quota errors
    }
  }, [teamMembers]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.workspace, JSON.stringify(workspace));
    } catch {
      // Ignore storage quota errors
    }
  }, [workspace]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.authorVideos, JSON.stringify(savedVideoUrls));
    } catch {
      // Ignore storage quota errors
    }
  }, [savedVideoUrls]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.cases, JSON.stringify(mediaCases));
    } catch {
      // Ignore storage quota errors
    }
  }, [mediaCases]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.contributions, JSON.stringify(contributions));
    } catch {
      // Ignore storage quota errors
    }
  }, [contributions]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.references, JSON.stringify(references));
    } catch {
      // Ignore storage quota errors
    }
  }, [references]);

  const handleUpdateMember = (updated: TeamMember) => {
    setTeamMembers((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
  };

  const handleResetTeam = () => {
    setTeamMembers(INITIAL_TEAM_MEMBERS);
    setWorkspace(INITIAL_SHARED_WORKSPACE);
  };

  const handleUpdateWorkspace = (url: string, label: string, notes: string) => {
    setWorkspace({ url, label, notes });
  };

  const handleSaveVideoUrl = (authorId: string, url: string) => {
    setSavedVideoUrls((prev) => ({ ...prev, [authorId]: url }));
  };

  const handleAddMediaCase = (newCase: Omit<MediaAuditCase, 'id'>) => {
    const id = `case-custom-${Date.now()}`;
    setMediaCases((prev) => [{ ...newCase, id }, ...prev]);
  };

  const handleRemoveCustomCase = (id: string) => {
    setMediaCases((prev) => prev.filter((c) => c.id !== id));
  };

  const handleAddContribution = (entry: Omit<CommunityContribution, 'id' | 'createdAt'>) => {
    const today = new Date().toISOString().slice(0, 10);
    const id = `contrib-${Date.now()}`;
    setContributions((prev) => [{ ...entry, id, createdAt: today }, ...prev]);
  };

  const handleAddExternalReference = (ref: Omit<VerifiedReference, 'id'>) => {
    const id = `ref-team-${Date.now()}`;
    setReferences((prev) => [...prev, { ...ref, id }]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B]">
      {/* Barra superior: contrato estricto de 3 zonas */}
      <header className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
          <a
            href="#inicio"
            className="text-xl font-display text-[#3B28CC] tracking-tight whitespace-nowrap shrink-0"
          >
            {OBSERVATORY_CONFIG.shortTitle}
          </a>

          <nav
            aria-label="Navegación principal del observatorio"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700"
          >
            <a
              href="#identidad"
              className="hover:text-[#3B28CC] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Identidad
            </a>
            <a
              href="#marco-teorico"
              className="hover:text-[#3B28CC] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Marco Teórico
            </a>
            <a
              href="#desmontaje"
              className="hover:text-[#3B28CC] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Desmontaje
            </a>
            <a
              href="#contranarrativa"
              className="hover:text-[#3B28CC] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Contranarrativa
            </a>
            <a
              href="#fuentes"
              className="hover:text-[#3B28CC] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Fuentes
            </a>
          </nav>

          <div className="shrink-0">
            <a
              href="#participar"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-lg hover:bg-[#2F1FA8] transition-colors whitespace-nowrap shrink-0"
            >
              Participar
            </a>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main id="inicio" className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Editorial + Caso de Estudio Central */}
        <section className="py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs font-semibold text-stone-600 mb-3">
                  {OBSERVATORY_CONFIG.institution} · {OBSERVATORY_CONFIG.academicCycle}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-display text-[#3B28CC] leading-[1.08] tracking-tight text-balance">
                  {OBSERVATORY_CONFIG.name}
                </h1>
              </div>

              {/* Bloque del Caso de Estudio Central */}
              <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 space-y-2.5">
                <p className="text-xs font-semibold text-[#9D174D]">
                  Caso de Estudio Central Propuesto
                </p>
                <h2 className="text-lg sm:text-xl font-display text-stone-900 leading-snug">
                  {OBSERVATORY_CONFIG.centralCaseTitle}
                </h2>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {OBSERVATORY_CONFIG.centralCaseSummary}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#marco-teorico"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#3B28CC] rounded-lg hover:bg-[#2F1FA8] transition-colors whitespace-nowrap"
                >
                  Revisar Marco Teórico (Semana 9)
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#desmontaje"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#18181B] bg-[#10B981] rounded-lg hover:bg-[#059669] hover:text-white transition-colors whitespace-nowrap"
                >
                  Auditar Caso de Desinformación
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <CognitiveDisputeDiagram />
            </div>
          </div>

          {/* Tira de indicadores académicos debajo del split */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-200">
            <div className="bg-white border border-stone-200 rounded-xl p-4">
              <p className="text-xs text-stone-600">Semana 9 · Referentes</p>
              <p className="text-2xl font-display text-[#3B28CC] tabular-nums mt-1">
                {AUTHOR_THEORIES.length} Autores
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-4">
              <p className="text-xs text-stone-600">Semana 10 · Auditoría</p>
              <p className="text-2xl font-display text-[#9D174D] tabular-nums mt-1">
                {mediaCases.length} Casos
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-4">
              <p className="text-xs text-stone-600">Semana 10 · Glosario</p>
              <p className="text-2xl font-display text-[#065F46] tabular-nums mt-1">
                {GLOSSARY_TERMS.length} Conceptos
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-4">
              <p className="text-xs text-stone-600">Semana 11 · Audiencia</p>
              <p className="text-2xl font-display text-[#3B28CC] tabular-nums mt-1">
                {contributions.length} Aportes
              </p>
            </div>
          </div>

          {/* Navegación móvil rápida */}
          <nav
            aria-label="Accesos rápidos móviles"
            className="flex md:hidden flex-wrap items-center gap-2 mt-6 pt-4 border-t border-stone-200 text-xs font-semibold"
          >
            <a href="#identidad" className="px-3 py-1.5 bg-white border border-stone-200 rounded-md">
              Identidad
            </a>
            <a href="#marco-teorico" className="px-3 py-1.5 bg-white border border-stone-200 rounded-md">
              Marco Teórico
            </a>
            <a href="#desmontaje" className="px-3 py-1.5 bg-white border border-stone-200 rounded-md">
              Desmontaje
            </a>
            <a href="#glosario" className="px-3 py-1.5 bg-white border border-stone-200 rounded-md">
              Glosario
            </a>
            <a href="#contranarrativa" className="px-3 py-1.5 bg-white border border-stone-200 rounded-md">
              Contranarrativa
            </a>
            <a href="#fuentes" className="px-3 py-1.5 bg-white border border-stone-200 rounded-md">
              Fuentes
            </a>
          </nav>
        </section>

        {/* 01. Identidad del Equipo */}
        <TeamIdentitySection
          members={teamMembers}
          onUpdateMember={handleUpdateMember}
          onResetTeam={handleResetTeam}
          workspaceUrl={workspace.url}
          workspaceLabel={workspace.label}
          workspaceNotes={workspace.notes}
          onUpdateWorkspace={handleUpdateWorkspace}
        />

        {/* 02. Semana 9: Bases Teóricas y Apartados por Autor */}
        <TheoreticalFrameworkSection
          authors={AUTHOR_THEORIES}
          savedVideoUrls={savedVideoUrls}
          onSaveVideoUrl={handleSaveVideoUrl}
        />

        {/* 03. Semana 10: Desmontaje de Noticia / Video */}
        <MediaAuditSection
          cases={mediaCases}
          onAddCase={handleAddMediaCase}
          onRemoveCustomCase={handleRemoveCustomCase}
        />

        {/* 04. Semana 10: Glosario Interactivo */}
        <InteractiveGlossarySection terms={GLOSSARY_TERMS} />

        {/* 05. Semana 11: Propuesta de Comunicación Popular y Participación */}
        <PopularCommunicationSection
          strategies={POPULAR_STRATEGIES}
          contributions={contributions}
          onAddContribution={handleAddContribution}
        />

        {/* 06. Normativas Vigentes y Referencias Verificadas */}
        <NormativeAndSourcesSection
          norms={NORMATIVE_INSTRUMENTS}
          references={references}
          onAddExternalReference={handleAddExternalReference}
        />
      </main>

      {/* Pie de página editorial limpio */}
      <footer className="border-t border-stone-200 bg-white mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-600">
          <div>
            <p className="font-display text-sm text-[#3B28CC]">{OBSERVATORY_CONFIG.name}</p>
            <p className="mt-1">
              Proyecto académico universitario · Semanas 9, 10 y 11 · LAUICOM
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://lauicom.edu.ve/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B28CC] underline underline-offset-4"
            >
              Portal LAUICOM
            </a>
            <a
              href="https://www.mincyt.gob.ve/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B28CC] underline underline-offset-4"
            >
              Portal MINCYT
            </a>
            <a
              href="https://www.youtube.com/@LAUICOM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B28CC] underline underline-offset-4"
            >
              YouTube @LAUICOM
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
