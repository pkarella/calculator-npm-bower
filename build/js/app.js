!function n(o,r,e){function t(i,p){if(!r[i]){if(!o[i]){var a="function"==typeof require&&require;if(!p&&a)return a(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[i]={exports:{}};o[i][0].call(c.exports,function(n){var r=o[i][1][n];return t(r||n)},c,c.exports,n,o,r,e)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)t(e[i]);return t}({1:[function(n,o,r){function e(n){this.skin=n}e.prototype.pingPong=function(n){for(var o=[],r=1;r<=n;r++)r%15==0?o.push("ping-pong"):r%3==0?o.push("ping"):r%5==0?o.push("pong"):o.push(r);return o},r.calculatorModule=e},{}],2:[function(n,o,r){var e=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){$("#ping-pong-form").submit(function(n){n.preventDefault();var o=$("#goal").val();new e("hotpink").pingPong(o).forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var o=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p> Thank you "+o+"has been added</p>")})})},{"./../js/pingpong.js":1}]},{},[2]);