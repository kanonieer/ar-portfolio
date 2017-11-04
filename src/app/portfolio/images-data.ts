import { Work } from './../models/work';

export const data: Array<Work> = [
    //  { image_file: '', name: { pl: '', en: '' }, size: '', type: { pl: '', en: ''}, series: '', year: 2016, order: 1 },
    // { image_file: ['arp-0002'], name: { pl: 'Tempus Fugit', en: 'Tempus Fugit' }, size: '50x70', type: { pl: 'asamblaż', en: 'assamblage' }, series: 'ZNS', year: 2016, order: 2 },
    // { image_file: ['arp-0003'], name: { pl: 'Melatonina', en: 'Melatonina' }, size: '50x70', type: { pl: 'asamblaż', en: 'assamblage' }, series: 'ZNS', year: 2016, order: 5 },
    // { image_file: ['arp-0004'], name: { pl: 'ID', en: 'ID' }, size: '50x70', type: { pl: 'asamblaż', en: 'assamblage' }, series: 'ZNS', year: 2017, order: 7 },
    // { image_file: ['arp-0005'], name: { pl: 'Monument', en: 'Monument' }, size: '98x64', type: { pl: 'asamblaż', en: 'assamblage' }, series: 'ZNS', year: 2017, order: 1 },
    // { image_file: ['arp-0006'], name: { pl: 'Zwiastowanie', en: 'Annunciation' }, size: '50x70', type: { pl: 'kolaż', en: 'collage' }, series: 'ZNS', year: 2017, order: 4 },
    // { image_file: ['arp-0001'], name: { pl: 'Macierz', en: 'Matrix' }, size: '50x70', type: { pl: 'asamblaż', en: 'assamblage' }, series: 'ZNS', year: 2016, order: 1000 },
    // { image_file: ['arp-0007', 'arp-0008', 'arp-0009'], name: { pl: 'Figura Cielesna', en: 'Carnal Figure' }, size: '', type: { pl: 'drut, materiał', en: 'wire, textile' }, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0010', 'arp-0011'], name: { pl: 'Pokój Osobliwy', en: 'Peculiar Room' }, size: '', type: { pl: 'asamblaż', en: 'assamblage'}, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0012', 'arp-0013'], name: { pl: 'Zapis Proksemiczny', en: 'Proxemic Record' }, size: '', type: { pl: 'asamblaż', en: 'assamblage'}, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0014', 'arp-0015', 'arp-0016'], name: { pl: 'Rodzina', en: 'Family' }, size: '40x40', type: { pl: 'tryptyk, olej na płótnie', en: 'triptych, oil on canvas'}, series: '', year: 2016, order: 10 },
    // { image_file: ['arp-0017'], name: { pl: 'Rodzina 2', en: 'Family 2' }, size: '100x70', type: { pl: 'akryl na kartonie', en: 'Acrylic on cardboard' }, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0018'], name: { pl: 'Tempus Fugit', en: 'Tempus Fugit' }, size: '50x70', type: { pl: 'technika mieszana', en: 'mixed technique'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0019'], name: { pl: 'Now I wanna be Your Dog', en: 'Now I wanna be Your Dog' }, size: '50x40', type: { pl: 'olej na płótnie', en: 'oil on canvas'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0020'], name: { pl: 'Matka Boska Feministyczna', en: 'Our lady of feminism' }, size: '140', type: { pl: 'olej na płótnie', en: 'oil on canvas'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0021'], name: { pl: 'Kompozycja Dewocyjna 1.', en: 'Devotional composition 1.' }, size: '50x60', type: { pl: 'olej na płótnie', en: 'oil on canvas'}, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0022'], name: { pl: 'Najsilniejszy Człowiek we wszechświecie', en: 'THE STRONGEST MAN IN THE UNIVERSE' }, size: '70x90', type: { pl: 'olej , żywica na płótnie', en: 'oil and resin on canvas'}, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0023'], name: { pl: 'Nie patrz na mnie', en: 'Do not look at me' }, size: '33x46', type: { pl: 'asamblaż', en: 'assamblage'}, series: '', year: 2015, order: 1000 },
    // { image_file: ['arp-0024'], name: { pl: 'Będziesz ze Mną w Raju', en: 'You will be in Paradise with Me' }, size: '40x40', type: { pl: 'kolaż', en: 'collage' }, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0025'], name: { pl: 'Chcę tego', en: 'I want it' }, size: '30x40', type: { pl: 'kolaż', en: 'collage'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0026', 'arp-0027', 'arp-0028'], name: { pl: 'Tryptyk Bolesny', en: 'Sorrowful Triptych' }, size: '40x40', type: { pl: 'asamblaż', en: 'assamblage'}, series: '', year: 2016, order: 8 },
    // { image_file: ['arp-0029', 'arp-0030', 'arp-0031'], name: { pl: 'Było, Jest, Będzie', en: 'It was, it is, it will be' }, size: '', type: { pl: 'tryptyk', en: 'triptych'}, series: '', year: 2015, order: 1000 },
    // { image_file: ['arp-0032', 'arp-0033', 'arp-0034'], name: { pl: 'Forum', en: 'Forum' }, size: '', type: { pl: 'tryptyk', en: 'triptych'}, series: '', year: 2016, order: 9 },
    // { image_file: ['arp-0035', 'arp-0036', 'arp-0037', 'arp-0038', 'arp-0039'], name: { pl: 'Ogród rozkoszy ziemskich', en: 'Garden of earthly delights' }, size: '', type: { pl: 'fotografia', en: 'photo'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0040', 'arp-0041', 'arp-0042'], name: { pl: 'Ołtarz miejski', en: 'The Altar of the City' }, size: '', type: { pl: 'tryptyk', en: 'triptych'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0043', 'arp-0044', 'arp-0045'], name: { pl: 'Zapis Bliski', en: 'Intimate Record' }, size: '', type: { pl: 'fotografia', en: 'photo'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0046', 'arp-0047', 'arp-0048'], name: { pl: 'Martwię się', en: 'I’m Worried' }, size: '', type: { pl: 'tryptyk', en: 'triptych'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0049', 'arp-0050', 'arp-0051'], name: { pl: 'Martwię się cz.2', en: 'I’m Worried pt.2' }, size: '', type: { pl: 'tryptyk', en: 'triptych'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0052', 'arp-0053'], name: { pl: 'W Twoim Pokoju cz.1', en: 'In Your Room pt.1' }, size: '', type: { pl: 'dyptyk', en: 'diptych'}, series: '', year: 2016, order: 3 },
    // { image_file: ['arp-0054', 'arp-0055'], name: { pl: 'W Twoim Pokoju cz.2', en: 'In Your Room pt.2' }, size: '', type: { pl: 'dyptyk', en: 'diptych'}, series: '', year: 2016, order: 1000 },
    // { image_file: ['arp-0056', 'arp-0057', 'arp-0058', 'arp-0059', 'arp-0060'], name: { pl: 'Półcień', en: 'Penumbra' }, size: '', type: { pl: 'fotografia', en: 'photo'}, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0061', 'arp-0062', 'arp-0063'], name: { pl: 'Czekam na Ciebie cz.1', en: ' I\'m waiting for you pt.1' }, size: '', type: { pl: 'tryptyk', en: 'triptych'}, series: '', year: 2017, order: 6 },
    // { image_file: ['arp-0064', 'arp-0065'], name: { pl: 'Czekam na Ciebie cz.2', en: ' I\'m waiting for you pt.2' }, size: '', type: { pl: 'dyptyk', en: 'diptych'}, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0066', 'arp-0067'], name: { pl: 'Czekam na Ciebie cz.3', en: ' I\'m waiting for you pt.3' }, size: '', type: { pl: 'dyptyk', en: 'diptych'}, series: '', year: 2017, order: 1000 },
    // { image_file: ['arp-0068', 'arp-0069', 'arp-0070', 'arp-0071'], name: { pl: 'W Twoim Cieniu', en: 'In Your shadow' }, size: '', type: { pl: 'fotografia', en: 'photo'}, series: '', year: 2016, order: 1000 }
];
