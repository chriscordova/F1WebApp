define(['plugins/http', 'durandal/app', 'knockout', 'plugins/router', 'bootstrap','datatables','customScripts'], function (http, app, ko, router, bs) {

    return {
        router: router,
        seasons: ko.observableArray([]),
        years: ko.observableArray([]),
        countries: ko.observableArray([]),
        activate: function(year, country) {
            
            var that = this;
            var aYears = {
                "years":  ['2015','2016']
            };

            var aCountries = {
                "country": ['Australia','Malaysia','China','Bahrain','Spain','Monaco','Canada','Austria','Great-Britain','Hungary','Belgium','Italy','Singapore','Japan','Russia','United-States','Mexico','Brazil','Abu-Dhabi']
            };

            that.years(aYears.years);

            that.countries(aCountries.country);
            if (year == null && country == null){
                return;
            }
            else {
                var sURL = 'http://www.c0rdii.com/f1/api/seasons/' + year;
                var allSeasons = [];
                $.getJSON(sURL, function(data){
                    allSeasons = data;
                }).done(function(){
                    buildDataTable('#seasonsTable', that.seasons, allSeasons);
                });
            }

        },
        yearParam: function(){
            return router.activeInstruction().params[0];
        },
        countryParam: function(){
            return router.activeInstruction().params[1];
        },
        friendly: function(country){
            return country.replace('_',' ');
        },
        hideMenu: function(e,v){
            var id = v.currentTarget.parentElement.id;
            var $element = $('#' + id).parent();
            var bIsShown = $element.hasClass('in');
            if (bIsShown) $element.collapse('hide');
            window.location.href = v.currentTarget.hash;
        },
        select: function(item){
            item.viewUrl = 'views/circuitinfo';
            item.friendly = function(item){
                var self = this;
                return item.replace('_',' ');
            };
            app.showDialog(item);
        },
        viewSchedule: function(item){
            item.viewUrl = 'views/schedule';
            item.friendly = function(item){
                var self = this;
                return item.replace('_',' ');
            };
            app.showDialog(item);
        }
    }
});