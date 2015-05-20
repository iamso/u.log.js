module.exports = {
  options: {
    separator: '\n\n',
    stripBanners: {
      block: false,
      line: false
    },
    banner: '<%= banner %>',
  },
  dist: {
    src: ['src/u.log.js'],
    dest: 'dist/u.log.js'
  }
};
