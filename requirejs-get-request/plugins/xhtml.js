(function() {
   'use strict';

   define('xhtml', ['text'], function(text) {
      return {
         load: function(name, require, load, conf) {
            try {
               var onLoad = function(data) {
                  load.fromText(data);
               };
               onLoad.error = function(e) {
                  load.error(e);
               };

               text.load(name + '.xhtml', require, onLoad, conf);
            } catch (e) {
               load.error(e);
            }
         }
      };
   });
})();
