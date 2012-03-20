class exports.BaseController
  
  @app: null
  @mediator: null
  @router: null

  constructor:(app) ->  
    @app = app
    @mediator = app.mediator
    @router = app.router
    @initialize this

  initialize: ->
    null

  # Helper function to quickly navigate within a controller
  navigate:(frag, options) ->
    options = _.defaults(options || {}, { trigger:true })
    console.log 'BaseController::navigate', frag, options
    @router.navigate frag, options