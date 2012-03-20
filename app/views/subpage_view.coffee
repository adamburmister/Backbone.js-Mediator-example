subpageTemplate = require('./templates/subpage')

class exports.SubpageView extends Backbone.View

  el: '.page-container'
  
  events:
    'click button': 'buttonClicked'

  initialize: ->
    console.log 'SubpageView::initialize', @options
    @mediator = @options.mediator
    @mediator.on "render:page:subpage", @render

  render: =>
    console.log "SubpageView::render", arguments
    @$el.html subpageTemplate
    this

  buttonClicked: =>
    App.router.navigate "secondarysubpage", { trigger: true }