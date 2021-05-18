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
    //     // 'firebase': 'https://cdnjs.cloudflare.com/ajax/libs/firebase/8.4.2/firebase.js',
    // 'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js'
    
    //dev
    // 'firebase': '../node_modules/firebase/firebase.min.js',
    // 'moment': '../node_modules/moment/moment.min.js',
    
    //production
    'plugin-babel': 'node_modules/babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs/systemjs-babel-browser.js',
    'react': 'node_modules/react/react.production.min.js',
    'react-dom': 'node_modules/react-dom/react-dom.production.min.js',
    'react-router-dom': 'node_modules/react-router-dom/react-router-dom.min.js',
    'css': 'node_modules/css/css.js',
    'material-ui': 'node_modules/material-ui/material-ui.production.min.js',
    'firebase': 'node_modules/firebase/firebase.min.js',
    'moment': 'node_modules/moment/moment.min.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('../src/index.js')
  .catch(console.error.bind(console));
