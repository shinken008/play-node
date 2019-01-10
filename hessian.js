var hessian = require('hessian.js');
var java = require('js-to-java');
var encoder = new hessian.Encoder();

encoder.write(1); // int
encoder.write(1.1); // double
encoder.write(1e100); // double
encoder.write(Math.pow(2, 18)); // long
encoder.write(true); // boolean
encoder.write(null); // null
encoder.write('test'); // string

var decoder = new hessian.Decoder(encoder);

// java base types
encoder.write(java.long(3001010320)); // 3001010320L
encoder.write(java.double(100)); // double
encoder.write(java.array.int([0, 1, 2])); // int[] = {0, 1, 2}

var object = {};
object.prop1 = [1, 2, 3];
object.prop2 = 'string';
object.prop3 = { key: 'value' };
object.prop4 = object;  // circular
encoder.write(object); // object