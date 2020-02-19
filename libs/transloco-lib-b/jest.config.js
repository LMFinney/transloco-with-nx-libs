module.exports = {
  name: 'transloco-lib-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/transloco-lib-b',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
