homeTemplate = require './templates/home'
{SidebarView} = require 'views/sidebar_view'
{SubpageView} = require 'views/subpage_view'    
{SecondarysubpageView} = require 'views/secondarysubpage_view'

class exports.HomeView extends Backbone.View
  
  initialize:(options) ->
    @mediator = options.mediator
    @$el = $(options.el)

    # QUESTION: How do I initialize these views? Is this the right place?
    # Should I be passing in $('') selectors at this stage, since this template has not been rendered yet
    App.views.sidebar = new SidebarView _.defaults({ el: @$el.find('.sidebar') }, options)
    App.views.subpage = new SubpageView _.defaults({ el: @$el.find('.page-container') }, options)
    App.views.secondarysubpage = new SecondarysubpageView _.defaults({ el: @$el.find('.page-container') }, options)
    
    @mediator.on "render:page:home", @render

  render:(options) =>
    @$el.html homeTemplate
    @mediator.trigger "render:sidebar"
    @mediator.trigger "render:page:subpage"
    return this
