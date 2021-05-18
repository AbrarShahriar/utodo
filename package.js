SystemJS.config({
  baseURL:'',
  defaultExtension: true,
  packages: {
    ".": {
      main: './app.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    }
  },
  map: {
    //cdn
    'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js',
    'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
    'react': 'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
    'react-dom': 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
    'react-router-dom': 'https://unpkg.com/react-router-dom@5.2.0/umd/react-router-dom.min.js',
    'css': 'https://raw.githubusercontent.com/systemjs/plugin-css/master/css.js',
    'material-ui': 'https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js',
    'firebase': 'https://cdnjs.cloudflare.com/ajax/libs/firebase/8.4.2/firebase.js',
    'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js'
    
    //dev
    // 'firebase': '../node_modules/firebase/firebase.min.js',
    // 'moment': '../node_modules/moment/moment.min.js',
    
    //production
       // 'firebase': './node_modules/firebase/firebase.min.js',
    // 'moment': './node_modules/moment/moment.min.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/index.js')
  .catch(console.error.bind(console));
