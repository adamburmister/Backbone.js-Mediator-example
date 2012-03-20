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
  "views/secondarysubpage_view": function(exports, require, module) {
    (function() {
  var secondarysubpageTemplate,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  secondarysubpageTemplate = require('./templates/secondarysubpage');

  exports.SecondarysubpageView = (function(_super) {

    __extends(SecondarysubpageView, _super);

    function SecondarysubpageView() {
      this.render = __bind(this.render, this);
      SecondarysubpageView.__super__.constructor.apply(this, arguments);
    }

    SecondarysubpageView.prototype.el = '.page-container';

    SecondarysubpageView.prototype.events = {
      'click button': 'buttonClicked'
    };

    SecondarysubpageView.prototype.initializer = function() {
      console.log('SecondarySubpageView::initializer', this.options);
      this.mediator = this.options.mediator;
      return this.mediator.on("render:page:secondarysubpage", this.render);
    };

    SecondarysubpageView.prototype.render = function() {
      console.log("SecondarySubpageView::render", arguments);
      this.$el.html(secondarysubpageTemplate);
      return this;
    };

    SecondarysubpageView.prototype.buttonClicked = function() {
      alert("Good work");
      return App.router.navigate("subpage", {
        trigger: true
      });
    };

    return SecondarysubpageView;

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
      '': 'start',
      'home': 'home',
      'subpage': 'subpage',
      'secondarysubpage': 'secondarySubpage'
    };

    MainRouter.prototype.start = function() {
      console.log('MainRouter::start (blank route)');
      return null;
    };

    MainRouter.prototype.home = function() {
      console.log('MainRouter::home');
      return App.mediator.trigger("render:page:home");
    };

    MainRouter.prototype.subpage = function() {
      console.log('MainRouter::subpage');
      return App.mediator.trigger("render:page:subpage");
    };

    MainRouter.prototype.secondarySubpage = function() {
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
  "views/home_view": function(exports, require, module) {
    (function() {
  var SecondarysubpageView, SidebarView, SubpageView, homeTemplate,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  homeTemplate = require('./templates/home');

  SubpageView = require('views/subpage_view').SubpageView;

  SidebarView = require('views/sidebar_view').SidebarView;

  SecondarysubpageView = require('views/secondarysubpage_view').SecondarysubpageView;

  exports.HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.createSubviewsIfRequired = __bind(this.createSubviewsIfRequired, this);
      this.render = __bind(this.render, this);
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.initialize = function() {
      console.log('HomeView::initializer', this, this.options);
      this.mediator = this.options.mediator;
      return this.mediator.on("render:page:home", this.render);
    };

    HomeView.prototype.render = function(options) {
      this.$el.html(homeTemplate);
      this.createSubviewsIfRequired();
      this.mediator.trigger("render:sidebar");
      this.mediator.trigger("render:page:secondarysubpage");
      return this;
    };

    HomeView.prototype.createSubviewsIfRequired = function() {
      var opts;
      opts = {
        mediator: this.mediator
      };
      if (!App.views.sidebar) App.views.sidebar = new SidebarView(opts);
      if (!App.views.subpage) App.views.subpage = new SubpageView(opts);
      if (!App.views.secondarysubpage) {
        return App.views.secondarysubpage = new SecondarysubpageView(opts);
      }
    };

    return HomeView;

  })(Backbone.View);

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
      this.linkClicked = __bind(this.linkClicked, this);
      this.render = __bind(this.render, this);
      SidebarView.__super__.constructor.apply(this, arguments);
    }

    SidebarView.prototype.el = '.sidebar';

    SidebarView.prototype.events = {
      "click a": "linkClicked"
    };

    SidebarView.prototype.initialize = function() {
      console.log('SidebarView::initializer', this.options);
      this.mediator = this.options.mediator;
      return this.mediator.on("render:sidebar", this.render);
    };

    SidebarView.prototype.render = function() {
      console.log("SidebarView::render", this, $(this.el), this.$el, this.el);
      $('.sidebar').html(sidebarTemplate);
      return this;
    };

    SidebarView.prototype.linkClicked = function(e) {
      e.preventDefault();
      this.mediator.trigger("render:page:secondarysubpage");
      return alert("You clicked the sidebar link. The page should have changed to the secondary subpage view.");
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
      this.buttonClicked = __bind(this.buttonClicked, this);
      this.render = __bind(this.render, this);
      SubpageView.__super__.constructor.apply(this, arguments);
    }

    SubpageView.prototype.el = '.page-container';

    SubpageView.prototype.events = {
      'click button': 'buttonClicked'
    };

    SubpageView.prototype.initializer = function() {
      console.log('SubpageView::initializer', this.options);
      this.mediator = this.options.mediator;
      return this.mediator.on("render:page:subpage", this.render);
    };

    SubpageView.prototype.render = function() {
      console.log("SubpageView::render", arguments);
      this.$el.html(subpageTemplate);
      return this;
    };

    SubpageView.prototype.buttonClicked = function() {
      alert("You clicked a button in the HomeView's SubpageView. We'll now trigger an event to change to the SecondarySubpage view");
      return App.router.navigate("secondarysubpage", {
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


  return "<div class=\"home\">\n  <div class=\"sidebar\">\n    (Sidebar will load here)\n  </div>\n\n  <div class=\"page-container\">\n    (SubPage will load here)\n  </div>\n</div>";});
  }
}));
(this.require.define({
  "views/templates/secondarysubpage": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"secondarysubpage\">\n  <h1>SecondarysubpageView : templates/secondarysubpage.handlebars</h1>\n  <button>Back to subpage</button>\n</div>";});
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
(this.require.define({
  "views/templates/subpage": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"subpage\">\n  <h1>SubpageView : templates/subpage.handlebars</h1>\n  <button>Click me to transition to the secondary subpage</button>\n</div>";});
  }
}));
