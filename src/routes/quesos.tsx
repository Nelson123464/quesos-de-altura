import { createFileRoute } from '@tanstack/react-router';
import { Catalog, PageIntro } from '@/components/quesos/experience';
export const Route = createFileRoute('/quesos')({
 head: () => ({meta: [{title: 'Nuestros quesos | Quesos de Altura'}, {name: 'description',content: 'Explora Queso Paria, Paria Gourmet y Queso Azul de Altura. Elige tus quesos para una cata del altiplano.'}, {property: 'og:title',content: 'Nuestros quesos | Quesos de Altura'}, {property: 'og:description',content: 'Explora Queso Paria, Paria Gourmet y Queso Azul de Altura. Elige tus quesos para una cata del altiplano.'}, {property: 'og:type',content: 'website'}, {name: 'twitter:card',content: 'summary_large_image'}]}),
 component: CheesePage,
});

function CheesePage(){return <><PageIntro eyebrow="NUESTRA COLECCIÓN" title="Tres formas de saborear el altiplano." description="Artesanía, identidad y carácter. Elige los quesos que harán de tu mesa un momento especial."/><section className="container catalog-page"><Catalog/></section></>}
