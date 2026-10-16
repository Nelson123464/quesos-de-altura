import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPage } from '@/components/quesos/experience';
export const Route = createFileRoute('/privacidad')({
 head: () => ({meta: [{title: 'Privacidad | Quesos de Altura'}, {name: 'description',content: 'Conoce cómo se usan tus datos para atender consultas y cómo ejercer tus derechos de privacidad.'}, {property: 'og:title',content: 'Privacidad | Quesos de Altura'}, {property: 'og:description',content: 'Conoce cómo se usan tus datos para atender consultas y cómo ejercer tus derechos de privacidad.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: PrivacyPage,
});
