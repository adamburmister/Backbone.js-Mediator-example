{BrunchApplication} = require 'helpers'
# Routers
{MainRouter} = require 'routers/main_router'
# Controllers
{ApplicationController} = require 'controllers/application_controller'
# Views
{HomeView} = require 'views/home_view'

class exports.App extends BrunchApplication
  
  initialize: ->
    @mediator = _.extend({}, Backbone.Events)
    @mediator._trigger = @mediator.trigger
    @mediator.trigger = (event, args) ->
      console.log 'Mediator::trigger', arguments
      @_trigger event, args

    @router = new MainRouter()
    
    @initControllers()
    @initViews()

    # Let there be life!!
    @mediator.trigger "application:ready"

    this

  initViews: ->
    options =
      mediator: @mediator
    
    @views.home = new HomeView  _.defaults(options, { el: $('#app') })

  initControllers: ->
    @controllers.application = new ApplicationController this

window.App = new exports.App