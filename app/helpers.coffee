class exports.BrunchApplication
  constructor: ->
    $ =>
      # Placeholders
      @controllers = {}
      @collections = {}
      @views = {}
      @models = {}
      
      @initialize this

  initialize: ->
    null