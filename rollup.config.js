import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './index.ts',
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    babel({
      presets: [['react-app', { flow: false, typescript: true }]],
      extensions,
      include: ['src/**/*'],
      runtimeHelpers: true
    })
  ],
  output: [
    {
      file: packageJson.module,
      format: 'es'
    }
  ]
};
