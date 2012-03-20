secondarysubpageTemplate = require('./templates/secondarysubpage')

class exports.SecondarysubpageView extends Backbone.View
  
  events:
    'click button': 'buttonClicked'

  initializer:(options) ->
    console.log 'SecondarySubpageView::initializer', options
    @$el = $(options.el)
    @mediator = options.mediator

    @mediator.on "render:page:secondarysubpage", @render

  render: =>
    console.log "SecondarySubpageView::render", arguments
    @$el.html secondarysubpageTemplate
    this

  buttonClicked: ->
    alert("Good work")
    App.router.navigate "subpage", { trigger: true }