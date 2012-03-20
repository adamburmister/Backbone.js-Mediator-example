{BaseController} = require './base_controller'

class exports.ApplicationController extends BaseController

  constructor: (app) ->
    super app
    @mediator.on "application:ready", @appReady

  appReady: =>
    console.log "ApplicationController::appReady"
    Backbone.history.start()
    $('.pageLoading').remove()
    @navigate "home"
    null