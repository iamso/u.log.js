module.exports = {
  options: {
    mangle: {
      except: ['u', 'µ']
    },
    compress: {
      //drop_console: true
    },
    preserveComments: false,
    sourceMap: true
  },
  dist: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/u.log.js'],
    dest: 'dist/u.log.min.js'
  }
};
