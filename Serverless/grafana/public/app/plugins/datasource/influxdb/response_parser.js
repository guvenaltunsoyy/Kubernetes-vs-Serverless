/*! grafana - v4.3.2 - 2017-05-31
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash"],function(a,b){"use strict";function c(a,b){a[b]=b}var d,e;b&&b.id;return{setters:[function(a){d=a}],execute:function(){e=function(){function a(){}return a.prototype.parse=function(a,b){if(!b||0===b.results.length)return[];var e=b.results[0];if(!e.series)return[];var f=a.toLowerCase().indexOf("show tag values")>=0,g={};return d.default.each(e.series,function(a){d.default.each(a.values,function(a){d.default.isArray(a)?f?c(g,a[1]||a[0]):c(g,a[0]):c(g,a)})}),d.default.map(g,function(a){return{text:a}})},a}(),a("default",e)}}});