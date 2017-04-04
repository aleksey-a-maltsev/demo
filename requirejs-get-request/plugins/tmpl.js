(function() {
   'use strict';

   define('tmpl', ['text'], function(text) {
      return {
         load: function(name, require, load, conf) {
            try {
               var onLoad = function(text) {
                  load.fromText(text);
               };
               onLoad.error = function(e) {
                  load.error(e);
               };

               text.load(name + '.tmpl', require, onLoad, conf);
            } catch (e) {
               load.error(e);
            }
         }
      };
   });
})();
