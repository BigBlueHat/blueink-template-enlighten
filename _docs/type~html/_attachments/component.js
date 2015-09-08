(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
BlueInk.component('html-editor', {
  template: require('./editor.html'),
  replace: true,
  data: function() {
    return {
      doc: {
        title: "",
        content: ""
      }
    }
  },
  methods: {
    output: function() {
      this.doc.type = 'html';
      // TODO: add created & updated
      return this.doc;
    }
  }
});

},{"./editor.html":2}],2:[function(require,module,exports){
module.exports = '<form class="blueink-ui horizontal form">\n<div class="inline field">\n  <label for="title">Title</label>\n  <input blueink-model="doc.title" type="text">\n</div>\n<div class="inline field">\n  <label for="text">HTML</label>\n  <textarea blueink-model="doc.content"></textarea>\n</div>\n</form>\n';
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfZG9jcy90eXBlfmh0bWwvaW5kZXguanMiLCJfZG9jcy90eXBlfmh0bWwvZWRpdG9yLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJCbHVlSW5rLmNvbXBvbmVudCgnaHRtbC1lZGl0b3InLCB7XHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZWRpdG9yLmh0bWwnKSxcclxuICByZXBsYWNlOiB0cnVlLFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZG9jOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvdXRwdXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRvYy50eXBlID0gJ2h0bWwnO1xyXG4gICAgICAvLyBUT0RPOiBhZGQgY3JlYXRlZCAmIHVwZGF0ZWRcclxuICAgICAgcmV0dXJuIHRoaXMuZG9jO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gJzxmb3JtIGNsYXNzPVwiYmx1ZWluay11aSBob3Jpem9udGFsIGZvcm1cIj5cXG48ZGl2IGNsYXNzPVwiaW5saW5lIGZpZWxkXCI+XFxuICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XFxuICA8aW5wdXQgYmx1ZWluay1tb2RlbD1cImRvYy50aXRsZVwiIHR5cGU9XCJ0ZXh0XCI+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cImlubGluZSBmaWVsZFwiPlxcbiAgPGxhYmVsIGZvcj1cInRleHRcIj5IVE1MPC9sYWJlbD5cXG4gIDx0ZXh0YXJlYSBibHVlaW5rLW1vZGVsPVwiZG9jLmNvbnRlbnRcIj48L3RleHRhcmVhPlxcbjwvZGl2PlxcbjwvZm9ybT5cXG4nOyJdfQ==
