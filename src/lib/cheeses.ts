import paria from '@/assets/Quesos_de_Altura_Sabor_Andino.png.asset.json';
import gourmet from '@/assets/Quesos_de_Altura_Gourmet.png.asset.json';
import azul from '@/assets/Quesos_de_Altura_con_Sabor_Andino.png.asset.json';
export const cheeses = [
 { id: 'paria', name: 'Queso Paria', tag: 'EL CLÁSICO ANDINO', taste: 'Firme y lleno de carácter', description: 'Pasta prensada, sabor profundo y una corteza cuidada a mano. La tradición del altiplano en cada cuña.', image: paria.url, maturation: '4 a 8 meses', price: 67.5, pairing: 'Papas andinas, pan de campo y vino tinto.', category: 'Tradicional' },
 { id: 'gourmet', name: 'Paria Gourmet', tag: 'SUAVIDAD QUE ENAMORA', taste: 'Suave y cremoso', description: 'Pasta blanda y corteza florida. Porciones de 250 g empacadas al vacío, con textura cremosa y sabor suave.', image: gourmet.url, maturation: '1 a 2 meses', price: 67.5, pairing: 'Nueces, uvas frescas y un vino blanco.', category: 'Suave' },
 { id: 'azul', name: 'Queso Azul de Altura', tag: 'PARA PALADARES CURIOSOS', taste: 'Intenso y ligeramente picante', description: 'Vetas de moho noble, una pasta semiblanda y un carácter inolvidable. Madurado en una cava independiente.', image: azul.url, maturation: '2 a 3 meses', price: 85, pairing: 'Peras, miel, nueces y un vino dulce.', category: 'Intenso' },
];
export const whatsappNumber = '51997988594';
export function enquiryUrl(message: string) { return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; }
export function formatPrice(value: number) { return `S/ ${value.toFixed(2).replace('.', ',')}`; }
