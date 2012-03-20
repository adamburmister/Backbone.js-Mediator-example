subpageTemplate = require('./templates/subpage')

class exports.SubpageView extends Backbone.View
  
  events:
    'click button': 'buttonClicked'

  initializer:(options) ->
    console.log 'SubpageView::initializer', options
    @$el = $(options.el)
    @mediator = options.mediator
    @router = options.router

    @mediator.on "render:page:subpage", @render

  render: =>
    console.log "SubpageView::render", arguments
    @$el.html subpageTemplate
    this

  buttonClicked: ->
    alert("You clicked a button in the HomeView's SubpageView. We'll now trigger an event to change to the SecondarySubpage view")
    App.router.navigate "secondarysubpage", { trigger: true }