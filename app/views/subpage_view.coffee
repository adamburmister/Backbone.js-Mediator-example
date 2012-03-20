subpageTemplate = require('./templates/subpage')

class exports.SubpageView extends Backbone.View

  mediator: null

  events:
    'click button': 'buttonClicked'

  initializer:(options) ->
    console.log 'SubpageView::initializer', options
    @$el = $(options.el)
    @mediator = options.mediator
    @router = options.router

  render:(options) =>
    @$el.html subpageTemplate
    this

  buttonClicked: ->
    alert("You clicked a button in the HomeView's SubpageView. We'll now trigger an event to change to the SecondarySubpage view")
    App.router.navigate "home", { trigger: true }