module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(bootstrap-vue)/)'],
}
