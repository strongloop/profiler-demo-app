// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: profiling-app
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function mountRestApi(server) {
  var restApiRoot = server.get('restApiRoot');
  server.use(restApiRoot, server.loopback.rest());
};
