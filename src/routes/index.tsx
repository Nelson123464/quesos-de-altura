import { createFileRoute } from '@tanstack/react-router';
import { Home } from '@/components/quesos/experience';
export const Route = createFileRoute('/')({
 head: () => ({meta: [{title: 'Quesos de Altura | El sabor de nuestro origen'}, {name: 'description',content: 'Descubre quesos artesanales de Puno: Paria, Paria Gourmet y Azul de Altura. Encuentra tu favorito y solicita una caja de cata.'}, {property: 'og:title',content: 'Quesos de Altura | El sabor de nuestro origen'}, {property: 'og:description',content: 'Descubre quesos artesanales de Puno: Paria, Paria Gourmet y Azul de Altura. Encuentra tu favorito y solicita una caja de cata.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: Home,
});
