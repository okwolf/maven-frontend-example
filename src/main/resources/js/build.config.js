module.exports = {
  appJs: {
    files: [
      '../src/main/js/**/*.js'
    ]
  },
  testJs: {
    files: [
      '../src/test/js/**/*.js'
    ]
  },
  userJs: {
    files: [
      '*.js',
      '<%= appJs.files %>',
      '<%= testJs.files %>'
    ]
  },
  vendorJs: {
    files: [
      'bower_components/jquery/dist/jquery.min.js'
    ]
  },
  distJs: {
    files: [
      '<%= vendorJs.files %>',
      '<%= appJs.files %>'
    ]
  },
  js: {
    files: [
      '<%= vendorJs.files %>',
      '<%= userJs.files %>',
    ]
  }
};