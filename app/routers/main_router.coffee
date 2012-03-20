# The router organises rendering of the application through the mediator
# by triggering "render:" events.
# This keeps the router dumb.

class exports.MainRouter extends Backbone.Router
  
  routes:
    ''                : 'start'
    'home'            : 'home'
    'subpage'         : 'subpage'
    'secondarysubpage': 'secondarySubpage'

  start: ->
    console.log 'MainRouter::start (blank route)'
    null

  home: ->
    console.log 'MainRouter::home'
    App.mediator.trigger "render:page:home"

  subpage: ->
    console.log 'MainRouter::subpage'
    App.mediator.trigger "render:page:subpage"

  secondarySubpage: ->
    console.log 'MainRouter::secondarysubpage'
    App.mediator.trigger "render:page:secondarysubpage"

  # Extend route to add some debug console output
  route: (route, name, callback) ->
    console.log 'MainRouter::route', name
    super route, name, callback