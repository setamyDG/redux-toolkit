// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@views(.*)$': '<rootDir>/src/views$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@redux(.*)$': '<rootDir>/src/redux$1',
      },
    },
  },
};
