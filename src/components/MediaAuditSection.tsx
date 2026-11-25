import React, { useState } from 'react';
import { FileSearch, Plus, Trash2 } from 'lucide-react';
import { CaseFormat, MediaAuditCase } from '../types/observatory';
import { FramingAnatomyDiagram } from './EditorialDiagrams';

interface MediaAuditSectionProps {
  cases: MediaAuditCase[];
  onAddCase: (newCase: Omit<MediaAuditCase, 'id'>) => void;
  onRemoveCustomCase: (id: string) => void;
}

export const MediaAuditSection: React.FC<MediaAuditSectionProps> = ({
  cases,
  onAddCase,
  onRemoveCustomCase,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(cases[0]?.id ?? '');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const [title, setTitle] = useState('');
  const [format, setFormat] = useState<CaseFormat>(CaseFormat.Portada);
  const [sourceLabel, setSourceLabel] = useState('');
  const [dominantFrame, setDominantFrame] = useState('');
  const [hiddenOrDecontextualized, setHiddenOrDecontextualized] = useState('');
  const [applicableNormative, setApplicableNormative] = useState(
    'Arts. 57 y 58 CRBV · Ley RESORTE · Acuerdo de Ginebra de 1966'
  );
  const [verdict, setVerdict] = useState('');
  const [verdictCategory, setVerdictCategory] = useState<MediaAuditCase['verdictCategory']>(
    'Descontextualizado'
  );

  const activeCase = cases.find((c) => c.id === selectedCaseId) ?? cases[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !dominantFrame.trim() || !hiddenOrDecontextualized.trim() || !verdict.trim()) {
      return;
    }

    onAddCase({
      title: title.trim(),
      format,
      sourceLabel: sourceLabel.trim() || 'Caso cargado por el equipo investigador',
      dateLabel: 'Registro nuevo · Semana 10',
      dominantFrame: dominantFrame.trim(),
      hiddenOrDecontextualized: hiddenOrDecontextualized.trim(),
      applicableNormative: applicableNormative.trim() || 'Arts. 57 y 58 CRBV',
      verdict: verdict.trim(),
      verdictCategory,
      isCustom: true,
    });

    setTitle('');
    setSourceLabel('');
    setDominantFrame('');
    setHiddenOrDecontextualized('');
    setVerdict('');
    setShowAddForm(false);
  };

  return (
    <section id="desmontaje" className="py-12 border-t border-stone-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-wider text-stone-600 mb-1">
            03. Semana 10 · Auditoría Crítica de Piezas Mediáticas
          </p>
          <h2 className="text-2xl md:text-3xl font-display text-[#3B28CC] tracking-tight">
            Desmontaje de Noticia, Audio o Video
          </h2>
          <p className="text-sm text-stone-700 max-w-3xl mt-2">
            Plantilla interactiva de auditoría para examinar portadas, audios virales, fotos fuera de contexto o
            deepfakes vinculados a recursos estratégicos y al Esequibo, con opción de cargar nuevos casos de estudio.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddForm((prev) => !prev)}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-lg hover:bg-[#2F1FA8] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          {showAddForm ? 'Cerrar formulario' : 'Cargar nuevo caso'}
        </button>
      </div>

      {/* Esquema visual del método */}
      <div className="mb-8">
        <FramingAnatomyDiagram />
      </div>

      {/* Formulario interactivo para cargar nuevos casos */}
      {showAddForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#3B28CC] rounded-xl p-6 mb-8 space-y-4"
        >
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h3 className="text-lg font-display text-[#3B28CC]">
              Nueva Ficha de Auditoría Mediática
            </h3>
            <span className="text-xs text-stone-600">Se guarda localmente en el observatorio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="case-title" className="block text-xs font-semibold text-stone-700 mb-1">
                Titular o descripción de la pieza analizada
              </label>
              <input
                id="case-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ej. Portada digital sobre concesiones energéticas sin mención del Acuerdo de Ginebra"
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                required
              />
            </div>

            <div>
              <label htmlFor="case-format" className="block text-xs font-semibold text-stone-700 mb-1">
                Formato de circulación
              </label>
              <select
                id="case-format"
                value={format}
                onChange={(e) => setFormat(e.target.value as CaseFormat)}
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              >
                {Object.values(CaseFormat).map((fmt) => (
                  <option key={fmt} value={fmt}>
                    {fmt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="case-verdict-cat" className="block text-xs font-semibold text-stone-700 mb-1">
                Clasificación de verificación
              </label>
              <select
                id="case-verdict-cat"
                value={verdictCategory}
                onChange={(e) =>
                  setVerdictCategory(e.target.value as MediaAuditCase['verdictCategory'])
                }
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              >
                <option value="Descontextualizado">Descontextualizado</option>
                <option value="Manipulado / Falso">Manipulado / Falso</option>
                <option value="Encuadre sesgado">Encuadre sesgado</option>
              </select>
            </div>

            <div>
              <label htmlFor="case-source" className="block text-xs font-semibold text-stone-700 mb-1">
                Medio, canal o plataforma de origen
              </label>
              <input
                id="case-source"
                type="text"
                value={sourceLabel}
                onChange={(e) => setSourceLabel(e.target.value)}
                placeholder="Ej. Cadena de WhatsApp / Portal digital"
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              />
            </div>

            <div>
              <label htmlFor="case-norm" className="block text-xs font-semibold text-stone-700 mb-1">
                Normativa o marco jurídico aplicable
              </label>
              <input
                id="case-norm"
                type="text"
                value={applicableNormative}
                onChange={(e) => setApplicableNormative(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              />
            </div>

            <div>
              <label htmlFor="case-frame" className="block text-xs font-semibold text-stone-700 mb-1">
                Encuadre dominante (qué narrativa instala)
              </label>
              <textarea
                id="case-frame"
                rows={3}
                value={dominantFrame}
                onChange={(e) => setDominantFrame(e.target.value)}
                placeholder="Describe el ángulo, tono emocional y matriz discursiva..."
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                required
              />
            </div>

            <div>
              <label htmlFor="case-hidden" className="block text-xs font-semibold text-stone-700 mb-1">
                Qué oculta o descontextualiza
              </label>
              <textarea
                id="case-hidden"
                rows={3}
                value={hiddenOrDecontextualized}
                onChange={(e) => setHiddenOrDecontextualized(e.target.value)}
                placeholder="Indica los hechos omitidos, fechas reales o tratados silenciados..."
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="case-verdict" className="block text-xs font-semibold text-stone-700 mb-1">
                Veredicto / verificación documentada
              </label>
              <textarea
                id="case-verdict"
                rows={2}
                value={verdict}
                onChange={(e) => setVerdict(e.target.value)}
                placeholder="Conclusión sustentada con fuentes verificables..."
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-lg hover:bg-[#2F1FA8] transition-colors whitespace-nowrap"
            >
              Guardar ficha en el observatorio
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors whitespace-nowrap"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Selector y ficha activa de desmontaje */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 space-y-2.5" role="list" aria-label="Casos de auditoría">
          {cases.map((item, idx) => {
            const active = item.id === activeCase?.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-colors ${
                  active
                    ? 'bg-white border-[#3B28CC] ring-1 ring-[#3B28CC]'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCaseId(item.id)}
                  className="w-full text-left p-4"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-stone-600 mb-1">
                    <span className="font-semibold text-[#3B28CC] tabular-nums">
                      Caso 0{idx + 1} · {item.format}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-stone-900 leading-snug">{item.title}</p>
                  <p className="text-xs text-stone-600 mt-1.5">
                    Veredicto: <span className="font-semibold text-stone-800">{item.verdictCategory}</span>
                  </p>
                </button>
                {item.isCustom && (
                  <div className="px-4 pb-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => onRemoveCustomCase(item.id)}
                      className="inline-flex items-center gap-1 text-xs text-rose-700 hover:text-rose-900"
                    >
                      <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                      Eliminar caso propio
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Vista detallada de auditoría */}
        {activeCase && (
          <article className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-6 md:p-7 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 mb-2">
                <span className="font-semibold text-[#9D174D]">{activeCase.format}</span>
                <span aria-hidden="true">·</span>
                <span>{activeCase.sourceLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{activeCase.dateLabel}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display text-stone-900 leading-snug">
                {activeCase.title}
              </h3>
            </div>

            <dl className="space-y-5 text-sm">
              <div className="pb-4 border-b border-stone-100">
                <dt className="text-xs font-semibold text-[#3B28CC] mb-1.5">
                  1. Encuadre dominante detectado
                </dt>
                <dd className="text-stone-800 leading-relaxed">{activeCase.dominantFrame}</dd>
              </div>

              <div className="pb-4 border-b border-stone-100">
                <dt className="text-xs font-semibold text-[#9D174D] mb-1.5">
                  2. Qué oculta, recorta o descontextualiza
                </dt>
                <dd className="text-stone-800 leading-relaxed">
                  {activeCase.hiddenOrDecontextualized}
                </dd>
              </div>

              <div className="pb-4 border-b border-stone-100">
                <dt className="text-xs font-semibold text-stone-700 mb-1.5">
                  3. Normativa vigente y referencia aplicable
                </dt>
                <dd className="text-stone-700 leading-relaxed">{activeCase.applicableNormative}</dd>
              </div>

              <div className="bg-[#ECFDF5] border border-[#10B981] rounded-lg p-4">
                <dt className="text-xs font-semibold text-[#065F46] mb-1 inline-flex items-center gap-1.5">
                  <FileSearch className="w-4 h-4" aria-hidden="true" />
                  4. Veredicto del Observatorio · {activeCase.verdictCategory}
                </dt>
                <dd className="text-stone-900 font-medium leading-relaxed mt-1">{activeCase.verdict}</dd>
              </div>
            </dl>
          </article>
        )}
      </div>
    </section>
  );
};
