/*!
 * u.log.js - Version 0.2.0
 * console helper functions for u.js/jquery
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2016-07-29
 * Copyright (c) 2016 Steve Ottoz
 * Released under the MIT license
 */
;(function (factory) {
  'use strict';

  if (/^f/.test(typeof define) && define.amd) {
    define(['jquery'], factory);
  }
  else if (/^o/.test(typeof exports)) {
    factory(require('jquery'));
  }
  else {
    factory(jQuery);
  }
})(function ($) {


  'use strict';

  $.log = {

    c: console,

    history: [],

    log: function() {

      this.history.push({fn: 'log', arg: $.makeArray(arguments)});
      window._debug && this.c.log.apply(console, arguments);

    },

    table: function(data, prefix){

    	var table = [],
    			i,
    			value,
    			isArray;

    	(function toTable(data, prefix) {

    		for (i in data) {

    			value = data[i];
    			isArray = $.isArray(value);

    			(/^o/.test(typeof value) && !isArray) ?
    				toTable(data[i], prefix ? prefix + '.' + i : i) :
    				table.push({name: prefix ? prefix + '.' + i : i, value: isArray ? ''+value : value});

    		}

    	})(data, prefix);

      this.history.push({fn: 'table', arg: $.makeArray(arguments)});
    	window._debug && this.c.table(table);

    },


    error: function() {

      this.history.push({fn: 'error', arg: $.makeArray(arguments)});
      window._debug && this.c.error.apply(console, arguments);

    },

    info: function() {

      this.history.push({fn: 'info', arg: $.makeArray(arguments)});
      window._debug && this.c.info.apply(console, arguments);

    },

    warn: function() {

      this.history.push({fn: 'warn', arg: $.makeArray(arguments)});
      window._debug && this.c.warn.apply(console, arguments);

    },

    time: function(label) {

      this.history.push({fn: 'time', arg: [label]});
      window._debug && this.c.time(label);

    },

    timeEnd: function(label) {

      this.history.push({fn: 'timeEnd', arg: [label]});
      window._debug && this.c.timeEnd(label);

    },

    timeStamp: function(label) {

      this.history.push({fn: 'timeStamp', arg: [label]});
      window._debug && this.c.timeStamp(label);

    },

    trace: function() {

      this.history.push({fn: 'trace', arg: $.makeArray(arguments)});
      window._debug && this.c.trace.apply(console, arguments);

    },

    group: function(data, label) {

      label = label || '';

      this.history.push({fn: 'group', arg: $.makeArray(arguments)});
    	if (window._debug) {
    		this.c.group(label);
    		for (var i in data) {
    			console[data[i].fn].apply(console, data[i].arg);
    		}
    		this.c.groupEnd(label);
    	}

    },

    do: function(data) {

      if (window._debug) {
    		for (var i in data) {
    			this[data[i].fn].apply(this, data[i].arg);
    		}
    	}

    },

    clear: function() {

      window._debug && this.c.clear();

    }

  };


});
