Package.describe({
  summary: "i18next repackaged for Meteor"
});

Package.on_use(function (api) {
  api.add_files('i18next-1.7.1.js', ['client']);
  api.export('i18n');
});

