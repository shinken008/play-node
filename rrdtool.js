const rrdtool = require('rrdtool');

const db = rrdtool.create(__dirname + '/testLeak3.rrd', { start: rrdtool.now(), step: 1, force: true }, [
  'DS:heap_used:GAUGE:1:U:U',
  'RRA:AVERAGE:0.5:3:2400'
]);

function updateHeapUsed() {
  db.update({ "heap_used": process.memoryUsage().heapUsed });
}

setInterval(updateHeapUsed, 1000);