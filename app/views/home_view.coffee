homeTemplate = require './templates/home'
{SubpageView} = require 'views/subpage_view'    
{SidebarView} = require 'views/sidebar_view'
{SecondarysubpageView} = require 'views/secondarysubpage_view'

class exports.HomeView extends Backbone.View
  
  initialize: ->
    console.log 'HomeView::initializer', @, @options
    @mediator = @options.mediator
    @mediator.on "render:page:home", @render

  render:(options) =>
    @$el.html homeTemplate
    @createSubviewsIfRequired()
    @mediator.trigger "render:sidebar"
    @mediator.trigger "render:page:secondarysubpage"
    return this

  createSubviewsIfRequired: =>
    opts = { mediator: @mediator }
    App.views.sidebar = new SidebarView(opts) unless App.views.sidebar
    App.views.subpage = new SubpageView(opts) unless App.views.subpage
    App.views.secondarysubpage = new SecondarysubpageView(opts) unless App.views.secondarysubpage

