import { createFileRoute } from '@tanstack/react-router';
import { CompanyPage } from '@/components/quesos/experience';
export const Route = createFileRoute('/nosotros')({
 head: () => ({meta: [{title: 'Nuestra empresa | Quesos de Altura'}, {name: 'description',content: 'Conoce la misión y visión de Quesos de Altura S.A.C. y nuestra propuesta para crear valor en la comunidad andina.'}, {property: 'og:title',content: 'Nuestra empresa | Quesos de Altura'}, {property: 'og:description',content: 'Conoce la misión y visión de Quesos de Altura S.A.C. y nuestra propuesta para crear valor en la comunidad andina.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: CompanyPage,
});
