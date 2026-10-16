import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/quesos/experience';
export const Route = createFileRoute('/contacto')({
 head: () => ({meta: [{title: 'Pide tu caja de cata | Quesos de Altura'}, {name: 'description',content: 'Solicita una caja de cata o información para tu restaurante y tienda. Conversa con Quesos de Altura por WhatsApp.'}, {property: 'og:title',content: 'Pide tu caja de cata | Quesos de Altura'}, {property: 'og:description',content: 'Solicita una caja de cata o información para tu restaurante y tienda. Conversa con Quesos de Altura por WhatsApp.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: ContactPage,
});
