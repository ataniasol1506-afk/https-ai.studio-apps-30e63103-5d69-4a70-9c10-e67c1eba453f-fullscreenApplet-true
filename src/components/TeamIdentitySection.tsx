import React, { useState } from 'react';
import { Check, Edit3, ExternalLink, RotateCcw, Users } from 'lucide-react';
import { TeamMember } from '../types/observatory';
import { sanitizeExternalUrl } from '../utils/urlValidation';

interface TeamIdentitySectionProps {
  members: TeamMember[];
  onUpdateMember: (updated: TeamMember) => void;
  onResetTeam: () => void;
  workspaceUrl: string;
  workspaceLabel: string;
  workspaceNotes: string;
  onUpdateWorkspace: (url: string, label: string, notes: string) => void;
}

export const TeamIdentitySection: React.FC<TeamIdentitySectionProps> = ({
  members,
  onUpdateMember,
  onResetTeam,
  workspaceUrl,
  workspaceLabel,
  workspaceNotes,
  onUpdateWorkspace,
}) => {
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
  const [draftMember, setDraftMember] = useState<TeamMember | null>(null);

  const [isEditingWorkspace, setIsEditingWorkspace] = useState(false);
  const [draftUrl, setDraftUrl] = useState(workspaceUrl);
  const [draftLabel, setDraftLabel] = useState(workspaceLabel);
  const [draftNotes, setDraftNotes] = useState(workspaceNotes);
  const [urlError, setUrlError] = useState('');

  const startEditMember = (member: TeamMember) => {
    setEditingMemberId(member.id);
    setDraftMember({ ...member });
  };

  const saveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftMember) return;
    if (!draftMember.name.trim() || !draftMember.role.trim()) return;
    onUpdateMember({
      ...draftMember,
      name: draftMember.name.trim(),
      role: draftMember.role.trim(),
      focus: draftMember.focus.trim(),
      weekResponsibility: draftMember.weekResponsibility.trim(),
    });
    setEditingMemberId(null);
    setDraftMember(null);
  };

  const saveWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = sanitizeExternalUrl(draftUrl);
    if (draftUrl.trim() && !clean) {
      setUrlError('Ingresa una URL válida que comience con https:// o http://.');
      return;
    }
    setUrlError('');
    onUpdateWorkspace(clean || '', draftLabel.trim() || 'Espacio compartido del equipo', draftNotes.trim());
    setIsEditingWorkspace(false);
  };

  const safeWorkspaceLink = sanitizeExternalUrl(workspaceUrl);

  return (
    <section id="identidad" className="py-12 border-t border-stone-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-wider text-stone-600 mb-1">
            01. Identidad del Equipo · Organización Colaborativa
          </p>
          <h2 className="text-2xl md:text-3xl font-display text-[#3B28CC] tracking-tight">
            Equipo Investigador y Avance Compartido
          </h2>
          <p className="text-sm text-stone-700 max-w-2xl mt-2">
            Edita directamente las tarjetas con los nombres reales, roles y líneas de investigación del grupo, y
            enlaza la carpeta o bitácora compartida para el seguimiento docente en LAUICOM.
          </p>
        </div>

        <button
          type="button"
          onClick={onResetTeam}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          Restablecer plantilla
        </button>
      </div>

      {/* Tarjetas editables de integrantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {members.map((member, index) => {
          const isEditing = editingMemberId === member.id && draftMember;
          const accentRing = index % 2 === 0 ? 'border-stone-200' : 'border-stone-200';
          const indexColor = index % 2 === 0 ? 'text-[#065F46]' : 'text-[#9D174D]';

          return (
            <article
              key={member.id}
              className={`bg-white border ${accentRing} rounded-xl p-5 flex flex-col justify-between`}
            >
              {isEditing ? (
                <form onSubmit={saveMember} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={draftMember.name}
                      onChange={(e) => setDraftMember({ ...draftMember, name: e.target.value })}
                      className="w-full px-3 py-1.5 text-sm bg-[#FAF9F6] border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Rol en el observatorio
                    </label>
                    <input
                      type="text"
                      value={draftMember.role}
                      onChange={(e) => setDraftMember({ ...draftMember, role: e.target.value })}
                      className="w-full px-3 py-1.5 text-sm bg-[#FAF9F6] border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Enfoque de investigación
                    </label>
                    <textarea
                      rows={3}
                      value={draftMember.focus}
                      onChange={(e) => setDraftMember({ ...draftMember, focus: e.target.value })}
                      className="w-full px-3 py-1.5 text-sm bg-[#FAF9F6] border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Etapa asignada
                    </label>
                    <input
                      type="text"
                      value={draftMember.weekResponsibility}
                      onChange={(e) =>
                        setDraftMember({ ...draftMember, weekResponsibility: e.target.value })
                      }
                      className="w-full px-3 py-1.5 text-sm bg-[#FAF9F6] border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#3B28CC] rounded-md hover:bg-[#2F1FA8] transition-colors whitespace-nowrap"
                    >
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      Guardar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingMemberId(null);
                        setDraftMember(null);
                      }}
                      className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 rounded-md hover:bg-stone-200 transition-colors whitespace-nowrap"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-stone-600 mb-2">
                      <span className={`font-semibold ${indexColor}`}>
                        0{index + 1} · {member.weekResponsibility}
                      </span>
                    </div>
                    <h3 className="text-lg font-display text-stone-900 leading-snug">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#3B28CC] mt-1">{member.role}</p>
                    <p className="text-sm text-stone-700 mt-3 leading-relaxed">{member.focus}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500 inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" aria-hidden="true" />
                      Investigador/a
                    </span>
                    <button
                      type="button"
                      onClick={() => startEditMember(member)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#3B28CC] hover:bg-indigo-50 rounded-md transition-colors whitespace-nowrap"
                    >
                      <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                      Editar tarjeta
                    </button>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>

      {/* Avance compartido del proyecto */}
      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="flex-1">
            <p className="text-xs font-semibold text-[#065F46] mb-1">
              Repositorio y Bitácora Compartida del Equipo
            </p>
            {isEditingWorkspace ? (
              <form onSubmit={saveWorkspace} className="space-y-3 mt-3 max-w-2xl">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Título del espacio compartido
                  </label>
                  <input
                    type="text"
                    value={draftLabel}
                    onChange={(e) => setDraftLabel(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Enlace verificado (Campus LAUICOM, Drive, repositorio)
                  </label>
                  <input
                    type="url"
                    value={draftUrl}
                    onChange={(e) => setDraftUrl(e.target.value)}
                    placeholder="https://campus.lauicom.edu.ve/"
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                  />
                  {urlError && <p className="text-xs text-rose-700 mt-1">{urlError}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Resumen de avance por etapas (Semanas 9, 10 y 11)
                  </label>
                  <textarea
                    rows={2}
                    value={draftNotes}
                    onChange={(e) => setDraftNotes(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-md hover:bg-[#2F1FA8] transition-colors whitespace-nowrap"
                  >
                    Guardar enlace compartido
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingWorkspace(false);
                      setUrlError('');
                    }}
                    className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 rounded-md hover:bg-stone-200 transition-colors whitespace-nowrap"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h3 className="text-lg font-display text-stone-900">{workspaceLabel}</h3>
                <p className="text-sm text-stone-700 mt-2 max-w-3xl leading-relaxed">{workspaceNotes}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {safeWorkspaceLink && (
                    <a
                      href={safeWorkspaceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-lg hover:bg-[#2F1FA8] transition-colors whitespace-nowrap"
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      Abrir espacio compartido
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setDraftUrl(workspaceUrl);
                      setDraftLabel(workspaceLabel);
                      setDraftNotes(workspaceNotes);
                      setIsEditingWorkspace(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-[#FAF9F6] border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
                  >
                    <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                    Editar enlace de avance
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Progreso académico por semanas */}
          <div className="lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-l border-stone-200 pt-4 lg:pt-0 lg:pl-6">
            <p className="text-xs font-semibold text-stone-600 mb-3">Ruta Progresiva en LAUICOM</p>
            <dl className="space-y-2.5 text-xs">
              <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-stone-100">
                <dt className="font-semibold text-[#3B28CC]">Semana 9</dt>
                <dd className="text-stone-700 text-right">Bases teóricas y 7 autores</dd>
              </div>
              <div className="flex items-baseline justify-between gap-2 pb-2 border-b border-stone-100">
                <dt className="font-semibold text-[#9D174D]">Semana 10</dt>
                <dd className="text-stone-700 text-right">Desmontaje y glosario crítico</dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt className="font-semibold text-[#065F46]">Semana 11</dt>
                <dd className="text-stone-700 text-right">Contranarrativa y audiencia</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
