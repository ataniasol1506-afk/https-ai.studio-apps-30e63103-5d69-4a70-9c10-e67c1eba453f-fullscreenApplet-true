import React, { useMemo, useState } from 'react';
import { Check, Copy, Download, MessageSquarePlus } from 'lucide-react';
import { CommunityContribution, ParticipantRole, PopularStrategy } from '../types/observatory';
import { PopularPraxisDiagram } from './EditorialDiagrams';

interface PopularCommunicationSectionProps {
  strategies: PopularStrategy[];
  contributions: CommunityContribution[];
  onAddContribution: (entry: Omit<CommunityContribution, 'id' | 'createdAt'>) => void;
}

export const PopularCommunicationSection: React.FC<PopularCommunicationSectionProps> = ({
  strategies,
  contributions,
  onAddContribution,
}) => {
  const [authorName, setAuthorName] = useState('');
  const [role, setRole] = useState<ParticipantRole>(ParticipantRole.Estudiante);
  const [stance, setStance] = useState('');
  const [comment, setComment] = useState('');
  const [roleFilter, setRoleFilter] = useState<'Todos' | ParticipantRole>('Todos');
  const [copiedMode, setCopiedMode] = useState<'text' | 'json' | null>(null);

  const filteredContributions = useMemo(() => {
    if (roleFilter === 'Todos') return contributions;
    return contributions.filter((c) => c.role === roleFilter);
  }, [contributions, roleFilter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !stance.trim() || !comment.trim()) return;

    onAddContribution({
      authorName: authorName.trim(),
      role,
      stance: stance.trim(),
      comment: comment.trim(),
    });

    setAuthorName('');
    setStance('');
    setComment('');
  };

  const handleCopyText = async () => {
    const lines = filteredContributions.map(
      (c, idx) =>
        `${idx + 1}. ${c.authorName} (${c.role}) — ${c.createdAt}\nPostura: ${c.stance}\nAporte: ${c.comment}`
    );
    const payload = `APORTES DEL OBSERVATORIO RADAR SOBERANO (${filteredContributions.length} registros)\n\n${lines.join('\n\n')}`;
    try {
      await navigator.clipboard.writeText(payload);
      setCopiedMode('text');
      setTimeout(() => setCopiedMode(null), 2200);
    } catch {
      // Fallback ignored if clipboard permissions restricted
    }
  };

  const handleCopyJson = async () => {
    const json = JSON.stringify(filteredContributions, null, 2);
    try {
      await navigator.clipboard.writeText(json);
      setCopiedMode('json');
      setTimeout(() => setCopiedMode(null), 2200);
    } catch {
      // Fallback ignored
    }
  };

  const handleDownloadJson = () => {
    const json = JSON.stringify(filteredContributions, null, 2);
    const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'aportes_observatorio_radar_soberano.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contranarrativa" className="py-12 border-t border-stone-200">
      {/* Parte 1: Propuesta de Comunicación Popular */}
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-wider text-stone-600 mb-1">
          05. Semana 11 · Praxis Comunal y Contranarrativa
        </p>
        <h2 className="text-2xl md:text-3xl font-display text-[#3B28CC] tracking-tight">
          Propuesta de Comunicación Popular (Contranarrativa)
        </h2>
        <p className="text-sm text-stone-700 max-w-3xl mt-2">
          Estrategias territoriales y comunitarias inspiradas en Paulo Freire y Rosa Luxemburg para responder a la
          desinformación sobre recursos estratégicos y el Esequibo desde el diálogo y la producción colectiva.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-12">
        <div className="lg:col-span-5">
          <PopularPraxisDiagram />
        </div>

        <div className="lg:col-span-7 space-y-4">
          {strategies.map((strategy, idx) => (
            <article key={strategy.id} className="bg-white border border-stone-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 mb-1.5">
                <span className="font-semibold text-[#065F46] tabular-nums">
                  0{idx + 1}. {strategy.channel}
                </span>
              </div>
              <h3 className="text-lg font-display text-stone-900">{strategy.title}</h3>
              <p className="text-sm text-stone-700 mt-2 leading-relaxed">{strategy.territoryAction}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-stone-100 text-xs">
                <div>
                  <span className="font-semibold text-[#3B28CC] block mb-0.5">
                    Vínculo con el caso de estudio
                  </span>
                  <span className="text-stone-700">{strategy.caseConnection}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#9D174D] block mb-0.5">
                    Incidencia esperada
                  </span>
                  <span className="text-stone-700">{strategy.expectedImpact}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Parte 2: Módulo interactivo Participa y Alimenta el Observatorio */}
      <div id="participar" className="bg-white border-2 border-[#3B28CC] rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5 mb-6">
          <div>
            <p className="text-xs font-semibold text-[#9D174D] mb-1">
              Módulo Participativo · Audiencia, Docentes y Comunidad
            </p>
            <h3 className="text-2xl font-display text-[#3B28CC]">
              Participa y Alimenta el Observatorio
            </h3>
            <p className="text-sm text-stone-700 mt-1 max-w-2xl">
              Envía tu postura, ejemplo territorial o contranarrativa. Cada aporte se integra en vivo al registro y
              puede exportarse en texto o JSON para la entrega final del equipo.
            </p>
          </div>

          <div className="bg-[#FAF9F6] border border-stone-200 rounded-lg px-4 py-2.5 shrink-0">
            <span className="block text-xs text-stone-600">Aportes registrados</span>
            <span className="text-2xl font-display text-[#3B28CC] tabular-nums">
              {contributions.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formulario de envío */}
          <form onSubmit={handleSubmit} className="lg:col-span-5 space-y-4">
            <div>
              <label htmlFor="part-name" className="block text-xs font-semibold text-stone-700 mb-1">
                Nombre o alias
              </label>
              <input
                id="part-name"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Ej. Valeria S. / Vocería Comunal"
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                required
              />
            </div>

            <div>
              <label htmlFor="part-role" className="block text-xs font-semibold text-stone-700 mb-1">
                Rol participante
              </label>
              <select
                id="part-role"
                value={role}
                onChange={(e) => setRole(e.target.value as ParticipantRole)}
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
              >
                {Object.values(ParticipantRole).map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="part-stance" className="block text-xs font-semibold text-stone-700 mb-1">
                Postura o línea contranarrativa
              </label>
              <input
                id="part-stance"
                type="text"
                value={stance}
                onChange={(e) => setStance(e.target.value)}
                placeholder="Ej. Contraste jurídico con el Acuerdo de Ginebra"
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                required
              />
            </div>

            <div>
              <label htmlFor="part-comment" className="block text-xs font-semibold text-stone-700 mb-1">
                Comentario o aporte al observatorio
              </label>
              <textarea
                id="part-comment"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Describe qué narrativa detectaste en tu comunidad o qué pieza popular propones..."
                className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#EC4899] rounded-lg hover:bg-[#DB2777] transition-colors"
            >
              <MessageSquarePlus className="w-4 h-4" aria-hidden="true" />
              Publicar aporte en vivo
            </button>
          </form>

          {/* Feed de opiniones y exportación */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-200">
              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filtrar opiniones por rol">
                {(['Todos', ...Object.values(ParticipantRole)] as const).map((r) => {
                  const active = roleFilter === r;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRoleFilter(r)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-[#3B28CC] text-white'
                          : 'bg-[#FAF9F6] text-stone-700 border border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-[#FAF9F6] border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
                >
                  {copiedMode === 'text' ? (
                    <Check className="w-3.5 h-3.5 text-[#065F46]" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  {copiedMode === 'text' ? 'Texto copiado' : 'Copiar texto'}
                </button>
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-[#FAF9F6] border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
                >
                  {copiedMode === 'json' ? (
                    <Check className="w-3.5 h-3.5 text-[#065F46]" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  {copiedMode === 'json' ? 'JSON copiado' : 'Copiar JSON'}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#18181B] bg-[#10B981] rounded-lg hover:bg-[#059669] hover:text-white transition-colors whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  Descargar JSON
                </button>
              </div>
            </div>

            {filteredContributions.length === 0 ? (
              <p className="text-sm text-stone-600 py-6 text-center">
                No hay aportes registrados todavía para el rol seleccionado.
              </p>
            ) : (
              <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                {filteredContributions.map((item) => (
                  <article
                    key={item.id}
                    className="bg-[#FAF9F6] border border-stone-200 rounded-xl p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-900">{item.authorName}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-[#3B28CC]">{item.role}</span>
                      </div>
                      <span className="tabular-nums">{item.createdAt}</span>
                    </div>
                    <p className="text-sm font-semibold text-[#9D174D]">{item.stance}</p>
                    <p className="text-sm text-stone-800 mt-1.5 leading-relaxed">{item.comment}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
