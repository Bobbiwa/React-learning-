module.exports = {
  // ... 其他配置
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  preset: 'react-app',
  transform: {
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
};
