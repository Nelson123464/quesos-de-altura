import { createFileRoute } from '@tanstack/react-router';
import { QuestionsPage } from '@/components/quesos/experience';
export const Route = createFileRoute('/preguntas')({
 head: () => ({meta: [{title: 'Preguntas frecuentes | Quesos de Altura'}, {name: 'description',content: 'Resuelve tus dudas sobre quesos, maduración, conservación, precios y pedidos de cata.'}, {property: 'og:title',content: 'Preguntas frecuentes | Quesos de Altura'}, {property: 'og:description',content: 'Resuelve tus dudas sobre quesos, maduración, conservación, precios y pedidos de cata.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: QuestionsPage,
});
