const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'production',

  entry: {
    app: path.resolve(__dirname, '../src/main.ts'),
  },

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  
  module: {
    rules: [
      {
          test: /\.(ts|tsx|js)$/,
          exclude: /node_modules/,
          use: [
              { loader: 'ts-loader', options: { transpileOnly: true } },
          ],
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  externals: {
    'jquery': '{default: window.jQuery}'
  },
    
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },


  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                toplevel: true,
                compress: {
                    drop_debugger: true,
                },
                mangle: {
                 
                    properties: {
                        reserved: [
                          "jQuery",
                          "$",
                          "fn", "extend", "expando", "isReady", "error", "noop", "isFunction", "isArray", "isWindow", "isNumeric", "isPlainObject", "isEmptyObject", "type", "globalEval", "camelCase", "nodeName", "each", "trim", "makeArray", "inArray", "merge", "grep", "map", "guid", "proxy", "now", "support", "find", "expr", "unique", "uniqueSort", "text", "isXMLDoc", "contains", "filter", "Callbacks", "Deferred", "when", "readyWait", "holdReady", "ready", "hasData", "data", "removeData", "_data", "_removeData", "queue", "dequeue", "_queueHooks", "event", "removeEvent", "Event", "htmlPrefilter", "clone", "cleanData", "cssHooks", "cssNumber", "cssProps", "style", "css", "Tween", "easing", "fx", "Animation", "speed", "timers", "attr", "attrHooks", "removeAttr", "prop", "propHooks", "propFix", "valHooks", "parseJSON", "parseXML", "active", "lastModified", "etag", "ajaxSettings", "ajaxSetup", "ajaxPrefilter", "ajaxTransport", "ajax", "getJSON", "getScript", "get", "post", "_evalUrl", "param", "parseHTML", "offset", "noConflict", "zoom", "throttle", "debounce", "ua",
                          "jquery","constructor","selector","length","toArray","get","pushStack","each","map","slice","first","last","eq","end","push","sort","splice","extend","find","filter","not","is","init","has","closest","index","add","addBack","parent","parents","parentsUntil","next","prev","nextAll","prevAll","nextUntil","prevUntil","siblings","children","contents","ready","data","removeData","queue","dequeue","clearQueue","promise","on","one","off","domManip","detach","remove","text","append","prepend","before","after","empty","clone","html","replaceWith","appendTo","prependTo","insertBefore","insertAfter","replaceAll","css","show","hide","toggle","fadeTo","animate","stop","finish","slideDown","slideUp","slideToggle","fadeIn","fadeOut","fadeToggle","delay","attr","removeAttr","prop","removeProp","addClass","removeClass","toggleClass","hasClass","val","trigger","triggerHandler","blur","focus","focusin","focusout","load","resize","scroll","unload","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","error","contextmenu","hover","wrapAll","wrapInner","wrap","unwrap","serialize","serializeArray","ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend","offset","position","offsetParent","scrollLeft","scrollTop","innerHeight","height","outerHeight","innerWidth","width","outerWidth","bind","unbind","delegate","undelegate","size","andSelf","zoom","prepareTransition","slick",
                        ],
                        keep_quoted: true,
                        // debug: true,
                    },                       
                },
            }
        }),
    ],
  },

  output: {
    filename: 'webpack_bundle.js',
    path: path.resolve(__dirname, '../.dist'),
  },

  performance: {
    hints: false,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
};