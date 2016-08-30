MBT.API.NewNav = 1;
MBT.API.ApiId = MBTWP.apiId;
MBT.API.Lang = MBTWP.lang;

MBTIntegration = {};

MBTIntegration.leagueId = MBTWP.leagueId; //set this to correct league id
MBTIntegration.gameId   = getUrlPart(MBTWP.gameSlug);
MBTIntegration.seasonId = MBTWP.defaultSeason;
MBTIntegration.teamId   = getUrlPart(MBTWP.teamSlug);
MBTIntegration.playerId = getUrlPart(MBTWP.playerSlug);
MBTIntegration.arenaId  = MBT.API.URL.CurrentQueryString.get("arena_id");

if(MBT.API.URL.CurrentQueryString.get("seasonId")){
   MBTIntegration.seasonId = MBT.API.URL.CurrentQueryString.get("seasonId");  
}



MBTIntegration.navigatePlayer = function (playerId, seasonId) 
{
    return MBTWP.baseUrl+"/"+MBTWP.playerSlug+"/"+ playerId + addSeason(seasonId);
}

MBTIntegration.navigateTeam = function (teamId, seasonId)
{
    return MBTWP.baseUrl + "/"+MBTWP.teamSlug+"/"+ teamId + addSeason(seasonId);
}

MBTIntegration.navigateGame = function (gameId, seasonId)
{
     return MBTWP.baseUrl +"/"+MBTWP.gameSlug+"/"+ gameId;
}

MBTIntegration.navigateStandings = function(leagueId, seasonId)
{
    return MBTWP.baseUrl + '/top/competition/standings/?season_id=df&league_id=' + leagueId;
}

MBTIntegration.navigateSchedule = function(seasonId)
{
    return MBTWP.baseUrl + '/top/competition/games/?season_id=' + seasonId;
}

MBTIntegration.navigatePlayerStatistics = function(seasonId)
{
    return MBTWP.baseUrl + lang_prefix+ '/top/statistics/player-statistics/?season_id=' + seasonId;
}

MBTIntegration.navigateArena = function(arenaId)
{
    return MBTWP.baseUrl + lang_prefix+ '/top/competition/arena/?arena_id=' + arenaId;
}

MBTIntegration.handleSeasonClick = function (seasonId) 
{
    var link = document.location.href;
    var new_link="";
    var search_result = link.indexOf('?');
    if( search_result == -1)
        new_link = document.location.href + "?season_id=" + seasonId;
    else
    {
        var parameters_url = link.substring(search_result+1);
        new_link = link.substring(0,search_result);
        var parameters = parameters_url.split("&");
        for(i=0; i<parameters.length; i++)
        {
            var value = 0;
            var param = parameters[i].split("=");
            if(param[0]=="season_id")
            {
                value = seasonId;
            }
            else
            {
                value = param[1];
            }
            if(i != 0)
                new_link += "&";
            else
                new_link += "?";
            new_link += param[0]+"="+value;
        }
    }
    document.location.href = new_link;
}

MBTIntegration.navigateLiveGame = function(gameId, seasonId, leagueId, spId)
{
    if(spId) {
        return "javascript:window.open('http://www.fibalivestats.com/u/SBBF/"+spId+"', '_blank');void(0);";
    }
    // set live link to correct client
    return "javascript:window.open('http://live.baskethotel.com/SBBF/', '_blank', 'width=715,height=660,status=no,location=no,toolbar=no,menubar=no,scrollbars=no,resizable=yes,left=0,top=0');void(0);";
    //return MBTWP.baseUrl + lang_prefix+"/results-live/?game_id=" +gameId;
}

function getUrlPart(part){
    var urlParts = window.location.pathname.split( '/' );    
    for (i = 0; i < urlParts.length; i++){
        if(urlParts[i] == part){
            return urlParts[i+1] ;
        }
    }

    return false;
}

function addSeason(seasonId){

    if(seasonId != MBTWP.defaultSeason){
        return '?seasonId='+seasonId;
    }
    return '';
}

activeTeam = function(){

    var teamPage = getUrlPart('team');

    if( teamPage ) {
    
        var logos = jQuery("#mbt-bh-widget-201").find("ul.mbt-simple-list-team-logos li a");

        jQuery( logos ).each(function( index,data ) {
            if( jQuery(data).attr('team_id') ==  teamPage ) {
                jQuery(this).addClass('no-grey');
            }
        });
    }
}

