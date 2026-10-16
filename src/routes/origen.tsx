import { createFileRoute } from '@tanstack/react-router';
import { OriginPage } from '@/components/quesos/experience';
export const Route = createFileRoute('/origen')({
 head: () => ({meta: [{title: 'Origen en Puno | Quesos de Altura'}, {name: 'description',content: 'Conoce el origen altoandino y el proceso de maduración artesanal de los quesos de Puno junto al lago Titicaca.'}, {property: 'og:title',content: 'Origen en Puno | Quesos de Altura'}, {property: 'og:description',content: 'Conoce el origen altoandino y el proceso de maduración artesanal de los quesos de Puno junto al lago Titicaca.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: OriginPage,
});
