sidebarTemplate = require './templates/sidebar'

class exports.SidebarView extends Backbone.View

  el: '.sidebar'
    
  events:
    "click a": "linkClicked"
  
  initialize: ->
    console.log 'SidebarView::initializer', @options
    @mediator = @options.mediator
    
    @mediator.on "render:sidebar", @render

  render: =>
    console.log "SidebarView::render", @
    @$el.html sidebarTemplate
    this

  linkClicked:(e) =>
    e.preventDefault()
    @mediator.trigger "render:page:secondarysubpage"
    alert("You clicked the sidebar link. The page should have changed to the secondary subpage view.")