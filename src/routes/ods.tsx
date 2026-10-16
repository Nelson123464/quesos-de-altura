import { createFileRoute } from '@tanstack/react-router';
import { OdsPage } from '@/components/quesos/experience';
const t='Compromiso ODS | Quesos de Altura';const d='Cómo Quesos de Altura se relaciona con los 17 Objetivos de Desarrollo Sostenible de la Agenda 2030.';
export const Route = createFileRoute('/ods')({
 head: () => ({meta: [{title:t},{name:'description',content:d},{property:'og:title',content:t},{property:'og:description',content:d},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component: OdsPage,
});
