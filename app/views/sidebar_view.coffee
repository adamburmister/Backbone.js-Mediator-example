sidebarTemplate = require './templates/sidebar'

class exports.SidebarView extends Backbone.View
    
  events:
    "click a": "linkClicked"
  
  initialize:(options) ->
    @mediator = options.mediator
    @mediator.on "render:sidebar", @render

    @$el = $(options.el)

  render: =>
    console.log "SidebarView::render", arguments
    @$el.html sidebarTemplate
    this

  linkClicked: ->
    alert "You clicked the sidebar link"