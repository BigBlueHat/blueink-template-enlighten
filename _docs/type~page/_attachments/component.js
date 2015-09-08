(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
BlueInk.component('page-editor', {
  template: require('./editor.html'),
  replace: true,
  data: function() {
    return {
      doc: {
        _id: "",
        type: "page",
        title: "",
        nav_label: "",
        page_items: [[]]
      }
    }
  },
  methods: {
    output: function() {
      this.doc.type = 'page';
      // TODO: add created & updated
      return this.doc;
    }
  }
});

},{"./editor.html":2}],2:[function(require,module,exports){
module.exports = '<form class="blueink-ui horizontal form">\n  <div class="field">\n    <label for="title">Title</label>\n    <input blueink-model="doc.title" name="title" type="text">\n  </div>\n  <div class="field">\n    <label for="nav_label">Navigation Label</label>\n    <input blueink-model="doc.nav_label" name="nav_label" type="text">\n  </div>\n  <div class="field">\n    <label for="url">URL</label>\n    <input blueink-model="doc._id"\n      blueink-attr="disabled: (doc._rev ? \'disabled\' : \'\')"\n      name="url" type="text">\n  </div>\n</form>\n';
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfZG9jcy90eXBlfnBhZ2UvaW5kZXguanMiLCJfZG9jcy90eXBlfnBhZ2UvZWRpdG9yLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJCbHVlSW5rLmNvbXBvbmVudCgncGFnZS1lZGl0b3InLCB7XHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZWRpdG9yLmh0bWwnKSxcclxuICByZXBsYWNlOiB0cnVlLFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZG9jOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6IFwicGFnZVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIG5hdl9sYWJlbDogXCJcIixcclxuICAgICAgICBwYWdlX2l0ZW1zOiBbW11dXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG91dHB1dDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZG9jLnR5cGUgPSAncGFnZSc7XHJcbiAgICAgIC8vIFRPRE86IGFkZCBjcmVhdGVkICYgdXBkYXRlZFxyXG4gICAgICByZXR1cm4gdGhpcy5kb2M7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSAnPGZvcm0gY2xhc3M9XCJibHVlaW5rLXVpIGhvcml6b250YWwgZm9ybVwiPlxcbiAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XFxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cXG4gICAgPGlucHV0IGJsdWVpbmstbW9kZWw9XCJkb2MudGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cXG4gICAgPGxhYmVsIGZvcj1cIm5hdl9sYWJlbFwiPk5hdmlnYXRpb24gTGFiZWw8L2xhYmVsPlxcbiAgICA8aW5wdXQgYmx1ZWluay1tb2RlbD1cImRvYy5uYXZfbGFiZWxcIiBuYW1lPVwibmF2X2xhYmVsXCIgdHlwZT1cInRleHRcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XFxuICAgIDxsYWJlbCBmb3I9XCJ1cmxcIj5VUkw8L2xhYmVsPlxcbiAgICA8aW5wdXQgYmx1ZWluay1tb2RlbD1cImRvYy5faWRcIlxcbiAgICAgIGJsdWVpbmstYXR0cj1cImRpc2FibGVkOiAoZG9jLl9yZXYgPyBcXCdkaXNhYmxlZFxcJyA6IFxcJ1xcJylcIlxcbiAgICAgIG5hbWU9XCJ1cmxcIiB0eXBlPVwidGV4dFwiPlxcbiAgPC9kaXY+XFxuPC9mb3JtPlxcbic7Il19
