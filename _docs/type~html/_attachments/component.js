(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
BlueInk.component('html-editor', {
  template: require('./editor.html'),
  replace: true,
  data: function() {
    return {
      doc: {
        title: "",
        content: "",
        type: "html"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfZG9jcy90eXBlfmh0bWwvaW5kZXguanMiLCJfZG9jcy90eXBlfmh0bWwvZWRpdG9yLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIkJsdWVJbmsuY29tcG9uZW50KCdodG1sLWVkaXRvcicsIHtcclxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9lZGl0b3IuaHRtbCcpLFxyXG4gIHJlcGxhY2U6IHRydWUsXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkb2M6IHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgICAgIHR5cGU6IFwiaHRtbFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG91dHB1dDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZG9jLnR5cGUgPSAnaHRtbCc7XHJcbiAgICAgIC8vIFRPRE86IGFkZCBjcmVhdGVkICYgdXBkYXRlZFxyXG4gICAgICByZXR1cm4gdGhpcy5kb2M7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSAnPGZvcm0gY2xhc3M9XCJibHVlaW5rLXVpIGhvcml6b250YWwgZm9ybVwiPlxcbjxkaXYgY2xhc3M9XCJpbmxpbmUgZmllbGRcIj5cXG4gIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cXG4gIDxpbnB1dCBibHVlaW5rLW1vZGVsPVwiZG9jLnRpdGxlXCIgdHlwZT1cInRleHRcIj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwiaW5saW5lIGZpZWxkXCI+XFxuICA8bGFiZWwgZm9yPVwidGV4dFwiPkhUTUw8L2xhYmVsPlxcbiAgPHRleHRhcmVhIGJsdWVpbmstbW9kZWw9XCJkb2MuY29udGVudFwiPjwvdGV4dGFyZWE+XFxuPC9kaXY+XFxuPC9mb3JtPlxcbic7Il19
