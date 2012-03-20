(function(/*! Brunch !*/) {
  if (!this.require) {
    var modules = {}, cache = {}, require = function(name, root) {
      var module = cache[name], path = expand(root, name), fn;
      if (module) {
        return module;
      } else if (fn = modules[path] || modules[path = expand(path, './index')]) {
        module = {id: name, exports: {}};
        try {
          cache[name] = module.exports;
          fn(module.exports, function(name) {
            return require(name, dirname(path));
          }, module);
          return cache[name] = module.exports;
        } catch (err) {
          delete cache[name];
          throw err;
        }
      } else {
        throw 'module \'' + name + '\' not found';
      }
    }, expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    }, dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.require = function(name) {
      return require(name, '');
    };
    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle)
        modules[key] = bundle[key];
    };
  }
}).call(this);(this.require.define({
  "views/home_view": function(exports, require, module) {
    (function() {
  var SidebarView, SubpageView, homeTemplate,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  homeTemplate = require('./templates/home');

  SidebarView = require('views/sidebar_view').SidebarView;

  SubpageView = require('views/subpage_view').SubpageView;

  exports.HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.render = __bind(this.render, this);
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.mediator = null;

    HomeView.prototype.initialize = function(options) {
      this.mediator = options.mediator;
      App.views.sidebar = new SidebarView(_.defaults({
        el: this.$el.find('.sidebar')
      }, options));
      return this.mediator.on("render:page:home", this.render);
    };

    HomeView.prototype.render = function(options) {
      $('#app').html(homeTemplate);
      this.mediator.trigger("render:sidebar");
      return this;
    };

    return HomeView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "helpers": function(exports, require, module) {
    (function() {

  exports.BrunchApplication = (function() {

    function BrunchApplication() {
      var _this = this;
      $(function() {
        _this.controllers = {};
        _this.collections = {};
        _this.views = {};
        _this.models = {};
        return _this.initialize(_this);
      });
    }

    BrunchApplication.prototype.initialize = function() {
      return null;
    };

    return BrunchApplication;

  })();

}).call(this);

  }
}));
(this.require.define({
  "controllers/application_controller": function(exports, require, module) {
    (function() {
  var BaseController,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BaseController = require('./base_controller').BaseController;

  exports.ApplicationController = (function(_super) {

    __extends(ApplicationController, _super);

    function ApplicationController(app) {
      this.appReady = __bind(this.appReady, this);      ApplicationController.__super__.constructor.call(this, app);
      this.mediator.on("application:ready", this.appReady);
    }

    ApplicationController.prototype.appReady = function() {
      console.log("ApplicationController::appReady");
      Backbone.history.start();
      $('.pageLoading').remove();
      this.navigate("home");
      console.log("!! NAVIGATOR DIDN'T WORK? !! controllers/application_controller.coffee - That last @navigate should have triggered the nav within MainRouter, but didn't? Why?");
      return null;
    };

    return ApplicationController;

  })(BaseController);

}).call(this);

  }
}));
(this.require.define({
  "controllers/base_controller": function(exports, require, module) {
    (function() {

  exports.BaseController = (function() {

    BaseController.app = null;

    BaseController.mediator = null;

    BaseController.router = null;

    function BaseController(app) {
      this.app = app;
      this.mediator = app.mediator;
      this.router = app.router;
      this.initialize(this);
    }

    BaseController.prototype.initialize = function() {
      return null;
    };

    BaseController.prototype.navigate = function(frag, options) {
      options = _.defaults(options || {}, {
        trigger: true
      });
      console.log('BaseController::navigate', frag, options);
      return this.router.navigate(frag, options);
    };

    return BaseController;

  })();

}).call(this);

  }
}));
(this.require.define({
  "routers/main_router": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.MainRouter = (function(_super) {

    __extends(MainRouter, _super);

    function MainRouter() {
      MainRouter.__super__.constructor.apply(this, arguments);
    }

    MainRouter.prototype.routes = {
      '': 'start'
    };

    MainRouter.prototype['home'] = 'home';

    MainRouter.prototype['subpage'] = 'subpage';

    MainRouter.prototype['secondarysubpage'] = 'secondarySubpage';

    MainRouter.prototype.start = function() {
      return console.log('MainRouter::start (blank route)');
    };

    MainRouter.prototype.home = function() {
      console.log('MainRouter::home');
      return App.mediator.trigger("render:page:home");
    };

    MainRouter.prototype.subpage = function() {
      console.log('MainRouter::subpage');
      return App.mediator.trigger("render:page:subpage");
    };

    MainRouter.prototype.subpage = function() {
      console.log('MainRouter::secondarysubpage');
      return App.mediator.trigger("render:page:secondarysubpage");
    };

    MainRouter.prototype.route = function(route, name, callback) {
      console.log('MainRouter::route', name);
      return MainRouter.__super__.route.call(this, route, name, callback);
    };

    return MainRouter;

  })(Backbone.Router);

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var ApplicationController, BrunchApplication, HomeView, MainRouter,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BrunchApplication = require('helpers').BrunchApplication;

  MainRouter = require('routers/main_router').MainRouter;

  ApplicationController = require('controllers/application_controller').ApplicationController;

  HomeView = require('views/home_view').HomeView;

  exports.App = (function(_super) {

    __extends(App, _super);

    function App() {
      App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      this.mediator = _.extend({}, Backbone.Events);
      this.mediator._trigger = this.mediator.trigger;
      this.mediator.trigger = function(event, args) {
        console.log('Mediator::trigger', arguments);
        return this._trigger(event, args);
      };
      this.router = new MainRouter();
      this.initControllers();
      this.initViews();
      this.mediator.trigger("application:ready");
      return this;
    };

    App.prototype.initViews = function() {
      var options;
      options = {
        mediator: this.mediator
      };
      return this.views.home = new HomeView(_.defaults(options, {
        el: $('#app')
      }));
    };

    App.prototype.initControllers = function() {
      return this.controllers.application = new ApplicationController(this);
    };

    return App;

  })(BrunchApplication);

  window.App = new exports.App;

}).call(this);

  }
}));
(this.require.define({
  "views/sidebar_view": function(exports, require, module) {
    (function() {
  var sidebarTemplate,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  sidebarTemplate = require('./templates/sidebar');

  exports.SidebarView = (function(_super) {

    __extends(SidebarView, _super);

    function SidebarView() {
      this.render = __bind(this.render, this);
      SidebarView.__super__.constructor.apply(this, arguments);
    }

    SidebarView.prototype.mediator = null;

    SidebarView.prototype.events = {
      "click a": "linkClicked"
    };

    SidebarView.prototype.initialize = function(options) {
      this.mediator = options.mediator;
      this.mediator.on("render:sidebar", this.render);
      return this.$el = $(options.el);
    };

    SidebarView.prototype.render = function() {
      this.$el.html(sidebarTemplate);
      return this;
    };

    SidebarView.prototype.linkClicked = function() {
      return alert("You clicked the sidebar link");
    };

    return SidebarView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/subpage_view": function(exports, require, module) {
    (function() {
  var subpageTemplate,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  subpageTemplate = require('./templates/subpage');

  exports.SubpageView = (function(_super) {

    __extends(SubpageView, _super);

    function SubpageView() {
      this.render = __bind(this.render, this);
      SubpageView.__super__.constructor.apply(this, arguments);
    }

    SubpageView.prototype.mediator = null;

    SubpageView.prototype.events = {
      'click button': 'buttonClicked'
    };

    SubpageView.prototype.initializer = function(options) {
      console.log('SubpageView::initializer', options);
      this.$el = $(options.el);
      this.mediator = options.mediator;
      return this.router = options.router;
    };

    SubpageView.prototype.render = function(options) {
      this.$el.html(subpageTemplate);
      return this;
    };

    SubpageView.prototype.buttonClicked = function() {
      alert("You clicked a button in the HomeView's SubpageView. We'll now trigger an event to change to the SecondarySubpage view");
      return App.router.navigate("home", {
        trigger: true
      });
    };

    return SubpageView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/templates/home": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"sidebar\">\n  Sidebar will load here  \n</div>\n\n<div class=\"page-container container-fluid\">\n  SubPage will load here\n</div>\n";});
  }
}));
(this.require.define({
  "views/templates/subpage": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<section class=\"subpage\">\n  <div class=\"row\">\n    <h1>SubpageView : templates/subpage.handlebars</h1>\n    <button>Click me</button>\n  </div>\n</section>";});
  }
}));
(this.require.define({
  "views/templates/sidebar": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<h2>Sidebar</h2>\n<ul>\n  <li>\n    <a href=\"#myroute\">Go to myroute</a>\n  </li>\n</ul>";});
  }
}));
