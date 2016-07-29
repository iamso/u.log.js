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
  ujs: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/u.log.js'],
    dest: 'dist/u.log.min.js'
  },
  jquery: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/jquery.log.js'],
    dest: 'dist/jquery.log.min.js'
  }
};
