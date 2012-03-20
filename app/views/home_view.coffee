homeTemplate = require './templates/home'
{SidebarView} = require 'views/sidebar_view'
{SubpageView} = require 'views/subpage_view'    

class exports.HomeView extends Backbone.View

  mediator: null

  initialize:(options) ->
    @mediator = options.mediator

    App.views.sidebar = new SidebarView _.defaults({ el: @$el.find('.sidebar') }, options)
    
    @mediator.on "render:page:home", @render

  render:(options) =>
    $('#app').html homeTemplate
    @mediator.trigger "render:sidebar"

    return this
