﻿define(['plugins/router', 'durandal/app', 'bootstrap','datatables'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router
            .makeRelative({moduleId: 'viewmodels'})
            .map([
                { route: '', title:'Welcome', moduleId: 'welcome', nav: true },
                { route: 'drivers', title: 'Drivers', moduleId: 'f1drivers', nav: true},
                { route: 'standings(/:id)', hash: '#standings', title: 'Driver Standings', moduleId: 'f1standings', nav: true},
                { route: 'constructorstandings(/:id)', hash: '#constructorstandings', title: 'Constructor Standings', moduleId: 'f1constructorstandings', nav: true},
                { route: 'results(/:id)(/:id)', hash: '#results', title: 'Race Results', moduleId: 'f1results', nav: true},
                { route: 'teams(/:id)', hash: '#teams', title: 'Teams', moduleId: 'f1teams', nav: true  },
                { route: 'seasons(/:id)', hash: '#seasons', title: 'Seasons', moduleId: 'f1seasons', nav: true},
                { route: 'admin', hash: '#admin', title: 'Admin', moduleId: 'f1scrape', nav: true  }
                

            ]).buildNavigationModel();
        
            return router.activate();
        },
        hideMenu: function(e){
            $(".navbar-collapse").collapse('hide');
            window.location.href = e.hash;
        }
    };
});