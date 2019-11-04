const pageContent = [
  {
    id: 1,
    rubric: 'ПРОСТОЙ ОПТИМИЗАТОР ДЛЯ SVG PATH',
    topIcons: [ '../img/r_e.svg', '../img/j_q_o.svg'],
    image: require('../img/example.svg'),
    content:
      'Данная оптимизация целесообразна в случае избыточного кода после точки в координатах path. В основном такой код получается при работе с редактором Inkscape (в Inkscape нужно также нажать кнопочку "упростить" или Ctrl+L, без этого бывают непредсказуемые результаты), в Adobe Illustrator после точки наблюдал два знака, оптимизировать можно на 3-8%.',

    preview: 'link from github and button',
    path: 'https://urgenmagger.github.io/svg_optim/',
    linkButton: 'DEMO',
    note: 'pet project изначально был сделан для собстевнных нужд',
    //technologies: [{tech:"jQuery"}, {tech:"regular expressions"}],
    technologies: 'jQuery, regular expressions',
  },
  {
    id: 3,
    rubric: '3',
    image: require('../img/example.svg'),
    content: 'here will be unique content',
    preview: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    linkButton: 'url',
  },
  {
    id: 4,
    rubric: '5',
    image: 'url',
    content: 'llllllllllllllllllllllllllllll',
    preview: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    linkButton: 'url',
  },
];

export default pageContent;
