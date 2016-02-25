/*!
 * u.log.js - Version 0.1.3
 * console helper functions for u.js
 * Author: Steve Ottoz <so@dev.so>
 * Build date: 2016-02-25
 * Copyright (c) 2016 Steve Ottoz
 * Released under the MIT license
 */
(function(u,window,document,console,undefined) {
  'use strict';

  u.log = {

    history: [],

    log: function() {

      this.history.push({fn: 'log', arg: u.toArray(arguments)});
      window._debug && console.log.apply(console, arguments);

    },

    table: function(data, prefix){

    	var table = [],
    			i,
    			value,
    			isArray;

    	(function toTable(data, prefix) {

    		for (i in data) {

    			value = data[i];
    			isArray = u.isArray(value);

    			(/^o/.test(typeof value) && !isArray) ?
    				toTable(data[i], prefix ? prefix + '.' + i : i) :
    				table.push({name: prefix ? prefix + '.' + i : i, value: isArray ? ''+value : value});

    		}

    	})(data, prefix);

      this.history.push({fn: 'table', arg: u.toArray(arguments)});
    	window._debug && console.table(table);

    },


    error: function() {

      this.history.push({fn: 'error', arg: u.toArray(arguments)});
      window._debug && console.error.apply(console, arguments);

    },

    info: function() {

      this.history.push({fn: 'info', arg: u.toArray(arguments)});
      window._debug && console.info.apply(console, arguments);

    },

    warn: function() {

      this.history.push({fn: 'warn', arg: u.toArray(arguments)});
      window._debug && console.warn.apply(console, arguments);

    },

    time: function(label) {

      this.history.push({fn: 'time', arg: [label]});
      window._debug && console.time(label);

    },

    timeEnd: function(label) {

      this.history.push({fn: 'timeEnd', arg: [label]});
      window._debug && console.timeEnd(label);

    },

    timeStamp: function(label) {

      this.history.push({fn: 'timeStamp', arg: [label]});
      window._debug && console.timeStamp(label);

    },

    trace: function() {

      this.history.push({fn: 'trace', arg: u.toArray(arguments)});
      window._debug && console.trace.apply(console, arguments);

    },

    group: function(data, label) {

      label = label || '';

      this.history.push({fn: 'group', arg: u.toArray(arguments)});
    	if (window._debug) {
    		console.group(label);
    		for (var i in data) {
    			console[data[i].fn].apply(console, data[i].arg);
    		}
    		console.groupEnd(label);
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

      window._debug && console.clear();

    }

  };

})(ujs,window,document,console);
