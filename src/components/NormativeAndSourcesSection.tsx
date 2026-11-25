import React, { useState } from 'react';
import { ExternalLink, Plus, Scale, ShieldCheck } from 'lucide-react';
import { NormativeInstrument, VerifiedReference } from '../types/observatory';
import { sanitizeExternalUrl } from '../utils/urlValidation';

interface NormativeAndSourcesSectionProps {
  norms: NormativeInstrument[];
  references: VerifiedReference[];
  onAddExternalReference: (ref: Omit<VerifiedReference, 'id'>) => void;
}

export const NormativeAndSourcesSection: React.FC<NormativeAndSourcesSectionProps> = ({
  norms,
  references,
  onAddExternalReference,
}) => {
  const [citation, setCitation] = useState('');
  const [contextNote, setContextNote] = useState('');
  const [url, setUrl] = useState('');
  const [urlLabel, setUrlLabel] = useState('');
  const [urlError, setUrlError] = useState('');

  const classRefs = references.filter((r) => r.group === 'clase');
  const externalRefs = references.filter((r) => r.group === 'externa');

  const handleAddRef = (e: React.FormEvent) => {
    e.preventDefault();
    if (!citation.trim()) return;

    let cleanUrl: string | undefined;
    if (url.trim()) {
      const sanitized = sanitizeExternalUrl(url);
      if (!sanitized) {
        setUrlError('La URL debe comenzar con https:// o http://.');
        return;
      }
      cleanUrl = sanitized;
    }

    setUrlError('');
    onAddExternalReference({
      group: 'externa',
      citation: citation.trim(),
      contextNote: contextNote.trim() || 'Fuente externa verificada directamente por el equipo.',
      url: cleanUrl,
      urlLabel: urlLabel.trim() || cleanUrl,
      verifiedByTeam: true,
    });

    setCitation('');
    setContextNote('');
    setUrl('');
    setUrlLabel('');
  };

  return (
    <section id="fuentes" className="py-12 border-t border-stone-200">
      {/* Normativas vigentes */}
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-wider text-stone-600 mb-1">
          06. Validez Académica y Marco Jurídico Vigente
        </p>
        <h2 className="text-2xl md:text-3xl font-display text-[#3B28CC] tracking-tight">
          Normativas Vigentes Aplicables al Observatorio
        </h2>
        <p className="text-sm text-stone-700 max-w-3xl mt-2">
          Instrumentos constitucionales, legales e internacionales vigentes que sustentan la validez académica,
          comunicacional y territorial del análisis crítico desarrollado en LAUICOM.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {norms.map((norm) => (
          <article key={norm.id} className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 mb-2">
                <span className="font-semibold text-[#3B28CC] inline-flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" aria-hidden="true" />
                  {norm.scope}
                </span>
                <span>{norm.publicationData}</span>
              </div>
              <h3 className="text-lg font-display text-stone-900 leading-snug">{norm.title}</h3>
              <p className="text-sm text-stone-700 mt-2.5 leading-relaxed">{norm.keyArticles}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
              <p className="text-xs text-stone-700">
                <strong className="font-semibold text-[#065F46]">Pertinencia en el observatorio: </strong>
                {norm.observatoryRelevance}
              </p>
              {norm.officialReferenceUrl && (
                <a
                  href={norm.officialReferenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B28CC] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  {norm.officialReferenceLabel}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Referencias y Fuentes Verificadas */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-display text-[#3B28CC] tracking-tight">
          Referencias y Fuentes Verificadas
        </h2>
        <p className="text-sm text-stone-700 max-w-3xl mt-2">
          Distinción explícita entre los textos y lineamientos trabajados en clase (LAUICOM / MINCYT / autores
          citados) y las fuentes externas verificadas directamente por el equipo, sin enlaces inventados ni citas
          apócrifas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Columna 1: Textos y lineamientos de clase */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
          <div className="border-b border-stone-200 pb-3">
            <h3 className="text-lg font-display text-[#3B28CC]">
              A. Textos y Lineamientos Trabajados en Clase (LAUICOM / MINCYT)
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Bibliografía obligatoria y portales institucionales oficiales verificados.
            </p>
          </div>

          <ul className="space-y-4">
            {classRefs.map((ref) => (
              <li key={ref.id} className="pb-4 border-b border-stone-100 last:border-b-0 last:pb-0">
                <p className="text-sm text-stone-900 leading-relaxed">{ref.citation}</p>
                <p className="text-xs text-stone-600 mt-1">{ref.contextNote}</p>
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B28CC] hover:underline mt-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    {ref.urlLabel || ref.url}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 2: Fuentes externas verificadas por el equipo */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-5">
          <div className="border-b border-stone-200 pb-3">
            <h3 className="text-lg font-display text-[#065F46] inline-flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              B. Fuentes Externas y Enlaces Verificados por el Equipo
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Solo se listan portales oficiales comprobados o enlaces añadidos y revisados por el grupo.
            </p>
          </div>

          <ul className="space-y-4">
            {externalRefs.map((ref) => (
              <li key={ref.id} className="pb-4 border-b border-stone-100 last:border-b-0 last:pb-0">
                <p className="text-sm text-stone-900 leading-relaxed">{ref.citation}</p>
                <p className="text-xs text-stone-600 mt-1">{ref.contextNote}</p>
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#065F46] hover:underline mt-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    {ref.urlLabel || ref.url}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Formulario para añadir nueva fuente verificada */}
          <form onSubmit={handleAddRef} className="bg-[#FAF9F6] border border-stone-200 rounded-lg p-4 space-y-3">
            <p className="text-xs font-semibold text-stone-800">
              Incorporar fuente o enlace verificado para la defensa
            </p>
            <input
              type="text"
              value={citation}
              onChange={(e) => setCitation(e.target.value)}
              placeholder="Cita bibliográfica o título del documento oficial"
              className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://... (URL verificada)"
                className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              />
              <input
                type="text"
                value={urlLabel}
                onChange={(e) => setUrlLabel(e.target.value)}
                placeholder="Etiqueta del enlace"
                className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              />
            </div>
            <input
              type="text"
              value={contextNote}
              onChange={(e) => setContextNote(e.target.value)}
              placeholder="Nota de verificación (ej. fecha de consulta)"
              className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
            />
            {urlError && <p className="text-xs text-rose-700">{urlError}</p>}
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-md hover:bg-[#2F1FA8] transition-colors whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" aria-hidden="true" />
              Registrar fuente verificada
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
