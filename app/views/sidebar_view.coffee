sidebarTemplate = require './templates/sidebar'

class exports.SidebarView extends Backbone.View

  mediator: null
  
  events:
    "click a": "linkClicked"
  
  initialize:(options) ->
    @mediator = options.mediator
    @mediator.on "render:sidebar", @render

    @$el = $(options.el)

  render: =>
    @$el.html sidebarTemplate
    this

  linkClicked: ->
    alert "You clicked the sidebar link"