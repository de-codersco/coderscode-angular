'use strict';

angular.module('coderscodeAngularApp')
    .factory('User', function($http, $localStorage){
        var baseUrl = 'your_service_url';
        console.log(baseUrl);
        console.log('now: ' + $localStorage.token);
        function changeUser(user) {
            angular.extend(currentUser, user);
        }

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }

        function getUserFromToken() {
            var token = $localStorage.token;
            var user = {};
            if (typeof token !== 'undefined') {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
            }
            return user;
        }

        var currentUser = getUserFromToken();

        var tmpToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

        function freeze(milliseconds) {
          var start = new Date().getTime();
          for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
              break;
            }
          }
        }

        return {
            save: function(data, success, error) {
                //$http.post(baseUrl + '/signin', data).success(success).error(error)
                freeze(2000);

                if (data.password === '1') {
                  success({ type: true, data: { token: tmpToken }}); // or false
                } else {
                  error();
                }
            },
            signin: function(data, success, error) {
                //$http.post(baseUrl + '/authenticate', data).success(success).error(error)
                freeze(2000);

                if (data.password === '1') {
                  success({ type: true, data: { token: tmpToken }}); // or false
                } else {
                  error();
                }
            },
            me: function(success, error) {
                //$http.get(baseUrl + '/me').success(success).error(error)
                console.log(error);
                success();
            },
            logout: function(success) {
                changeUser({});
                console.log('before: ' + $localStorage.token);
                delete $localStorage.token;
                //$localStorage.$reset();
                console.log('after: ' + $localStorage.token);
                success();
            }
        };
    }
);
