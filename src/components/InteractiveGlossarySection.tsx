import React, { useMemo, useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { GlossaryCategory, GlossaryTerm } from '../types/observatory';

interface InteractiveGlossarySectionProps {
  terms: GlossaryTerm[];
}

export const InteractiveGlossarySection: React.FC<InteractiveGlossarySectionProps> = ({ terms }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | GlossaryCategory>('Todos');
  const [selectedTermId, setSelectedTermId] = useState<string>(terms[0]?.id ?? '');

  const filteredTerms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return terms.filter((item) => {
      const matchesCat = selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchesQuery =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.reference.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [terms, searchQuery, selectedCategory]);

  const activeTerm =
    filteredTerms.find((t) => t.id === selectedTermId) ?? filteredTerms[0] ?? null;

  const categories: Array<'Todos' | GlossaryCategory> = [
    'Todos',
    GlossaryCategory.HegemoniaMedios,
    GlossaryCategory.GuerraCognitiva,
    GlossaryCategory.ComunicacionPopular,
  ];

  return (
    <section id="glosario" className="py-12 border-t border-stone-200">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-wider text-stone-600 mb-1">
          04. Semana 10 · Conceptualización Crítica
        </p>
        <h2 className="text-2xl md:text-3xl font-display text-[#3B28CC] tracking-tight">
          Glosario Interactivo de Análisis Mediático
        </h2>
        <p className="text-sm text-stone-700 max-w-3xl mt-2">
          Busca o filtra por eje teórico y haz clic en cualquier concepto para consultar su definición rigurosa, un
          ejemplo práctico ligado al caso de estudio y su referencia académica.
        </p>
      </div>

      {/* Buscador y filtros */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search
            className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar término, autor o concepto..."
            aria-label="Buscar término en el glosario"
            className="w-full pl-9 pr-3 py-2 text-sm bg-[#FAF9F6] border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B28CC]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filtrar por categoría">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#3B28CC] text-white'
                    : 'bg-[#FAF9F6] text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {filteredTerms.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-xl p-8 text-center">
          <p className="text-sm font-semibold text-stone-800">
            No se encontraron términos que coincidan con “{searchQuery}”.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Todos');
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-[#3B28CC] rounded-lg hover:bg-[#2F1FA8] transition-colors"
          >
            Mostrar todos los términos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Lista de términos */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {filteredTerms.map((item) => {
              const active = item.id === activeTerm?.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedTermId(item.id)}
                  className={`text-left p-4 rounded-xl border transition-colors ${
                    active
                      ? 'bg-[#3B28CC] text-white border-[#3B28CC]'
                      : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-display leading-snug">{item.term}</span>
                  </div>
                  <p className={`text-xs mt-1 ${active ? 'text-indigo-100' : 'text-stone-600'}`}>
                    {item.category}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Ficha detallada del término seleccionado */}
          {activeTerm && (
            <article className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 md:p-7 space-y-5">
              <div className="border-b border-stone-200 pb-4">
                <p className="text-xs font-semibold text-[#065F46] mb-1">
                  {activeTerm.category} · Ficha Conceptual
                </p>
                <h3 className="text-2xl md:text-3xl font-display text-stone-900">
                  {activeTerm.term}
                </h3>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-[#3B28CC] mb-1.5">Definición</h4>
                <p className="text-sm md:text-base text-stone-800 leading-relaxed">
                  {activeTerm.definition}
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-stone-200 rounded-lg p-4">
                <h4 className="text-xs font-semibold text-[#9D174D] mb-1.5">
                  Ejemplo práctico aplicado al caso de estudio
                </h4>
                <p className="text-sm text-stone-800 leading-relaxed">{activeTerm.practicalExample}</p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-700">
                <BookOpen className="w-4 h-4 text-[#3B28CC] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-stone-900">Referencia bibliográfica: </strong>
                  {activeTerm.reference}
                </span>
              </div>
            </article>
          )}
        </div>
      )}
    </section>
  );
};
