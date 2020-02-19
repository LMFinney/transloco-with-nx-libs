module.exports = {
  name: 'transloco-lib-a',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/transloco-lib-a',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
