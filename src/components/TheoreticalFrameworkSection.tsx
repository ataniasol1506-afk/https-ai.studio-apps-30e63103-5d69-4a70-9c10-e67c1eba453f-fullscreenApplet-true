import React, { useState } from 'react';
import { AlertCircle, Check, ExternalLink, Play, Search, Video } from 'lucide-react';
import { AuthorTheory } from '../types/observatory';
import { extractYouTubeId, sanitizeExternalUrl } from '../utils/urlValidation';

interface TheoreticalFrameworkSectionProps {
  authors: AuthorTheory[];
  savedVideoUrls: Record<string, string>;
  onSaveVideoUrl: (authorId: string, url: string) => void;
}

export const TheoreticalFrameworkSection: React.FC<TheoreticalFrameworkSectionProps> = ({
  authors,
  savedVideoUrls,
  onSaveVideoUrl,
}) => {
  const [selectedAuthorId, setSelectedAuthorId] = useState<string>(authors[0]?.id ?? '');
  const [urlInputs, setUrlInputs] = useState<Record<string, string>>({});
  const [urlErrors, setUrlErrors] = useState<Record<string, string>>({});
  const [previewOpen, setPreviewOpen] = useState<Record<string, boolean>>({});
  const [savedNotice, setSavedNotice] = useState<Record<string, boolean>>({});

  const activeAuthor = authors.find((a) => a.id === selectedAuthorId) ?? authors[0];

  const handleSaveUrl = (authorId: string) => {
    const raw = (urlInputs[authorId] ?? savedVideoUrls[authorId] ?? '').trim();
    if (!raw) {
      onSaveVideoUrl(authorId, '');
      setUrlErrors((prev) => ({ ...prev, [authorId]: '' }));
      setPreviewOpen((prev) => ({ ...prev, [authorId]: false }));
      return;
    }

    const clean = sanitizeExternalUrl(raw);
    if (!clean) {
      setUrlErrors((prev) => ({
        ...prev,
        [authorId]: 'Ingresa una URL válida de YouTube o video que comience con https://.',
      }));
      return;
    }

    setUrlErrors((prev) => ({ ...prev, [authorId]: '' }));
    onSaveVideoUrl(authorId, clean);
    setSavedNotice((prev) => ({ ...prev, [authorId]: true }));
    setTimeout(() => {
      setSavedNotice((prev) => ({ ...prev, [authorId]: false }));
    }, 2000);
  };

  return (
    <section id="marco-teorico" className="py-12 border-t border-stone-200">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-wider text-stone-600 mb-1">
          02. Semana 9 · Fundamentos Teóricos del Observatorio
        </p>
        <h2 className="text-2xl md:text-3xl font-display text-[#3B28CC] tracking-tight">
          Bases Teóricas y Apartados por Autor
        </h2>
        <p className="text-sm text-stone-700 max-w-3xl mt-2">
          Cada apartado articula la cita clave, la obra de referencia y su aplicación directa al caso de estudio sobre
          crisis, recursos estratégicos y controversia del Esequibo, junto con un módulo verificable de video
          relacionado.
        </p>
      </div>

      {/* Selector rápido de autores */}
      <div
        className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-stone-200"
        role="tablist"
        aria-label="Seleccionar autor para vista destacada"
      >
        {authors.map((item, idx) => {
          const active = item.id === activeAuthor?.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedAuthorId(item.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-[#3B28CC] text-white'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {idx + 1}. {item.author}
            </button>
          );
        })}
      </div>

      {/* Tarjetas completas por autor (vista enfocada destacada + índice completo debajo) */}
      <div className="space-y-6">
        {authors.map((author, index) => {
          const isHighlighted = author.id === activeAuthor?.id;
          const currentInput = urlInputs[author.id] ?? savedVideoUrls[author.id] ?? author.defaultVideoUrl;
          const persistedUrl = savedVideoUrls[author.id] ?? author.defaultVideoUrl;
          const safePersistedUrl = sanitizeExternalUrl(persistedUrl);
          const youtubeId = safePersistedUrl ? extractYouTubeId(safePersistedUrl) : null;
          const errorMsg = urlErrors[author.id];
          const isPreview = previewOpen[author.id];
          const isSaved = savedNotice[author.id];

          return (
            <article
              key={author.id}
              id={`autor-${author.id}`}
              className={`bg-white rounded-xl p-6 md:p-7 transition-colors ${
                isHighlighted ? 'border-2 border-[#3B28CC]' : 'border border-stone-200'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Columna de teoría y cita */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
                    <span className="font-semibold text-[#3B28CC]">
                      0{index + 1}. {author.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{author.work}</span>
                    <span aria-hidden="true">·</span>
                    <span>{author.yearOrContext}</span>
                  </div>

                  <h3 className="text-2xl font-display text-stone-900 leading-tight">{author.author}</h3>

                  {/* Cita clave sin barra lateral gruesa: separadores finos superior e inferior */}
                  <blockquote className="py-4 border-y border-stone-200">
                    <p className="text-base md:text-lg italic text-stone-900 leading-relaxed">
                      “{author.quote}”
                    </p>
                    <footer className="text-xs text-stone-600 mt-1.5">
                      Referencia: <span className="font-semibold text-stone-800">{author.work}</span>
                    </footer>
                  </blockquote>

                  <div className="space-y-3 text-sm text-stone-700 leading-relaxed max-w-prose">
                    <p>{author.explanation}</p>
                    <p className="bg-[#FAF9F6] border border-stone-200 rounded-lg p-3.5 text-stone-800">
                      <strong className="font-semibold text-[#3B28CC]">Aplicación al caso de estudio: </strong>
                      {author.caseApplication}
                    </p>
                  </div>
                </div>

                {/* Columna de Video relacionado verificable */}
                <div className="lg:col-span-5 bg-[#FAF9F6] border border-stone-200 rounded-xl p-5 space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-display text-stone-900 inline-flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#EC4899]" aria-hidden="true" />
                      Video relacionado
                    </h4>
                    <span className="text-xs font-semibold text-[#065F46]">Recurso audiovisual</span>
                  </div>

                  <div>
                    <label
                      htmlFor={`video-url-${author.id}`}
                      className="block text-xs font-semibold text-stone-700 mb-1.5"
                    >
                      Pegar URL de YouTube / video verificada
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        id={`video-url-${author.id}`}
                        type="url"
                        value={currentInput}
                        onChange={(e) =>
                          setUrlInputs((prev) => ({ ...prev, [author.id]: e.target.value }))
                        }
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="flex-1 min-w-0 px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                      />
                      <button
                        type="button"
                        onClick={() => handleSaveUrl(author.id)}
                        className="px-3.5 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-lg hover:bg-[#2F1FA8] transition-colors whitespace-nowrap shrink-0"
                      >
                        {isSaved ? (
                          <span className="inline-flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            Guardado
                          </span>
                        ) : (
                          'Vincular URL'
                        )}
                      </button>
                    </div>
                    {errorMsg && <p className="text-xs text-rose-700 mt-1.5">{errorMsg}</p>}
                  </div>

                  {/* Acciones reales de búsqueda o vista previa */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <a
                      href={author.verifiedSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
                    >
                      <Search className="w-3.5 h-3.5 text-[#3B28CC]" aria-hidden="true" />
                      {author.verifiedSearchLabel}
                    </a>

                    {safePersistedUrl && (
                      <a
                        href={safePersistedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#18181B] bg-[#10B981] rounded-lg hover:bg-[#059669] hover:text-white transition-colors whitespace-nowrap"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        Abrir enlace directo
                      </a>
                    )}

                    {youtubeId && (
                      <button
                        type="button"
                        onClick={() =>
                          setPreviewOpen((prev) => ({ ...prev, [author.id]: !prev[author.id] }))
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#EC4899] rounded-lg hover:bg-[#DB2777] transition-colors whitespace-nowrap"
                      >
                        <Play className="w-3.5 h-3.5" aria-hidden="true" />
                        {isPreview ? 'Ocultar vista previa' : 'Vista previa'}
                      </button>
                    )}
                  </div>

                  {youtubeId && isPreview && (
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-stone-300 bg-stone-900">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                        title={`Vista previa de video relacionado sobre ${author.author}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  <p className="text-xs text-stone-600 leading-relaxed flex items-start gap-2 pt-2 border-t border-stone-200">
                    <AlertCircle className="w-4 h-4 text-[#3B28CC] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{author.verificationNote}</span>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
