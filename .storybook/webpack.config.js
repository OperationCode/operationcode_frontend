const autoprefixer = require('autoprefixer');
const path = require("path");

const srcPath = path.resolve(__dirname, '../src');

const postCSSLoaderOptions = {
  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
  plugins: () => [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
  ],
};

module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.resolve.modules = [
      srcPath,
      "node_modules",
  ];

  storybookBaseConfig.module.rules.push({
    exclude: [
      /\.html$/,
      /\.(js|jsx)$/,
      /\.css$/,
      /\.json$/,
      /\.bmp$/,
      /\.gif$/,
      /\.jpg$/,
      /\.png$/,
      /\.svg$/
    ],
    loader: require.resolve('file-loader'),
    options: {
      name: 'static/media/[name].[ext]'
    }
  });
  storybookBaseConfig.module.rules.push({
    test: /\.global\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1
        }
      },
      {
        loader: require.resolve('postcss-loader'),
        options: postCSSLoaderOptions
      }
    ]
  });
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
      exclude: /\.global\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: postCSSLoaderOptions,
      },
    ],
  });
  storybookBaseConfig.module.rules.push(
    {
      test: [/\.bmp$/, /\.gif$/, /\.jpg$/, /\.png$/, /\.svg$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: 'static/media/[name].[ext]'
      }
    }
  );

  return storybookBaseConfig;
};
