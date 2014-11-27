Package.describe({
  name: 'andruschka:formidable',
  summary: 'A node.js module for parsing form data, especially file uploads.',
  version: '1.0.0',
  git:  "https://github.com/andruschka/meteor-formidable.git"
});

Npm.depends({
  "formidable":"0.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('include-formidable.js', 'server');
  api.export('formidable','server');
});