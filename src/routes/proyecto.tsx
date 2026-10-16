import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '@/components/quesos/experience';
export const Route = createFileRoute('/proyecto')({
 head: () => ({meta: [{title: 'Proyecto empresarial | Quesos de Altura'}, {name: 'description',content: 'Consulta las proyecciones y descarga el proyecto empresarial completo de Quesos de Altura S.A.C.'}, {property: 'og:title',content: 'Proyecto empresarial | Quesos de Altura'}, {property: 'og:description',content: 'Consulta las proyecciones y descarga el proyecto empresarial completo de Quesos de Altura S.A.C.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: ProjectPage,
});
