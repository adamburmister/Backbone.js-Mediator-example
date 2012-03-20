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

    # QUESTION: Why doesn't the route get executed? The hash change happens, but no MainRouter.home method is run
    console.log "!! NAVIGATOR DIDN'T WORK? !! controllers/application_controller.coffee - That last @navigate should have triggered the nav within MainRouter, but didn't? Why?"
    null