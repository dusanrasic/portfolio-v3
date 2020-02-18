export const PROJECT_NAV = {
  todo: 'todo',
  seven_segment: 'seven_segment',
  portfolio_v2: 'portfolio_v2',
  direct_response_web: 'direct_response_web',
  direct_response: 'direct_response',
  portfolio_v3: 'portfolio_v3',
  diamonds: 'diamonds',
  the_alps: 'the_alps',
  homp: 'homp',
};

export const PROJECT_NAV_TYPE = {
  [PROJECT_NAV.todo]: {
    type: '01',
    label: 'To Do',
    url: 'todo.dusanrasic.rs',
    url_path: 'https://todo.dusanrasic.rs',
    technology: {
      react: 'react',
      redux: 'redux',
      less: 'less',
    },
  },
  [PROJECT_NAV.seven_segment]: {
    type: '02',
    label: '7 Segment Display Clock',
    url: '7segmentclock.dusanrasic.rs',
    url_path: 'https://7segmentclock.dusanrasic.rs',
    technology: {
      js: 'js',
      p5js: 'p5js',
      css: 'css',
    },
  },
  [PROJECT_NAV.portfolio_v2]: {
    type: '03',
    label: 'Portfolio v2',
    url: 'portfoliov2.dusanrasic.rs',
    url_path: 'https://portfoliov2.dusanrasic.rs',
    technology: {
      html: 'html',
      js: 'js',
      php: 'php',
      sass: 'sass',
    },
  },
  [PROJECT_NAV.direct_response_web]: {
    type: '04',
    label: 'Direct Response Web',
    url: 'directresponse.dusanrasic.rs',
    url_path: 'https://directresponse.dusanrasic.rs',
  },
  [PROJECT_NAV.direct_response]: {
    type: '05',
    label: 'Direct Response .NET',
    url: '',
    url_path: 'https://',
    technology: {
      c_sharp: 'C#',
      wpf: 'WPF',
      mvvm: 'MVVM',
      entity_model: 'Data Entity Model',
    },
  },
  [PROJECT_NAV.portfolio_v3]: {
    type: '06',
    label: 'Portfolio v3',
    url: 'dr.dusanrasic.rs',
    url_path: 'https://dr.dusanrasic.rs',
    technology: {
      html: 'html',
      js: 'js',
      php: 'php',
      css: 'css',
    },
  },
  [PROJECT_NAV.diamonds]: {
    type: '07',
    label: 'Diamonds',
    url: 'diamonds.dusanrasic.rs',
    url_path: 'https://diamonds.dusanrasic.rs',
    technology: {
      html: 'html',
      js: 'js',
      php: 'php',
      css: 'css',
    },
  },
  [PROJECT_NAV.the_alps]: {
    type: '08',
    label: 'The Alps',
    url: 'thealps.dusanrasic.rs',
    url_path: 'https://thealps.dusanrasic.rs',
    technology: {
      html: 'html',
      js: 'js',
      css: 'css',
    },
  },
  [PROJECT_NAV.homp]: {
    type: '09',
    label: 'HOMP',
    url: 'homp.dusanrasic.rs',
    url_path: 'https://homp.dusanrasic.rs',
    technology: {
      html: 'html',
      js: 'js',
      css: 'css',
    },
  },
};
