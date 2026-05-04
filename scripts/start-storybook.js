const { spawn } = require('node:child_process');

const expoCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const expoArgs = ['expo', 'start', '--clear', ...process.argv.slice(2)];

const child = spawn(expoCommand, expoArgs, {
  stdio: 'inherit',
  env: {
    ...process.env,
    EXPO_PUBLIC_STORYBOOK_ENABLED: 'true',
  },
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

