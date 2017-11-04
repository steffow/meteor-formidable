Package.describe({
  name: 'steffo:formidable',
  summary: 'A node.js module for parsing form data, especially file uploads. Based on Andruschkas version',
  version: '1.0.1',
  git:  "https://github.com/steffow/meteor-formidable.git"
});

Npm.depends({
  "formidable":"1.1.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.addFiles('include-formidable.js', 'server');
  api.export('formidable','server');
});
