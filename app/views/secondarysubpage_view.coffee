secondarysubpageTemplate = require('./templates/secondarysubpage')

class exports.SecondarysubpageView extends Backbone.View

  el: '.page-container'
  
  events:
    'click button': 'buttonClicked'

  initialize: ->
    console.log 'SecondarySubpageView::initialize', @options
    @mediator = @options.mediator

    @mediator.on "render:page:secondarysubpage", @render

  render: =>
    console.log "SecondarySubpageView::render", arguments
    @$el.html secondarysubpageTemplate
    this

  buttonClicked: ->
    App.router.navigate "subpage", { trigger: true }