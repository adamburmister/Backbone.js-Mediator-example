sidebarTemplate = require './templates/sidebar'

class exports.SidebarView extends Backbone.View
    
  events:
    "click a": "linkClicked"
  
  initialize:(options) ->
    console.log 'SidebarView::initializer', options
    @$el = $(options.el)
    @mediator = options.mediator
    
    @mediator.on "render:sidebar", @render

  render: =>
    console.log "SidebarView::render", arguments
    @$el.html sidebarTemplate
    this

  linkClicked: ->
    alert "You clicked the sidebar link"