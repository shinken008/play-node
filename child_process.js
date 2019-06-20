const exec = require("child_process").exec;
const start = Date.now()
exec('ls -lah', function (error, stdout, stderr) {
  console.log('stdout', stdout)
  console.log('stderr', stderr)
  console.log('exec', Date.now() - start)
});
console.log(Date.now() - start)