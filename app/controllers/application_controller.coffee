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
    console.log "!! NAVIGATOR DIDN'T WORK? !! controllers/application_controller.coffee - That last @navigate should have triggered the nav within MainRouter, but didn't? Why?"
    null