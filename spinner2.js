const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let i = 0; i<spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChars[i]}   `);
  },i * 100);
}
setTimeout(() => {
  process.stdout.write('\r');
}, 100 * spinnerChars.length);