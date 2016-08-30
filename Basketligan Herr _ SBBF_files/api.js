MBT = {};
MBT.API = {};
MBT.API.Widgets = {};
MBT.API.Utils = {};
MBT.API.URL = {};
MBT.API.History = {};
MBT.API.Function = {};
MBT.API.Event = {};
MBT.API.UI = {};
MBT.API.Base64 = {};
MBT.API.Storage = {};
MBT.API.Cookies = {};
MBT.API.livePagesTypeIndex = null;
MBT.API.livePagesLangId = null;
MBT.API.imageServiceUrl = null;

MBT.API.livePagesTypeIndexConfig = null;

/* cross-client translations */
MBT.API.translationsLang = null;
MBT.API.translationsSetId = null;

MBT.API.addCSS = true;

MBT.API.getLivePagesTypeIndex = function(leagueId) {

    if( typeof leagueId !== 'undefined' && typeof MBT.API.livePagesTypeIndexConfig == 'function' ){
        return MBT.API.livePagesTypeIndexConfig(leagueId);
    }

    return MBT.API.livePagesTypeIndex;
};

MBT.API.getLivePagesLangId = function() {
    return MBT.API.livePagesLangId;
};

if (typeof(customServiceUrl) != 'undefined' && customServiceUrl != '') {
    MBT.API.ServiceUrl = customServiceUrl;
} else {
    MBT.API.ServiceUrl = "http://widgets.baskethotel.com/";
}
MBT.API.WidgetUrl = MBT.API.ServiceUrl + 'widget-service/show?';
MBT.API.StatisticsUrl = "http://185.38.167.137/stats.php";

MBT.API.stylesheetIndex = 0;
MBT.API.ApiCSSUrl = MBT.API.ServiceUrl + "css.php";

MBT.API.ShowSurnameFirst = false;
MBT.API.FirstNamePriority = false;

MBT.API.NAVIGATION_TYPE_INNER = 1;
MBT.API.NAVIGATION_TYPE_EXTERNAL = 2;
MBT.API.NAVIGATION_TYPE_CUSTOM = 3;

/**
 * Widget types
 */
MBT.API.Widgets.TEST_WIDGET = 1;

MBT.API.Widgets.PLAYER_FULL_VIEW_WIDGET = 100;
MBT.API.Widgets.PLAYER_SMALL_WIDGET = 101;
MBT.API.Widgets.PLAYER_ABC_LIST_WIDGET = 105;
MBT.API.Widgets.PLAYER_COMPARISON_WIDGET = 120;
MBT.API.Widgets.PLAYER_BIRTHDAY_WIDGET = 106;

MBT.API.Widgets.TEAM_FULL_VIEW_WIDGET = 200;
MBT.API.Widgets.TEAM_LOGO_LIST_WIDGET = 201;
MBT.API.Widgets.TEAM_SCHEDULE_WIDGET = 203;
MBT.API.Widgets.TEAM_RESULTS_WIDGET = 204;
MBT.API.Widgets.TEAM_IN_LEAGUES_SCHEDULE_WIDGET = 205;
MBT.API.Widgets.TEAM_IN_LEAGUES_LEADERS = 206;
MBT.API.Widgets.TEAM_COMPARISON_WIDGET = 220;
MBT.API.Widgets.TEAM_GAMES_SCROLLER = 225;

MBT.API.Widgets.SEASON_STANDINGS_SHORT_WIDGET = 300;
MBT.API.Widgets.SEASON_STANDINGS_LONG_WIDGET = 301;
MBT.API.Widgets.SEASON_SCHEDULE_SHORT_WIDGET = 302;
MBT.API.Widgets.SEASON_SCHEDULE_LONG_WIDGET = 303;
MBT.API.Widgets.SEASON_FINAL_STANDINGS_WIDGET = 304;
MBT.API.Widgets.SEASON_LEADERS_SHORT_WIDGET = 310;
MBT.API.Widgets.SEASON_PLAYERS_TOP_5_WIDGET = 311;
MBT.API.Widgets.SEASON_RESULTS_BY_TEAMS_WIDGET = 330;

MBT.API.Widgets.SEASON_SELECTOR_WIDGET = 320;

MBT.API.Widgets.GAME_FULL_VIEW_WIDGET = 400;
MBT.API.Widgets.GAME_LIVE_BANNER_WIDGET = 401;
MBT.API.Widgets.GAME_QUOTES_WIDGET = 402;
MBT.API.Widgets.GAME_MEDIA_WIDGET = 403;
MBT.API.Widgets.GAME_PLAY_BY_PLAY_WIDGET = 404;

MBT.API.Widgets.LEAGUE_LIST_WITH_REGIONS_WIDGET = 500;
MBT.API.Widgets.LEAGUE_RESULTS_VIEW_WIDGET = 501;
MBT.API.Widgets.LEAGUE_TRANSFER_LIST_WIDGET = 502;
MBT.API.Widgets.ALL_LEAGUES_SCHEDULE_WIDGET = 510;
MBT.API.Widgets.TODAYS_GAMES_WIDGET = 511;
MBT.API.Widgets.CALENDAR_SCHEDULE_WIDGET = 520;
MBT.API.Widgets.LEAGUE_SELECTOR_WIDGET = 530;

MBT.API.Widgets.COMPETITION_HISTORY_WIDGET = 550;

MBT.API.Widgets.STATISTICS_PLAYERS_WIDGET = 600;
MBT.API.Widgets.STATISTICS_TEAMS_WIDGET = 601;
MBT.API.Widgets.STATISTICS_COACHES_WIDGET = 602;
MBT.API.Widgets.STATISTICS_SCORING_WIDGET = 603;
MBT.API.Widgets.STATISTICS_EFF_LEADERS_WIDGET = 604;
MBT.API.Widgets.SELECTED_LEADERS_WIDGET = 605;

MBT.API.Widgets.RECORDS_PLAYERS_WIDGET = 700;
MBT.API.Widgets.RECORDS_TEAMS_WIDGET = 701;

MBT.API.Widgets.CLUB_FULL_VIEW_WIDGET = 800;

MBT.API.Widgets.ARENA_FULL_WIDGET = 810;

MBT.API.Widgets.SEARCH_SIMPLE_WIDGET = 900;

MBT.API.Widgets.PLAYOFF_SMALL_WIDGET = 1000;
MBT.API.Widgets.PLAYOFF_LARGE_WIDGET = 1001;

MBT.API.Widgets.ENROLLMENT_LIST_WIDGET = 2001;

MBT.API.Widgets.DISTRIBUTION_CLUB_WIDGET = 3000;

MBT.API.Widgets.NT_TEAM_FULL_WIDGET = 4000;
MBT.API.Widgets.NT_FRONTPAGE_FULL_WIDGET = 4010;
MBT.API.Widgets.NT_FRONTPAGE_COMPACT_WIDGET = 4011;
MBT.API.Widgets.NT_STATISTICS_PLAYER_WIDGET = 4100;
MBT.API.Widgets.NT_TOURNAMENT_WIDGET = 4200;
MBT.API.Widgets.NT_GAMES_OVERVIEW_WIDGET = 4300;
MBT.API.Widgets.NT_GAME_CARD_WIDGET = 4400;
MBT.API.Widgets.NT_GAMES_AND_TOURNAMENTS_WIDGET = 4500;

MBT.API.Widgets.NT_PLAYER_WIDGET = 4600;
MBT.API.Widgets.NT_PLAYER_LIST_WIDGET = 4650;

MBT.API.Widgets.GAMES_REFEREES_AND_HOST_TEAMS_WIDGET = 5000;
MBT.API.Widgets.GAMES_SCROLLER_WIDGET = 5100;


MBT.API.Widgets.WINNING_PERCENTAGE = 6000;

MBT.API.Widgets.ATTENDANCE_FULL = 6200;
MBT.API.Widgets.ATTENDANCE_TOP5 = 6201;

MBT.API.Widgets.GraphsLoaded = false;
MBT.API.Widgets.HtmlLiveLoaded = false;
MBT.API.Widgets.LogStats = true;
MBT.API.Widgets.ChartJsLoaded = false;

MBT.API.Cookies.NAMESPACE = "mbt-widget-app";

MBT.API.Utils.addCSS = function(url){
    var options = { rel: 'stylesheet', type: 'text/css', media: 'all' };

    var ss = document.createElement("link");
    ss.setAttribute("rel", options.rel);
    ss.setAttribute("type", options.type);
    ss.setAttribute("media", options.media);
    ss.setAttribute("href", url+"&v=129");
    document.getElementsByTagName("head")[0].appendChild(ss);
};

MBT.API.Utils.addScript = function(url, callback){

    if (typeof(MBT.API.debug) != 'undefined') {
            url += "&d=" + Math.random();
    }

    var ss = document.createElement("script");
    ss.setAttribute("type", "text/javascript");
    ss.setAttribute("language", "javascript");

    if (typeof(callback) != 'undefined')
    {
        ss.onreadystatechange = function () //IE
        {
            if (ss.readyState == 'loaded')
                callback();
        }
        ss.onload = callback;//Browsers
    }

    ss.setAttribute("src", url);

    var child = document.getElementsByTagName("head")[0].appendChild(ss);

    MBT.API.Event.observe(child, "load", MBT.API.Function.createDelegate(function (e, scriptElement) {
        try {
            document.getElementsByTagName("head")[0].removeChild(scriptElement);
        } catch (e){}
    }, null, [child], 1));

};

MBT.API.Utils.loadCharts = function( chartFunction )
{
    if( !MBT.API.Widgets.GraphsLoaded  )
    {
        MBT.API.Utils.addScript( MBT.API.ServiceUrl+"static/scripts/amcharts/flash/swfobject.js?v=2", function()
        {
            MBT.API.Utils.addScript(MBT.API.ServiceUrl+"static/scripts/amcharts/amcharts.js?v=2", function()
            {
            MBT.API.Utils.addScript(MBT.API.ServiceUrl+"static/scripts/amcharts/amfallback.js?v=2", function()
            {
                MBT.API.Utils.addScript(MBT.API.ServiceUrl+"static/scripts/amcharts/raphael.js?v=2", chartFunction );
            });
            });
        });
        MBT.API.Widgets.GraphsLoaded = true;
    }
    else
    {
        chartFunction();
    }
};

MBT.API.Utils.loadChartsV2 = function( chartFunction )
{
    if( !MBT.API.Widgets.GraphsLoaded  )
    {
        MBT.API.Utils.addScript( MBT.API.ServiceUrl+"static/scripts/amcharts/amcharts.js?v=2", function() {
            MBT.API.Utils.addScript(MBT.API.ServiceUrl+"static/scripts/amcharts/raphael.js?v=2", chartFunction );
        });
        MBT.API.Widgets.GraphsLoaded = true;
    }
    else
    {
        chartFunction();
    }
};

MBT.API.Utils.loadChartJs = function(callback)
{
    if(!MBT.API.Widgets.ChartJsLoaded)
    {
        MBT.API.Utils.addScript(MBT.API.ServiceUrl + "static/scripts/external/ChartJs/dist/Chart.min.js", function() {
            callback;
        });
        MBT.API.Widgets.ChartJsLoaded = true;
    } else {
        callback();
    }
};

MBT.API.Utils.loadHtmlLive = function( liveFunction )
{
    var version = 2;
    if(!MBT.API.Widgets.HtmlLiveLoaded)
    {
        MBT.API.Utils.addCSS('http://beta.mbt.lt/~oskaras/live/static/styles/style_default.css?v='+version);
        MBT.API.Utils.addScript( "http://mbt.baskethotel.com/live/static/scripts/json2.js?v="+version, function()
        {
            MBT.API.Utils.addScript("http://mbt.baskethotel.com/live/static/scripts/mbtjs.js?v="+version, function()
            {
                MBT.API.Utils.addScript("http://mbt.baskethotel.com/live/static/scripts/live.js?v="+version, liveFunction );
            });
        });
        MBT.API.Widgets.HtmlLiveLoaded = true;
    }
    else
    {
        liveFunction();
    }
}

MBT.API.Utils.getObjectKeys = function (o) {
    var keys = [];
    for (var propertyName in o) {
        keys.push(propertyName);
    }
    return keys;
};

/**
 * Get available values from HTML select element
 * @param string elementId ID of select element
 * @return array
 */
MBT.API.Utils.getHtmlSelectValues = function(elementId) {
    var values = [];
    var options = document.getElementById(elementId).options;

    if (typeof(options) == 'undefined') {
        return [];
    }

    for (i = 0; i < options.length; i++) {
        values.push(options[i].value);
    }
    return values;
};

/**
 * Check if value exists in HTML select
 * @param string elementId ID of select element
 * @param mixed value Value to check
 * @return bool
 */
MBT.API.Utils.valueExistsInHtmlSelect = function(elementId, value) {
    var values = MBT.API.Utils.getHtmlSelectValues(elementId);

    for (i = 0; i < values.length; i++) {
        if (values[i] == value) {
            return true;
        }
    }

    return false;
};

MBT.API.logStat = function(w, container) {
    if(MBT.API.Widgets.LogStats) {
        var url = MBT.API.URL.mergeParams(MBT.API.StatisticsUrl, {api: MBT.API.ApiId, w: w});
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", url);
        iframe.style.display = "none";
        if (document.getElementById(container)) {
            document.getElementById(container).appendChild(iframe);
        }
    }
};

MBT.API.get = function(id) {

    if (typeof(id) == 'object') {
        return id;
    }

    return document.getElementById(id);
};

MBT.API.isElement = function(object) {
    return typeof(object) == 'object' && object.nodeType == 1;
};

MBT.API.isUndefined = function(object) {
    return typeof object == "undefined";
};


MBT.API.isArray = function(object) {
    return object != null && typeof object == "object" &&
      'splice' in object && 'join' in object;
 };


MBT.API.Browser = {
    IE:     !!(window.attachEvent && navigator.userAgent.indexOf('Opera') === -1),
    Opera:  navigator.userAgent.indexOf('Opera') > -1,
    WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
    Gecko:  navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') === -1,
    MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/)
};


MBT.API.toJSON = function(object) {
    var type = typeof object;
    switch (type) {
      case 'undefined':
      case 'function':
      case 'unknown':
         return;
      case 'boolean':
        return object ? 1 : 0;
    }

    if (object === null) {
        return 'null';
    }
    if (object.toJSON) {
        return object.toJSON();
    }
    if (MBT.API.isElement(object)) {
        return;
    }

    var results = [];
    for (var property in object) {
        var value = MBT.API.toJSON(object[property]);
        if (!MBT.API.isUndefined(value)) {
           results.push(property.toJSON() + ': ' + value);
        }
    }

    return '{' + results.join(', ') + '}';
};


MBT.API.extend = function(destination, source) {
    for (var property in source.prototype) {
        destination.prototype[property] = source[property];
    }
    return destination;
};


MBT.API.update = function(id, content) {
    var container = MBT.API.get(id);
    if (container == null) {
        throw "Container element is empty " + content;
    }
    if (content.indexOf('<form') > -1 && MBT.API.isInForm(container)) {
        content = content.replace(/<form[^>]*>/g,"").replace(/<\/form>/g,"");
    }
        /* workaround for IE */
        var re = new RegExp("^\<option.*\/option\>","gi");
        if (re.test(content.replace(/^\s+|\s+$/g, ''))) {
            var re = new RegExp("\<option.*\/option\>","gi");
            container.options.length = 0;
            while (o = re.exec(content)) {
                var opt = o[0];
                var reValue = new RegExp('value="([0-9]*)"', 'gi');
                var resValue = reValue.exec(opt);
                if (resValue) {
                    var value = resValue[1];
                } else {
                    var value = "";
                }
                var reText = new RegExp('\<option.*\>(.*)\<\/option\>', 'gi');
                var resText = reText.exec(opt);
                if (resText) {
                    var text = resText[1];
                } else {
                    var text = "";
                }
                var elOptNew = document.createElement('option');
                elOptNew.text = text;
                elOptNew.value = value;
                container.options.add(elOptNew);
            }
        } else {
            container.innerHTML = content;
        }

    content.evalScripts();
};

MBT.API.isInForm = function(element) {
    if (!element)
        return false;
    if (element.tagName == 'FORM') {
        return true;
    }
    if (element.tagName == 'BODY') {
        return false;
    }
    return MBT.API.isInForm(element.parentNode);
}

MBT.API.triggerError = function(text) {
    if (typeof console == "object"){
        console.log(text);
    }
};


MBT.API.addApiCSS = function() {

    if (typeof(MBT.API.apiCSSLoaded) != 'undefined' && MBT.API.apiCSSLoaded || !MBT.API.addCSS ) {
        return;
    }

    var apiCssFile = MBT.API.getApiCSSUrl();
    var styles = document.getElementsByTagName("link");

    var exists = false;

    // CSS file have to be unique
    for (var i = 0; i < styles.length; i++) {
        if (styles[i].href == apiCssFile) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        MBT.API.Utils.addCSS(apiCssFile);
        MBT.API.apiCSSLoaded = true;
    }

};

MBT.API.getApiCSSUrl = function() {
    var cssApi = MBT.API.ApiId;
    if(typeof(MBT.API.Widgets.CssApi) != 'undefined') {
        var cssApi = MBT.API.Widgets.CssApi;
    }
    var url = MBT.API.ApiCSSUrl + "?api=" + cssApi + '&index=' + MBT.API.stylesheetIndex;
    if (typeof(mbtBasketHotelVersion) != 'undefined') {
        url += '&ver=' + mbtBasketHotelVersion;
    }
    return url;
};


/**
 * Some constants
 */
MBT.API.Widgets.LOADING_IMG_LARGE = MBT.API.ServiceUrl + 'static/images/loading-large.gif'
MBT.API.Widgets.STATE_URL_PREFIX = "mbt:";

// Static variable
if (typeof(MBT.API.Lang) == 'undefined') {
    MBT.API.Lang = "en";
}

// possibility to allow right click on links
if (typeof(MBT.API.NewNav) == 'undefined') {
    MBT.API.NewNav = 0;
}

// allows to pass params as object to navigation handlers
if (typeof(MBT.API.NavObject) == 'undefined') {
    MBT.API.NavObject = 0;
}

MBT.API.Widgets.Widget = function(params) {
    this.container = null;
    this.width = null;
    this.height = null;
    this.widgetId = null;
    this.state = null;
    this.partial = null;
    this.callback = null;
    this.showLoadingIndicator = true;
    //this.params = [];
    this.params = {};
    if (typeof(params) == 'object') {
        for (var i in params) {
            if (typeof(this[i]) != 'undefined') {
                this[i] = params[i];
            }
        }
    }
    return this;
};

MBT.API.Widgets.Widget.prototype.setContainer = function(container) {
    this.container = container;
    this.__init();
};

MBT.API.Widgets.Widget.prototype.setCallback = function(callback) {
    this.callback = callback;
};


MBT.API.Widgets.Widget.prototype.setWidgetId = function(widgetId) {
    this.widgetId = widgetId;
    this.__init();
};

MBT.API.Widgets.Widget.prototype.setParam = function(name, value) {
    if (value == null || typeof(value) == 'undefined' || (typeof(value) == 'string' && (value == 'undefined' || value == 'null'))) {
        return;
    }

    this.params[name] = value;
};

MBT.API.Widgets.Widget.prototype.__init = function () {
    var c = MBT.API.get(this.container);

    if (c == null) {
        return;
    }

    var widgetId = this.widgetId;
    if (widgetId == null) {
        return;
    }
    c.setAttribute('mbt_widget', widgetId);
};


MBT.API.Widgets.Widget.prototype.setPartial = function(part) {
    this.partial = part;
};

MBT.API.Widgets.Widget.prototype.render = function() {

    var request = new MBT.API.Widgets.RenderRequest();
    request.addWidget(this);
    request.render();

};

MBT.API.Widgets.Widget.prototype.renderPartial = function(part) {
    this.setPartial(part);
    var request = new MBT.API.Widgets.RenderRequest();
    request.addWidget(this);
    request.render();
};

MBT.API.Widgets.RenderRequest = function () {
    this.widgets = [];
};

MBT.API.Widgets.RenderRequest.prototype.addWidget = function (widget) {
    if (MBT.API.translationsLang) widget.setParam('translations_lang', MBT.API.translationsLang);
    if (MBT.API.translationsSetId) widget.setParam('translations_set_id', MBT.API.translationsSetId);
    this.widgets.push(widget);
};

MBT.API.Widgets.RenderRequest.prototype.setOutputFormat = function (format) {
    this.outputFormat = format;
};

MBT.API.Widgets.RenderRequest.prototype.serialize = function () {

    var url = "";

    if (this.outputFormat) {
        url += "&output_format=" + this.outputFormat;
    }

    for (var i = 0; i < this.widgets.length; i++) {
        widget = this.widgets[i];
        var container = MBT.API.get(widget.container);

        url += '&request[' + i + '][container]=' + container.id;
        url += '&request[' + i + '][widget]=' +  widget.widgetId;

        if (widget.partial) {
            url += '&request[' + i + '][part]=' +  widget.partial;
        }

        if (widget.state) {
            url += '&request[' + i + '][state]=' +  widget.state;
        }

        if (widget.callback) {
            url += '&request[' + i + '][callback=' + widget.callback;
        }

        if (widget.params) {
            url += MBT.API.URL.serialize('request[' + i + '][param]', widget.params);
        }
    }

    return MBT.API.Base64.encode(url);
};

MBT.API.Widgets.RenderRequest.prototype.render = function () {

    if (MBT.API.Widgets.RenderRequest.disableRender) {
        // sometimes we should ignore rendering requests
        return;
    }

    if (typeof(MBT.API.ApiId) == 'undefined') {
        throw "MBT.API.ApiId could not be empty";
    }

    if (MBT.API.Lang == '') {
        throw "MBT.API.Lang could not be empty";
    }

    if(this.widgets[0].params.api) {
        MBT.API.ApiId = this.widgets[0].params.api;
    }

    var url = MBT.API.WidgetUrl;
    url = MBT.API.URL.mergeParams(url, {});

    if (this.outputFormat) {
        url += "&output_format=" + this.outputFormat;
    }

    var isPartial = false;

    for (var i = 0; i < this.widgets.length; i++) {
        widget = this.widgets[i];
        var container = MBT.API.get(widget.container);

        if (container == null) {
            throw "Assign output container using setContainer(...)";
        }
        if (widget.partial) {
            isPartial = true;
        }

        if (widget.showLoadingIndicator) {
        MBT.API.Widgets.showLoading(container);
        }

        url += '&request[' + i + '][container]=' + container.id;
        url += '&request[' + i + '][widget]=' +  widget.widgetId;

        if (widget.partial) {
            url += '&request[' + i + '][part]=' +  widget.partial;
        }

        if (widget.state) {
            url += '&request[' + i + '][state]=' +  widget.state;
        }

        if (widget.callback) {
            url += '&request[' + i + '][callback]=' +  widget.callback;
        }

        if (MBT.API.imageServiceUrl != null) {
            widget.params['image_service_url'] = MBT.API.imageServiceUrl;
        }


        if (widget.params) {
            url += MBT.API.URL.serialize('request[' + i + '][param]', widget.params);
        }
    }

/*  if (!isPartial) {
        MBT.API.History.addRequest(this);
    }*/

    if (typeof(MBT.API.Widgets.RenderRequest.initialRequestState) == 'undefined') {
        MBT.API.Widgets.RenderRequest.initialRequestState = this.serialize();
    }


    MBT.API.Utils.addScript(url);
    MBT.API.logStat(this.widgets.length, this.widgets[0].container);
};


MBT.API.Widgets.showLoading = function (container) {
    container = MBT.API.get(container);
    if(container.tagName != 'IFRAME')
    {
        container.innerHTML = '<img class="mbt-loader-center" src="' + MBT.API.Widgets.LOADING_IMG_LARGE  + '" />';
    }

};

MBT.API.Widgets.RenderRequest.renderFromState = function(state) {
    var stateUrl = MBT.API.Base64.decode(state);
    var url = MBT.API.WidgetUrl;
    url = MBT.API.URL.mergeParams(url, {});
    url += stateUrl;

    MBT.API.Utils.addScript(url);
};

MBT.API.Widgets.findWidgetContainer = function (element) {

    element = MBT.API.get(element);

    do {
        if (element.getAttribute('mbt_widget') != null) {
            return element;
        }

        element = element.parentNode;
    } while (element != null && element.getAttribute);

    return element;
};


MBT.API.Widgets.Graph = function(params) {
    this.container = null;
    this.width = null;
    this.height = null;
    this.widgetId = null;
    this.partial = 'graph';
    this.settingsPartial = null;
    this.params = {};

    if (typeof(params) == 'object') {
        for (var i in params) {
            if (typeof(this[i]) != 'undefined') {
                this[i] = params[i];
            }
        }
    }
    return this;
};

MBT.API.Widgets.Graph.prototype.setContainer = function(container) {
    this.container = container;
};

MBT.API.Widgets.Graph.prototype.setWidgetId = function(widgetId) {
    this.widgetId = widgetId;
};

MBT.API.Widgets.Graph.prototype.setParam = function(name, value) {
//  this.params.push({name: name, value: value});
    this.params[name] = value;
};

MBT.API.Widgets.Graph.prototype.setWidgetId = function(widgetId) {
    this.widgetId = widgetId;
};

MBT.API.Widgets.Graph.prototype.setPartial = function(part) {
    this.partial = part;
};

MBT.API.Widgets.Graph.prototype.setSettingsPartial = function(settingsPart) {
    this.settingsPartial = settingsPart;
};

MBT.API.Widgets.Graph.prototype.render = function () {

    if (typeof(MBT.API.ApiId) == 'undefined') {
        throw "MBT.API.ApiId could not be empty";
    }

    if (MBT.API.Lang == '') {
        throw "MBT.API.Lang could not be empty";
    }

    /* default width and height */
    if (typeof(this.params.width) == 'undefined') {
        this.params.width = "400";
    }
    if (typeof(this.params.height) == 'undefined') {
        this.params.height = "250";
    }

    var url = MBT.API.WidgetUrl;
    url = MBT.API.URL.mergeParams(url, {"output_format" : "graph"});

    var container = MBT.API.get(this.container);

    if (container == null) {
        throw "Assign output container using setContainer(...)";
    }

    MBT.API.Widgets.showLoading(container);

    url += '&request[0][container]=' + container.id;
    url += '&request[0][widget]=' +  this.widgetId;

    if (this.partial) {
        url += '&request[0][part]=' +  this.partial;
    }

    if (this.params) {
        url += MBT.API.URL.serialize('request[0][param]', this.params);
    }

    container.style.border = "0px";
    container.width = this.params.width + "px";
    container.height = this.params.height + "px";
    container.scrolling = "no";

    container.src= url;

    MBT.API.logStat(1);
};

MBT.API.URL.openExternal = function (url) {
    document.location.href = url;
};

MBT.API.URL.loadContainer = function (url, container) {
    url = MBT.API.URL.mergeParams(url, {'container': container});
    MBT.API.Utils.addScript(url);
};

MBT.API.URL.mergeParams = function (url, params) {

    if (url.indexOf('?') == -1) {
        url += "?";
    }
    // add defautl params
    url += "&api=" + MBT.API.ApiId;
    url += "&lang=" + MBT.API.Lang;
    url += "&nnav=" + MBT.API.NewNav;
    url += "&nav_object=" + MBT.API.NavObject;
    if (MBT.API.ShowSurnameFirst) {
        url += "&surname_first=1";
    }
    if (MBT.API.FirstNamePriority) {
        url += "&first_name_priority=1";
    }
    if (!MBT.API.haveFlash()) {
        url += "&flash=0"
    }

    for (var i in params) {
        var type = typeof(params[i]);
        url += "&" + i + "=" + params[i];
    }

    return url;
};

MBT.API.URL.serialize = function (prefix, params) {

    var url = "";
    var type = typeof(params);

    if (type == "object") {
        for (var i in params) {
            if (typeof (params[i]) != 'function')
            url += MBT.API.URL.serialize(prefix + "[" + i + "]", params[i]);
        }
    } else if (type == "array") {
        for (var i = 0; i < params.length; i++) {
            url += "&" + prefix  + "[" + i + "]=" + params;
        }
    } else {
         url = "&" + prefix  + "=" + params;
    }
    return url
}

MBT.API.URL.QueryString = function (queryString) {
    this.params = {};

    if (queryString == null) {
        queryString = location.search.substring(1, location.search.length);
    }

    if (queryString.length == 0) {
        return;
    }

    queryString = queryString.replace(/\+/g, ' ');

    var args = queryString.split('&');

    for (var i = 0; i < args.length; i++) {
        var pair = args[i].split('=');
        var name = decodeURIComponent(pair[0]);

        var value = (pair.length==2)
            ? decodeURIComponent(pair[1])
            : name;

        this.params[name] = value;
    }
}

MBT.API.URL.QueryString.prototype.get = function(key, default_) {
    var value = this.params[key];
    return (value != null) ? value : default_;
}

MBT.API.URL.QueryString.prototype.contains = function(key) {
    var value = this.params[key];
    return (value != null);
}

MBT.API.Function.createDelegate = function(func, C, B, A) {
    var D = func;
    return function() {
        var F = B || arguments;
        if (A === true) {
            F = Array.prototype.slice.call(arguments,0);
            F = F.concat(B);
        } else {
            if (typeof A == "number") {
                F = Array.prototype.slice.call(arguments,0);
                var E = [A, 0].concat(B);
                Array.prototype.splice.apply(F,E);
            }
            return D.apply(C || window, F);
        }
    };
};

MBT.API.Event.observe =  function(elementName, eventName, handler) {

    element = typeof(elementName) == 'object' ? elementName : MBT.API.get(elementName);

    if (element) {
        if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        } else {
            element.attachEvent("on" + eventName, handler);
        }
    } else {

    }

    return element;
};

MBT.API.Event.stopObserve = function(elementName, eventName, handler) {
    element = typeof(elementName) == 'object' ? elementName : MBT.API.get(elementName);

    if (elementName.removeEventListener) {
        elementName.removeEventListener(eventName, handler, false);
    } else {
        if (elementName.detachEvent) {
            elementName.detachEvent('on' + eventName, handler);
        }
    }
}

MBT.API.Event.pointer =  function (event) {
    var docElement = document.documentElement,
    body = document.body || { scrollLeft: 0, scrollTop: 0 };
    return {
      x: event.pageX || (event.clientX +
        (docElement.scrollLeft || body.scrollLeft) -
        (docElement.clientLeft || 0)),
      y: event.pageY || (event.clientY +
        (docElement.scrollTop || body.scrollTop) -
        (docElement.clientTop || 0))
    };
};

MBT.API.Event.pointerX =  function (event) {
    return MBT.API.Event.pointer(event).x
};

MBT.API.Event.pointerY =  function (event) {
    return MBT.API.Event.pointer(event).y
};

MBT.API.Event.getEvent = function(e) {
    return e || window.event;
};


MBT.API.Event.getTargetObject = function(e) {
    return e.target ? e.target : (e.srcElement ? e.srcElement : window.event.srcElement);

};

MBT.API.UI.TabPanel = function(config)
{
    this.parentInstanceId = config.parentInstanceId ? config.parentInstanceId : null;
    this.container = config.container ? config.container : null;
    this.activeTabClass = config.activeTabClass ? config.activeTabClass : "active";
    this.tabClass = config.tabClass ? config.tabClass : "";
    this.hoverTabClass = config.hoverTabClass ? config.hoverTabClass : "";
    this.noCache = config.noCache ? config.noCache : null;
    this.rotatorHandler = 0;
    this.rotatorMiliseconds = config.rotatorMiliseconds ? config.rotatorMiliseconds : 0;
    this.cancelActiveTabEvent = config.cancelActiveTabEvent ? config.cancelActiveTabEvent : false;

    this.activeTab = -1;
    activeTab = typeof(config.activeTab) != undefined ? config.activeTab : null;
    this.tabs = config.tabs ? config.tabs : [];

    this.indexInController = config.indexInController ? config.indexInController : 0;

    if (this.tabs) {
        for (var i = 0; i < this.tabs.length; i++) {
            var delegate = MBT.API.Function.createDelegate(this.setActiveTab, this, [i], 0);
            MBT.API.Event.observe(this.tabs[i].tabId, "click", delegate);

            if (this.hoverTabClass) {
                var delegate = MBT.API.Function.createDelegate(this.mouseOverTab, this, [i], 0);
                MBT.API.Event.observe(this.tabs[i].tabId, "mouseover", delegate);

                var delegate = MBT.API.Function.createDelegate(this.mouseOutTab, this, [i], 0);
                MBT.API.Event.observe(this.tabs[i].tabId, "mouseout", delegate);

            }
        }
    }

    this.loadedCache = {};

    if (this.tabs && activeTab != null) {
        this.setActiveTab(activeTab);
    }

    if (this.rotatorMiliseconds > 0) {
        this.startRotator(this.rotatorMiliseconds);
    }

};

MBT.API.UI.TabPanel.prototype.setActiveTab = function(index, e, initial, force) {

    /**
     * Stopping rotator. If tab is set as active by rotator itself, it will be activated again.
     */
    this.stopRotator();

    if (this.cancelActiveTabEvent && e) {
        e.preventDefault();
    }

    if (typeof initial == 'undefined') {
        initial = false;
    }

    if (typeof(this.tabs[index]) != 'undefined') {

        if (!force && this.activeTab == index) {
            return;
        }

        var tabSettings = this.tabs[index];
        if (this.activeTab != -1) {

            var prevTabSettings = this.tabs[this.activeTab];

            var content = MBT.API.get(this.container).innerHTML;
            this.loadedCache[this.activeTab] = content;
            MBT.API.get(this.container).innerHTML = "";
            MBT.API.get(prevTabSettings.tabId).className = this.tabClass;
        }

        MBT.API.get(tabSettings.tabId).className = this.activeTabClass;
        MBT.API.get(tabSettings.tabId).setAttribute("prevClassName", this.activeTabClass);
        this.activeTab = index;

        if (this.noCache || typeof(this.loadedCache[index]) == 'undefined') {
            tabSettings.needLoad(this, index);
        } else {
            MBT.API.update(this.container, this.loadedCache[index]);
        }

        if (this.parentInstanceId != null && !initial) {
            MBT.API.History.setParam(this.parentInstanceId, MBT.API.History.tabIndex, this.indexInController, index);
            MBT.API.History.manualHashChange = true;
        }

    }
};

MBT.API.UI.TabPanel.prototype.clearCache = function() {
    for(key in this.loadedCache) {
        delete this.loadedCache[key];
    }
};

MBT.API.UI.TabPanel.prototype.mouseOverTab = function(index) {
    if (typeof(this.tabs[index]) != 'undefined') {
        var element = MBT.API.get(this.tabs[index].tabId);
        element.setAttribute("prevClassName", element.className);
        element.className = this.hoverTabClass;
    }
};

MBT.API.UI.TabPanel.prototype.mouseOutTab = function(index) {

    if (typeof(this.tabs[index]) != 'undefined') {
        var element = MBT.API.get(this.tabs[index].tabId);
        if (element.getAttribute("prevClassName")) {
            element.className = element.getAttribute("prevClassName");
        }
    }
};

MBT.API.UI.TabPanel.prototype.startRotator = function(miliseconds)
{
    this.rotatorMiliseconds = miliseconds;
    this.rotatorHandler = setTimeout(MBT.API.Function.createDelegate(this.rotateTab, this), miliseconds);
};

MBT.API.UI.TabPanel.prototype.stopRotator = function()
{
    if (this.rotatorHandler > 0) {
        clearTimeout(this.rotatorHandler);
    }
};

MBT.API.UI.TabPanel.prototype.rotateTab = function()
{
    var newTab = this.activeTab + 1;
    if (newTab >= this.tabs.length) {
        newTab = 0;
    }
    this.setActiveTab(newTab);
    this.rotatorHandler = setTimeout(MBT.API.Function.createDelegate(this.rotateTab, this), this.rotatorMiliseconds);
};

MBT.API.UI.Select = {};

MBT.API.UI.Select.clearOptions = function(el) {
    MBT.API.get(el).innerHTML = "";
};

MBT.API.UI.Select.addOptions = function(el, options) {

    var el = MBT.API.get(el);

    if (!el || !options) {
        return;
    }

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = options[i].text;
        option.value = options[i].id;

        el.appendChild(option);

        if (options[i].selected) {
            el.selectedIndex = i + 1;
        }
    }
};

if (typeof(String.prototype.evalScripts) == 'undefined') {

    String.prototype.extractScripts =  function() {
        var scriptPattern = '<script[^>]*>([\\S\\s]*?)<\/script>';
        var matchAll = new RegExp(scriptPattern, 'img');
        var matchOne = new RegExp(scriptPattern, 'im');

        var results = this.match(matchAll) || [];
        var scripts = [];
        for (var i = 0; i < results.length; i++) {
            var r = (results[i].match(matchOne) || ['', ''])[1];

            if (r) {
                scripts.push(r);
            }
        }

        return scripts;
    };

    String.prototype.evalScripts =  function() {
        var scripts = this.extractScripts();

        for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i]);
        }
    };
}

/**
 * Get form element value
 */
MBT.API.UI.getFormElementValue = function (object) {


    var type = typeof(object);
    if (type == 'undefined') {
        return null;
    }

    if (type == "function" && object.length == 0) {
        // Safari bug: typeof(Object NodeList) == "function". NodeList greiciausiai tures ilgi > 0. Funkcijos ilgis visada 0.
    } else if (MBT.API.isElement(object) && object.tagName) {
        return object.value;
    } else if ((type == "object" || type == "function") && object.length) {
        // Safari bug: typeof(Object NodeList) == "function"
        // NodeList case
        var result = [];
        for (var i = 0; i < object.length; i++) {
            var value = MBT.API.UI.getFormInputElementValue(object[i]);
            if (value != null) {
                result.push(value);
            }
        }
        return result;
    } else if (type == "string") {
        return MBT.API.UI.getFormElementValue(MBT.API.get(object));
    } else {
        return null;
    }
};

MBT.API.UI.getFormInputElementValue = function (object) {

    switch (object.tagName) {
        case "INPUT":
            if (object.type == "checkbox" || object.type == "radio") {
                if (object.checked) {
                    return object.value;
                } else {
                    return null;
                }
            } else {
                return object.value;
            }

        case "SELECT":
            return object.value;
        case "TEXTAREAN":
            return object.innerHTML;

    }
};


MBT.API.UI.show = function (el) {
    MBT.API.get(el).style.display = "";
};

MBT.API.UI.hide = function (el) {
    MBT.API.get(el).style.display = "none";
};

MBT.API.UI.createWidgetContainer = function(id) {
    if (typeof(id) == 'undefined') {
        do {
            id = "mbt-widget-container-" + Math.round(Math.random() * 10000);
        } while (MBT.API.get(id) != null);
    }


    var container = document.createElement("div");
    container.id = id;
    container.setAttribute("mbt_widget", 1);
    document.body.appendChild(container);
    return container;
}

MBT.API.SafeNames = {};
MBT.API.SafeNames.Values = {};

MBT.API.SafeNames.Container = function (widgetInstanceId) {
    if (typeof(MBT.API.SafeNames.Values[widgetInstanceId]) == 'undefined') {
        MBT.API.SafeNames.Values[widgetInstanceId] = {};
    }

    return MBT.API.SafeNames.Values[widgetInstanceId];
}


/**
 * MBT.API.History supports back/forward buttons for widget reloads
 */

MBT.API.History.enabled = true;
MBT.API.History.hashPathSeparator = '/';
MBT.API.History.hashTypeSeparator = ':';
MBT.API.History.hashTypePrefix = '$';
MBT.API.History.hashParamSeparator = '&';
MBT.API.History.tabIndex = 't';
MBT.API.History.filterIndex = 'f';
MBT.API.History.pageIndex = 'p';
MBT.API.History.manualHashChange = false;
MBT.API.History.lastState = {};
MBT.API.History.notFound = {};

/**
 * Get parameters from hash and set initial widget state. Widget should perform actual rendering.
 */
MBT.API.History.init = function() {

    /*var hash  = location.hash.substring(1);

    this.currentHash  = hash;
    this.previousHash = hash;*/
    this.hiddenElementName =  'mbt-widget-history-container'

    var params = this.getHashParams();
    var parts = null;
    var namespace = null;
    var obj = null;
    for (var p in params) {
        parts = p.split(this.hashPathSeparator);
        if (parts[1] == this.tabIndex) {
            namespace = MBT.API.SafeNames.Container(parts[0]);
            namespace.initConfig = namespace.initConfig || {};
            namespace.initConfig.tabs = namespace.initConfig.tabs || [];
            namespace.initConfig.tabs[parts[2]] = {'activeTab': params[p]};
        } else if (parts[1] == this.filterIndex) {
            namespace = MBT.API.SafeNames.Container(parts[0]);
            namespace.initConfig = namespace.initConfig || {};
            namespace.initConfig.filters = namespace.initConfig.filters || [];
            namespace.initConfig.filters[parts[2]] = {'value': params[p]};
        } else if (parts[1] == this.pageIndex) {
            namespace = MBT.API.SafeNames.Container(parts[0]);
            namespace.initConfig = namespace.initConfig || {};
            namespace.initConfig.pages = namespace.initConfig.pages || [];
            namespace.initConfig.pages[parts[2]] = {'page': params[p]};
        } else {
            // ignore
        }
    }

    /* first state */
    this.lastState = params;

}

/**
 * Set hash change observers. Two different implementations are for browsers and Internet Explorer
 */
MBT.API.History.onDocumentLoad = function() {

    if (MBT.API.Browser.IE) {

        this.iframe = document.createElement('iframe');
        this.iframe.name = this.hiddenElementName
        this.iframe.id =  this.hiddenElementName ;
        this.iframe.src = '';
        this.iframe.width = '0';
        this.iframe.height ='0';
        this.iframe.style.visibility = 'hidden';

        document.body.appendChild(this.iframe);

//        this.setHashOnIframe(document.location.hash);
    } else {
        this.hiddenField = document.createElement('hidden');
        this.hiddenField.id = this.hiddenElementName;
        document.body.appendChild(this.hiddenField);
//        this.setHashOnHidden(document.location.hash);
    }

    this.tickObserver();
};

MBT.API.History.stateRestoreParams = {};

MBT.API.History.handleStateChange = function(hash) {

    this.stateRestoreParams = this.getChangesInHashParams(this.getHashParams(), this.lastState);
    this.restoreWidgetsState();

};

/**
 * Get params which have changed during navigation and should be applied
 */
MBT.API.History.getChangesInHashParams = function(current, last) {

    var changes = {};

    for (c in current) {
        if (typeof last[c] == 'undefined') {
            changes[c] = current[c];
            continue;
        }
        if (current[c] != last[c]) {
            changes[c] = current[c];
            delete(last[c]);
            continue;
        }
    }

    for (l in last) {
        if (typeof current[l] == 'undefined') {
            changes[l] = '0';
        } else {
            changes[l] = last[l];
        }
    }

    return changes;

};

MBT.API.History.restoreWidgetsState = function() {
    var params = MBT.API.History.stateRestoreParams;

    var parts = null;
    var namespace = null;
    var applyFilterFlag = false;

    for (p in params) {
        parts = p.split(this.hashPathSeparator);
        if (parts[1] == this.tabIndex) {
            if (typeof(MBT.API.SafeNames.Values[parts[0]]) == 'undefined') {
                setTimeout('MBT.API.History.restoreWidgetsState()', 1000);
                continue;
            }
            namespace = MBT.API.SafeNames.Container(parts[0]);
            if (typeof(namespace.tabController) == 'undefined') {
                setTimeout('MBT.API.History.restoreWidgetsState()', 1000);
                continue;
            }
            if (typeof namespace.tabController[parts[2]] == 'object') {
                namespace.tabController[parts[2]].setActiveTab(params[p]);
                delete this.lastState[p];
                delete MBT.API.History.stateRestoreParams[p];
            } else {
                setTimeout('MBT.API.History.restoreWidgetsState()', 1000);
            }
        } else if (parts[1] == this.filterIndex) {
            if (typeof(MBT.API.SafeNames.Values[parts[0]]) == 'undefined') {
                setTimeout('MBT.API.History.restoreWidgetsState()', 1000);
                continue;
            }
            namespace = MBT.API.SafeNames.Container(parts[0]);
            var elementId = parts[0] + '-filter-' + parts[2];
            if (document.getElementById(elementId)) {
                if (
                    document.getElementById(elementId).tagName != 'SELECT'
                    ||
                    MBT.API.Utils.valueExistsInHtmlSelect(elementId, params[p])
                ) {
                    document.getElementById(parts[0] + '-filter-' + parts[2]).value = params[p];
                    delete this.lastState[p];
                    delete MBT.API.History.stateRestoreParams[p];
                    applyFilterFlag = true;
                }
            } else if (document.getElementsByName(elementId) && document.getElementsByName(elementId).length > 0) {
                // multiple elements exist - possibly radio buttons
                var elements = document.getElementsByName(elementId);
                for (i = 0; i < elements.length; i++) {
                    if (elements[i].value == params[p]) {
                        elements[i].checked = true;
                    } else {
                        elements[i].checked = false;
                    }
                }
            } else {
//                this.notFound[this.filterIndex] = this.notFound[this.filterIndex] || {}
//                this.notFound[this.filterIndex][parts[2]] = params[p];
                setTimeout('MBT.API.History.restoreWidgetsState()', 1000);
            }
        } else if (parts[1] == this.pageIndex) {
            if (typeof(MBT.API.SafeNames.Values[parts[0]]) == 'undefined') {
                setTimeout('MBT.API.History.restoreWidgetsState()', 1000);
                continue;
            }
            namespace = MBT.API.SafeNames.Container(parts[0]);
                if(typeof(namespace.setPage) !== 'undefined') {
                    namespace.setPage(null, params[p]);
                    delete this.lastState[p];
                    delete MBT.API.History.stateRestoreParams[p];
                }
        } else {
            // ignore
        }
    }

    if (applyFilterFlag && typeof namespace.applyFilter != 'undefined') {
        namespace.applyFilter(null, false);
    }

};

MBT.API.History.getNotAppliedNavigation = function(type) {

    var r = {};

    if (type == this.tabIndex) {
        r = this.notFound[this.tabIndex];
    } else if (type == this.filterIndex) {
        r = this.notFound[this.filterIndex];
    } else if (type == this.pageIndex) {
        r = this.notFound[this.pageIndex];
    } else {
        r = this.notFound;
    }

    return r;

};

MBT.API.History.removeFromNotAppliedNavigation = function(type, name) {

    try {
        delete this.notFound[type][name];
    } catch (e) {}

}

MBT.API.History.setParam = function(widgetId, type, key, value) {

    var key = widgetId + this.hashPathSeparator + type + this.hashPathSeparator + key;

    var params = this.getHashParams();
    params[key] = value;
    hash = MBT.API.Widgets.STATE_URL_PREFIX + this.implodeHashParams(params);
    if (hash == MBT.API.Widgets.STATE_URL_PREFIX) {
        hash = '';
    }
    if (window.location.hash || hash.replace("#","") !== "") {
        // fake hash to avoid page jumping to the top
        if (hash == '') {
            window.location.hash = 'stf'; // something not funny
        } else {
            window.location.hash = hash;
        }
    }

    this.manualHashChange = true;
    this.previousHash = this.currentHash;

    // If IE, apply new hash to frame for history
    if  (MBT.API.Browser.IE) {
        if (hash != window.location.hash.substring(1)) {
            this.setHashOnIframe(hash);
        }
    } else {
        this.setHashOnHidden(hash);
    }

}

MBT.API.History.getHashParams = function() {

    var hash = window.location.hash.substring(1);

    /* check if this is mbt hash and remove prefix */
    var prefixLength = MBT.API.Widgets.STATE_URL_PREFIX.length;
    var params = null;
    if ((hash.substring(0, prefixLength) != MBT.API.Widgets.STATE_URL_PREFIX) || (prefixLength >= hash.length)) {
        params = {};
    } else {
        hash = hash.substring(prefixLength);
        params = this.explodeHashParams(hash);
    }

    return params;

}

/**
 * Parse hash into array of parameters
 */
MBT.API.History.explodeHashParams = function(hash) {

    var types = hash.split(this.hashTypeSeparator);
    var widgetId = '';
    var type = '';

    var params = {};
    for (var t = 0, len = types.length; t < len; t++) {
        var parts = types[t].split(this.hashParamSeparator);
        if (parts[0].substring(0, 1) == this.hashTypePrefix) {
            type = parts[0].substring(1);
        } else {
            var w = parts[0].split(this.hashTypePrefix);
            widgetId = w[0];
            type = w[1];
        }
        for (var i = 0, leni = parts.length; i < leni; i++) {
            var k = parts[i].split('=');
            if (unescape(k[1]) != 'undefined') {
                params[widgetId + this.hashPathSeparator + type + this.hashPathSeparator + unescape(k[0])] = unescape(k[1]);
            }
        }
    }

    return params;

}

/**
 * Form hash from array of parameters
 */
MBT.API.History.implodeHashParams = function(params) {

    var hash = '';

    var keys = MBT.API.Utils.getObjectKeys(params).sort();
    var keyParts = '';
    var lastWidgetId = '';
    var lastParamType = '';

    for (var k = 0, len = keys.length; k < len; k++) {
        var newWidget = false;
        if (params[keys[k]] == null || params[keys[k]] == '') {
            continue;
        }
        keyParts = keys[k].split(this.hashPathSeparator);
        if (keyParts.length != 3) {
            continue;
        }
        if (lastWidgetId != keyParts[0]) {
            hash += this.hashTypeSeparator + keyParts[0];
            lastWidgetId = keyParts[0];
            newWidget = true;
            lastParamType = '';
        }
        if (lastParamType != keyParts[1]) {
            if (!newWidget) {
                hash += this.hashTypeSeparator;
            }
            hash += this.hashTypePrefix + keyParts[1]
            lastParamType = keyParts[1];
        }
        hash += this.hashParamSeparator + escape(keyParts[2]) + '=' + escape(params[keys[k]]);
    }
    hash = hash.substring(1);

    return hash;

}

MBT.API.History.update = function() {
    this.previousHash = this.currentHash;
    var hash = window.location.hash.substring(1);
    this.currentHash = hash;
};

MBT.API.History.setHashOnIframe = function(hash) {
    try {


        if (MBT.API.History.iframe == null ||  MBT.API.History.iframe.contentWindow == null || MBT.API.History.iframe.contentWindow.document == null || MBT.API.History.iframe.contentWindow.document.body == null) {
            // @todo fix this place on IE
            window.setTimeout("MBT.API.History.setHashOnIframe('" + hash + "')", 200);
            return;
        }

        var h = MBT.API.History.getHashOnIframe();
        var doc = MBT.API.History.iframe.contentWindow.document;

        if (h != hash) {

            doc.open();
            doc.write('<html><body id="history">' + hash + '</body></html>');
            doc.close();
        }
    } catch(e) {
        throw e;
    }
};


MBT.API.History.getHashOnIframe = function() {
    var doc = MBT.API.History.iframe.contentWindow.document;


    if (doc && doc.body.id == 'history') {
        return doc.body.innerText;
    } else {
        return "";
      // throw "Error";
    }
};

MBT.API.History.setHashOnHidden = function(hash) {
    try {
        MBT.API.History.hiddenField.value = hash;
    } catch(e) {}
};

MBT.API.History.getHashOnHidden = function() {
    try {
        return MBT.API.History.hiddenField.value;
    } catch(e) {}
};

MBT.API.History.isAltered = function() {
    var c = MBT.API.History.currentHash;
    var p = MBT.API.History.previousHash;
    if (this.manualHashChange == true) {
        this.manualHashChange = false;
        return false;
    }
    if (typeof this.previousHash == 'undefined') {
        return false;
    }
    var altered = (c != p);
    if (altered) {
        this.lastState = this.explodeHashParams(p);
    }
    return altered;
};


MBT.API.History.tickObserver = function() {
    setTimeout('MBT.API.History.observeChanges()', 50);

}

MBT.API.History.observeChanges = function() {
    MBT.API.History.update();
    if (MBT.API.History.isAltered()) {
        MBT.API.History.handleStateChange(MBT.API.History.currentHash);
    }
    MBT.API.History.tickObserver();
};

MBT.API.History.handleStartup = function() {
    if (location.hash.length > 1) {
        var substr = location.hash.substring(1);

        if (!(MBT.API.History.findWidgetState(substr) === false)) {
       //   MBT.API.Widgets.RenderRequest.disableRender = true;
            MBT.API.Event.observe(window, 'load', MBT.API.Function.createDelegate(function (substr) {

                MBT.API.History.handleStateChange(substr);

                // some settings to emulate normal call
                MBT.API.Widgets.RenderRequest.initialRequestState = substr;
                MBT.API.History.firstLoad = false;
                MBT.API.Widgets.RenderRequest.disableRender = false;
            }, null, [substr]));

        }
    }
};

MBT.API.History.findWidgetState = function(hash) {
    var prefix = MBT.API.Widgets.STATE_URL_PREFIX;

    if (hash.indexOf(prefix) == 0) {
        return hash.substring(prefix.length);
    } else {
        return false;
    }
}

/**
 * Class to deal with application state
 */

MBT.API.Storage.AppState = function () {

}

MBT.API.Storage.AppState.prototype.get = function (name) {
    var varValue = MBT.API.URL.CurrentQueryString.get(name);

    if (varValue == null || typeof(varValue) == "string" && varValue == "null") {
        //varValue = MBT.API.Cookies.get(MBT.API.Cookies.NAMESPACE + name);
    }

    if (typeof(varValue) == "string" && varValue == "null") {
        varValue = null;
    }

    return varValue;
}

MBT.API.Storage.AppState.prototype.set = function (name, value) {
     MBT.API.Cookies.set(MBT.API.Cookies.NAMESPACE + name, value);
}

MBT.API.Storage.AppState.prototype.attachAppStateToExternalLinks = function (params, container, defaultValue) {

    var containerObject = MBT.API.get(container);

    if (containerObject == null) {
        return;
    }

    var links = containerObject.getElementsByTagName("a");

    var leagueId = MBT.API.Application.get('league_id');
    var seasonId = MBT.API.Application.get('season_id');


    var queryString = [];
    for (var i = 0; i < params.length; i++) {
        var value = MBT.API.Application.get(params[i]);

        if( value == null && defaultValue != null && defaultValue.length-1 >= i )
        {
            value = defaultValue[i];
        }

        if (value != null && !(typeof(type) == 'string' && (type == 'undefined' || type == 'null'))) {
            queryString.push(params[i] + "=" + value);
        }
    }

    queryString = queryString.join("&");

    if (queryString.length == 0) {
        return;
    }

    for (var i = 0; i < links.length; i++) {
        var url = links[i].href;
        if (url.indexOf('?') == -1) {
            url += '?';
        } else {
            url += '&';
        }

        url += queryString;

        links[i].href = url;
    }


}
/**
 * MBT.API.Cookies Helper class for cookie processing
 */

MBT.API.Cookies.set =  function (name, value, seconds) {
    if (seconds) {
        var d = new Date();
        d.setTime(d.getTime() + (seconds * 1000));
        var expiry = '; expires=' + d.toGMTString();
    } else {
        var expiry = '';
    }
    document.cookie = name + "=" + value + expiry + "; path=/";
};

MBT.API.Cookies.get = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if(c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
};
MBT.API.Cookies.unset = function(name) {
    MBT.API.Cookies.set(name,'',-1);
}

/**
 * MBT.API.Base64 Helper base64 encoding/decoding routine
 */

MBT.API.Base64.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
MBT.API.Base64.encode = function(input) {
   input = escape(input);
   var output = "";
   var chr1, chr2, chr3 = "";
   var enc1, enc2, enc3, enc4 = "";
   var i = 0;

   do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
         enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
         enc4 = 64;
      }

      output = output +
         MBT.API.Base64.keyStr.charAt(enc1) +
         MBT.API.Base64.keyStr.charAt(enc2) +
         MBT.API.Base64.keyStr.charAt(enc3) +
         MBT.API.Base64.keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
   } while (i < input.length);

   return output;
}

MBT.API.Base64.decode = function(input) {
   var output = "";
   var chr1, chr2, chr3 = "";
   var enc1, enc2, enc3, enc4 = "";
   var i = 0;

   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
   var base64test = /[^A-Za-z0-9\+\/\=]/g;
   if (base64test.exec(input)) {
      throw "There were invalid base64 characters in the input text.\n";
   }

   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

   do {
      enc1 = MBT.API.Base64.keyStr.indexOf(input.charAt(i++));
      enc2 = MBT.API.Base64.keyStr.indexOf(input.charAt(i++));
      enc3 = MBT.API.Base64.keyStr.indexOf(input.charAt(i++));
      enc4 = MBT.API.Base64.keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
         output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
         output = output + String.fromCharCode(chr3);
      }

      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";

   } while (i < input.length);

   return unescape(output);
}


MBT.API.History.firstLoad = true;
MBT.API.History.handleStartup();
MBT.API.URL.CurrentQueryString = new MBT.API.URL.QueryString();
MBT.API.Application = new MBT.API.Storage.AppState();
MBT.API.History.init();

MBT.API.Event.observe(window, 'load', function () {
    if (MBT.API.History.enabled) {
        /// startup stuff
        MBT.API.History.onDocumentLoad();
    }
});

/* ------------------------------------------------------------------------------------- */

// Rich Calendar
MBT.API.UI.Calendar = function(targetObj, showTime) {

    // value
    this.value = '';

    // format
    this.format = '%Y-%m-%d';

    // Week Day to start with (0 - Sunday, 1 - Monday, etc...)
    this.start_week_day = 1;

    // iframe object to show calendar object in
    this.iframe_obj = null;

    // path to calendar css and js files
    this.lib_path = 'rich_calendar/';

    // DOM object to take/set date from/to
    this.targetObj = targetObj;

    // show time
    this.showTime = showTime;

    // function called when calendar value changes
    this.userOnChangeHandler = null;

    // function called when data choice is cancelled
    this.userOncloseHandler = null;

    // function called when mouse clicked outside calendar with auto_close set
    // to true after it is closed
    this.userOnAutocloseHandler = null;

    // default language
    this.default_language = 'en';

    // language
    this.language = 'en';

    // current date
    this.date = new Date();
    // calendar skin name
    this.skin = '';
    // calendar closes automatically on click outside it
    this.auto_close = true;
    // element which value is taken to initilize calendar and where calendar
    // returns date if user defined function to return date is not specified
    this.value_el = null;

    // specifies calendar positioning - absolute by default
    this.position = null;

}


// add event handlers to object obj
MBT.API.UI.Calendar.attachEvents = function(obj) {

    MBT.API.Event.observe(obj, 'click', MBT.API.UI.Calendar.onclick);
    MBT.API.Event.observe(obj, 'mouseover', MBT.API.UI.Calendar.onmouseover);
    MBT.API.Event.observe(obj, 'mouseout', MBT.API.UI.Calendar.onmouseout);
}


// remove event handlers set to object obj
MBT.API.UI.Calendar.detach_events = function(obj) {

    MBT.API.Event.stopObserve(obj, 'click', MBT.API.UI.Calendar.onclick);
    MBT.API.Event.stopObserve(obj, 'mouseover', MBT.API.UI.Calendar.onmouseover);
    MBT.API.Event.stopObserve(obj, 'mouseout', MBT.API.UI.Calendar.onmouseout);
}


// calendar onclick event handler
MBT.API.UI.Calendar.onclick = function(e) {

    var event = MBT.API.Event.getEvent(e);
    var obj = MBT.API.Event.getTargetObject(e);

        if (!obj) return;

    var cal = obj.calendar;

    var cur_year = cal.date.getFullYear();
    var cur_month = cal.date.getMonth();
    var cur_day = cal.date.getDate();

    switch (obj.objectCode) {
        case 'day':
            cal.date.setDate(obj.day_num);
            break;
        case 'prev_year':
            // determine number of days in prev year
            cal.date.setDate(1);
            cal.date.setFullYear(cur_year-1);
            var monthDays = MBT.API.UI.Calendar.getMonthDays(cal.date);

            // prevent jumping to next month
            if (cur_day > monthDays) {
                cal.date.setDate(monthDays);
            } else {
                cal.date.setDate(cur_day);
            }

            cal.showDate();
            break;
        case 'prev_month':
            // determine number of days in prev month
            cal.date.setDate(1);
            cal.date.setMonth(cur_month-1);
            var monthDays = MBT.API.UI.Calendar.getMonthDays(cal.date);

            // prevent jumping to next month
            if (cur_day > monthDays) {
                cal.date.setDate(monthDays);
            } else {
                cal.date.setDate(cur_day);
            }

            cal.showDate();
            break;
        case 'next_month':
            // determine number of days in prev month
            cal.date.setDate(1);
            cal.date.setMonth(cur_month+1);
            var monthDays = MBT.API.UI.Calendar.getMonthDays(cal.date);

            // prevent jumping to next month
            if (cur_day > monthDays) {
                cal.date.setDate(monthDays);
            } else {
                cal.date.setDate(cur_day);
            }

            cal.showDate();
            break;
        case 'next_year':
            // determine number of days in next year
            cal.date.setDate(1);
            cal.date.setFullYear(cur_year+1);
            var monthDays = MBT.API.UI.Calendar.getMonthDays(cal.date);

            // prevent jumping to next month
            if (cur_day > monthDays) {
                cal.date.setDate(monthDays);
            } else {
                cal.date.setDate(cur_day);
            }

            cal.showDate();
            break;
        case 'today':
            var today = new Date();
            today.setHours(cal.date.getHours());
            today.setMinutes(cal.date.getMinutes());
            today.setSeconds(cal.date.getSeconds());

            cal.date = today;
            cal.showDate();

            break;
        case 'clear':
            // handle clear request
            if (cal.value_el) {
                cal.value_el.value = '';
            }
            break;
        case 'close':
            // handle close request
            cal.onCloseHandler();
            break;
        case 'week_day':

            cal.start_week_day = obj.week_day_num;
            cal.showDate();
            break;
        default:
            break;
    }


    // handle close request
    if (obj.objectCode != 'week_day') {
        cal.onChangeHandler(obj.objectCode);
    }

    // handle date change


    // hide all other auto closing calendars
    MBT.API.UI.Calendar.hideAutoClose(cal);

}


// calendar onmouseover event handler
MBT.API.UI.Calendar.onmouseover = function(e) {

    var event = MBT.API.Event.getEvent(e);
    var obj = MBT.API.Event.getTargetObject(e);

        if (!obj) return;

    var cal = obj.calendar;

    var cur_year = cal.date.getFullYear();
    var cur_month = cal.date.getMonth();
    var cur_day = cal.date.getDate();

    switch (obj.objectCode) {
        case 'day':
            var date = new Date(cal.date);
            date.setDate(obj.day_num);
            cal.setFooterText(cal.getFormattedDate(cal.text('footerDateFormat'), date));

            // highlight day cell and its row
            MBT.API.UI.Calendar.addClass(obj, "mbt-calendar-highlight");
            MBT.API.UI.Calendar.addClass(obj.parentNode, "mbt-calendar-highlight");

            break;
        case 'clear':
        case 'today':
        case 'close':
        case 'prev_year':
        case 'prev_month':
        case 'next_month':
        case 'next_year':
            cal.setFooterText(cal.text(obj.objectCode));
            break;
        case 'week_day':
            if (obj.week_day_num != cal.start_week_day) {
                var day_names = cal.text("dayNames");
                var name = day_names[obj.week_day_num];
                var text = cal.text("make_first");
                text = text.replace("%s", name);
            } else {
                var text = cal.text('footerDefaultText');
            }
            cal.setFooterText(text);
            break;
        default:
            cal.setFooterText(cal.text('footerDefaultText'));
            break;
    }

}


// calendar onmouseout event handler
MBT.API.UI.Calendar.onmouseout = function(e) {


    var event = MBT.API.Event.getEvent(e);
    var obj = MBT.API.Event.getTargetObject(e);

    if (!obj) return;

    var cal = obj.calendar;

    cal.setFooterText(cal.text('footerDefaultText'));

    // un-highlight day cell and its row
    MBT.API.UI.Calendar.removeClass(obj, "mbt-calendar-highlight");
    MBT.API.UI.Calendar.removeClass(obj.parentNode, "mbt-calendar-highlight");

}


// document onmousedown event handler
MBT.API.UI.Calendar.documentOnMouseDown = function(e) {
    var event = MBT.API.Event.getEvent(e);
    var obj = MBT.API.Event.getTargetObject(e);

    if (!obj) return;

    var el = obj;
    var cal = null;

    while (el) {
        if (el.className && el.className.match(/^mbt\-calendar\-iframe\-body/) &&
            el.tagName.toUpperCase() == 'BODY') {

            cal = el.calendar;
            break;
        }
        el = el.parentNode;
    }

    // close all not active calendars
    MBT.API.UI.Calendar.hideAutoClose(cal);
}


// hide all calendars that should autoclose except cal and remove
// them from MBT.API.UI.Calendar.activeCalendars
MBT.API.UI.Calendar.hideAutoClose = function(cal) {
var active_cals = [];
var i;

    for (i=0; i<MBT.API.UI.Calendar.activeCalendars.length; i++) {
        var cur_cal = MBT.API.UI.Calendar.activeCalendars[i];
        if (cur_cal.auto_close && cur_cal != cal) {

            cur_cal.hide();

            if (cur_cal.userOnAutocloseHandler) {
                cur_cal.userOnAutocloseHandler(this);
            }

        } else {
            active_cals[active_cals.length] = cur_cal;
        }
    }

    MBT.API.UI.Calendar.activeCalendars = active_cals;
}


// remove calendar cal from list MBT.API.UI.Calendar.activeCalendars of active
// calendars
MBT.API.UI.Calendar.makeInactive = function(cal) {
var active_cals = [];
var i;

    for (i=0; i<MBT.API.UI.Calendar.activeCalendars.length; i++) {
        var cur_cal = MBT.API.UI.Calendar.activeCalendars[i];
        if (cur_cal != cal) {
            active_cals[active_cals.length] = cur_cal;
        }
    }

    MBT.API.UI.Calendar.activeCalendars = active_cals;
}


// return number of days in month
MBT.API.UI.Calendar.getMonthDays = function(date, month) {
    var year = date.getFullYear();
    if (month) {
        month = parseInt(month);
        if (month <= 0 || month > 11) month = null;
    }

    if (!month) {
        month = date.getMonth();
    }

    if (month == 1 && MBT.API.UI.Calendar.isLeapYear(year)) {
        return 29;
    } else {
        return MBT.API.UI.Calendar.monthDays[month];
    }

}


// return true if year is a leap year
MBT.API.UI.Calendar.isLeapYear = function(year) {
    return (year%4==0 && year%100!=0 || year%400==0) ? true : false;
}


    // return day of the year
MBT.API.UI.Calendar.getDayOfYear = function(date) {
    var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    var year_start = new Date(date.getFullYear(), 0, 0, 0, 0, 0);

    // milliseconds in day
    var day_in_msecs = 24*60*60*1000;

    return Math.floor((now - year_start) / day_in_msecs);

}


// add class to element
MBT.API.UI.Calendar.addClass = function(el, class_name) {

    MBT.API.UI.Calendar.removeClass(el, class_name);
    el.className += " " + class_name;

}


// remove class from element
MBT.API.UI.Calendar.removeClass = function(el, class_name) {

    if (!el || !el.className) return

    var new_class_parts = [];
    var class_parts = String(el.className).split(" ");
    var i;
    for (i=0; i<class_parts.length; i++) {
        if (class_parts[i] != "" && class_parts[i] != class_name) {
            new_class_parts[new_class_parts.length] = class_parts[i];
        }
    }

    el.className = new_class_parts.join(" ");
}


// return position of object obj; dont go above stop_obj in DOM structure
MBT.API.UI.Calendar.getObjPos = function(obj, stop_obj){
    var pos = Array(0,0);

    if (!obj) return pos;

    while (obj && stop_obj != obj) {

        //absolute positioned element => do not count its offset values
        if (obj.currentStyle) {
            if (obj.currentStyle.position == 'absolute') break;
        } else {
            if (document.defaultView.getComputedStyle(obj, '').getPropertyValue('position') == 'absolute') break;
        }

        var is_div = obj.tagName.toUpperCase() == "DIV" ? true : false;
        pos[0] += obj.offsetLeft - (is_div?obj.scrollLeft:0);
        pos[1] += obj.offsetTop - (is_div?obj.scrollTop:0);

/*
        // Opera returns negative offsets (but we took it into account
        // when substitute scrollLeft/Top of the parent elements)
        // so we use Math.max to prevent double reducing of the positions
        pos[0] += Math.max(obj.offsetLeft, 0) - obj.scrollLeft;
        pos[1] += Math.max(obj.offsetTop, 0) - obj.scrollTop;
*/
        obj = obj.offsetParent;
    }

    return pos;
}


// array of text data in various languages
MBT.API.UI.Calendar.langData = [];
MBT.API.UI.Calendar.monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
MBT.API.UI.Calendar.activeCalendars = [];
MBT.API.UI.Calendar.handlert_set = false;

// Calendar API


// show calendar inside/before/after (defined by argument position) element el
// if any specified or in the point specified (if any)
MBT.API.UI.Calendar.prototype.show = function(x, y, el, position) {

    if (!this.value_el) {
        this.value_el = el;
    }

    this.position = position;

    this.iframe_obj = document.createElement('IFRAME');
    this.iframe_obj.className = 'mbt-calendar';
    this.iframe_obj.setAttribute('scrolling', 'no');
    this.iframe_obj.calendar = this;


    // relative positioning
    if (this.isRelativePosition(position)) {
        switch (position) {
            case "before":
                if (el.parentNode) {
                    el.parentNode.insertBefore(this.iframe_obj, el);
                }
                break;
            case "after":
                if (el.parentNode) {
                    el.parentNode.insertBefore(this.iframe_obj, el.nextSibling);
                }
                break;
            case "child":
            default:
                el.appendChild(this.iframe_obj);
                this.position = 'child';
                break;
        }

    } else { // absolute positioning

        this.iframe_obj.style.position = 'absolute';

        // move the iframe to the position specified
        var left = parseInt(x);
        var top = parseInt(y);
        if (typeof(x) == 'number' && typeof(y) == 'number') {
            this.iframe_obj.style.left = x + 'px';
            this.iframe_obj.style.top = y + 'px';
        }
        this.iframe_obj.style.border = '1px solid #000000';
        this.iframe_obj.value = this.value;

        document.body.appendChild(this.iframe_obj);

    }


    // put calendar content into the iframe
    var iframe_content = '' +
                        '<html>' +
                        '<head>' +
                        '<link rel="stylesheet" type="text/css" href="' + MBT.API.getApiCSSUrl() + '?v=1236">' +
                        '</head>' +
                        '<body class="mbt-calendar-iframe-body mbt-calendar' + '" id="mbt_body">' +
                        '</body></html>' +
                            '';

    this.iframe_doc = this.iframe_obj.contentWindow.document;
    this.iframe_doc.open();
    this.iframe_doc.write(iframe_content);
    this.iframe_doc.close();

    MBT.API.Event.observe(this.iframe_doc, 'mousedown', MBT.API.UI.Calendar.documentOnMouseDown);


    this.body_obj = this.iframe_doc.getElementById('mbt_body');
    this.body_obj.calendar = this;
    // main table
    this.table_obj = this.iframe_doc.createElement('TABLE');
    this.table_obj.className = 'mbt-calendar-table';
    this.table_obj.setAttribute('id', 'mbt-calendar-iframe-table');
    this.table_obj.cellSpacing = 1;
    this.table_obj.cellPadding = 0;
    // store reference to the calendar
    this.table_obj.calendar = this;

    // header row
    this.head_tr = this.table_obj.insertRow(0);
    this.head_tr.className = 'mbt-calendar-head-tr';

    this.clear_td = this.head_tr.insertCell(0);
    this.clear_td.innerHTML = 'c';
    this.clear_td.objectCode = 'clear';
    this.clear_td.calendar = this;
    MBT.API.UI.Calendar.attachEvents(this.clear_td);

    this.head_td = this.head_tr.insertCell(1);
    this.head_td.colSpan = 5;
    this.close_td = this.head_tr.insertCell(2);
    this.close_td.innerHTML = 'x';
    this.close_td.objectCode = 'close';
    this.close_td.calendar = this;
    MBT.API.UI.Calendar.attachEvents(this.close_td);

    // navigation row
    this.nav_tr = this.table_obj.insertRow(1);
    this.nav_tr.className = 'mbt-calendar-nav-tr';

    this.prev_year_td = this.nav_tr.insertCell(0);
    this.prev_year_td.innerHTML = '&#x00ab;';
    this.prev_year_td.objectCode = 'prev_year';
    this.prev_year_td.calendar = this;
    MBT.API.UI.Calendar.attachEvents(this.prev_year_td);

    this.prev_month_td = this.nav_tr.insertCell(1);
    this.prev_month_td.innerHTML = '&#x2039;';
    this.prev_month_td.objectCode = 'prev_month';
    this.prev_month_td.calendar = this;
    MBT.API.UI.Calendar.attachEvents(this.prev_month_td);

    this.today_td = this.nav_tr.insertCell(2);
    this.today_td.colSpan = 3;
    this.today_td.innerHTML = this.text('today');
    this.today_td.objectCode = 'today';
    this.today_td.calendar = this;
    MBT.API.UI.Calendar.attachEvents(this.today_td);

    this.next_month_td = this.nav_tr.insertCell(3);
    this.next_month_td.innerHTML = '&#x203a;';
    this.next_month_td.objectCode = 'next_month';
    this.next_month_td.calendar = this;
    MBT.API.UI.Calendar.attachEvents(this.next_month_td);

    this.next_year_td = this.nav_tr.insertCell(4);
    this.next_year_td.innerHTML = '&#x00bb;';
    this.next_year_td.objectCode = 'next_year';
    this.next_year_td.calendar = this;
    MBT.API.UI.Calendar.attachEvents(this.next_year_td);

    // weekdays row
    this.wd_tr = this.table_obj.insertRow(2);
    this.wd_tr.className = 'mbt-calendar-wd-tr';

    for (var i = 0; i < 7; i++) {
        var td = this.wd_tr.insertCell(i);
        td.objectCode = 'week_day';
        td.calendar = this;
        MBT.API.UI.Calendar.attachEvents(td);
    }

    // calendar rows (initially create min number of rows necessary - 4)
    var rows_num = 4;
    var row_indx;
    var cell_indx;
    this.cal_tr = [];

    for (row_indx=0; row_indx<rows_num; row_indx++) {
        this.createCalRow(row_indx);
    }

    if (this.showTime) {
        // create time row if necessary
        this.time_tr = this.table_obj.insertRow(rows_num+3);
        this.time_tr.className = 'mbt-calendar-time-tr';
        var td = this.time_tr.insertCell(0);
        td.colSpan = 2;
        td.innerHTML = this.text('time') + ':';

        var td = this.time_tr.insertCell(1);
        td.colSpan = 3;

        this.hours_obj = this.createElement('INPUT', td);
        this.hours_obj.className = 'mbt-calendar-hours';
        this.hours_obj.setAttribute('size', 1);
        this.hours_obj.setAttribute('maxlength', 2);

        this.colon_span = this.createElement('SPAN', td);
        this.colon_span.className = 'mbt-calendar-colon-span';
        this.colon_span.innerHTML = '&nbsp;:&nbsp;';

        this.mins_obj = this.createElement('INPUT', td);
        this.mins_obj.className = 'mbt-calendar-mins';
        this.mins_obj.setAttribute('size', 1);
        this.mins_obj.setAttribute('maxlength', 2);

        var td = this.time_tr.insertCell(2);
        td.colSpan = 2;
        td.innerHTML = '&nbsp;';
    }

    // footer row

    this.footer_tr = this.table_obj.insertRow(rows_num + 3 + (this.showTime ? 1 : 0));
    this.footer_tr.className = 'mbt-calendar-footer-tr';
    this.footer_td = this.footer_tr.insertCell(0);
    this.footer_td.colSpan = 7;
    this.footer_td.innerHTML = this.text('footerDefaultText');

    this.body_obj.appendChild(this.table_obj);

    // create a DIV element to determine size of calendar
    this.size_div = document.createElement('DIV');
    this.size_div.className = this.body_obj.className;
    this.size_div.style.position = "absolute";
    this.size_div.style.left = "-1000px";
    this.size_div.style.top = "-1000px";
    document.body.appendChild(this.size_div);


    // show current date in calendar
    this.showDate();


    // set document handlers if not set yet
    if (!MBT.API.UI.Calendar.handlersSet) {
        MBT.API.Event.observe(document, 'mousedown', MBT.API.UI.Calendar.documentOnMouseDown);
        MBT.API.UI.Calendar.handlersSet = true;
    }

    // store this calendar in array of active calendars
    MBT.API.UI.Calendar.activeCalendars[MBT.API.UI.Calendar.activeCalendars.length] = this;

}


// hide calendar (destroy iframe object)
MBT.API.UI.Calendar.prototype.hide = function() {
    if (this.iframe_obj) {
        this.iframe_obj.parentNode.removeChild(this.iframe_obj);
        this.iframe_obj = null;
    }

    MBT.API.UI.Calendar.makeInactive(this);
}


// show calendar inside/before/after (defined by argument position) element el
// ie relative to element el or
MBT.API.UI.Calendar.prototype.showAtElement = function(el, position) {

    if (typeof(el) != "object" || !el) return;

    // relative positioning
    if (this.isRelativePosition(position)) {
        this.show(null, null, el, position);
        return;
    }

    var el_pos = MBT.API.UI.Calendar.getObjPos(el);

    var x = -1000;
    var y = -1000;

    this.show(x, y, el, position);
}

// fix position of calendar
MBT.API.UI.Calendar.prototype.fixPosition = function(el) {
    var position = this.position;

    if (this.isRelativePosition(position)) {
        return;
    }

    if (!el) {
        el = this.value_el;
    }

    var aligns = String(position).split("-");
    if (aligns.length == 2) {

        var el_pos = MBT.API.UI.Calendar.getObjPos(el);
        var x = el_pos[0];
        var y = el_pos[1] + el.offsetHeight;

        // iframe border thikness
        var border_width = parseInt(this.iframe_obj.style.borderWidth);

        var cal_width = parseInt(this.iframe_obj.width) + 2*border_width;
        var cal_height = parseInt(this.iframe_obj.height) + 2*border_width;


        // horizontal alignment
        switch (aligns[0]) {
            case "left":
                x -= cal_width;
                break;
            case "center":
                x += (el.offsetWidth - cal_width) / 2;
                break;
            case "right":
                x += el.offsetWidth;
                break;
            case "adj_right":
                x += el.offsetWidth - cal_width;
                break;
            default:
                break;
        }

        // vertical alignment
        switch (aligns[1]) {
            case "top":
                y -= el.offsetHeight + cal_height;
                break;
            case "center":
                y += (el.offsetHeight - cal_height) / 2 - el.offsetHeight;
                break;
            case "bottom":
                break;
            case "adj_bottom":
                y -= cal_height;
                break;
            default:
                break;
        }

        this.iframe_obj.style.left = x + 'px';
        this.iframe_obj.style.top = y + 'px';

        this.iframe_obj.style.visibility = 'visible';
    }

}


// return true if calendar is relatively positioned
MBT.API.UI.Calendar.prototype.isRelativePosition = function(position) {
    switch (position) {
        case "before":
        case "after":
        case "child":
            return true;
        default:
            return false;
    }
}


// creates an element in iframe
MBT.API.UI.Calendar.prototype.createElement = function(tagName, parent) {

var el = this.iframe_doc.createElement(tagName);

    if (parent) {
        parent.appendChild(el);
    }

    return el;
}


// return text data desired
MBT.API.UI.Calendar.prototype.text = function(name, language) {

    if (typeof(language) == "undefined") {
        language = MBT.API.Lang;
    }

    if (typeof(MBT.API.UI.Calendar.langData[language]) != "undefined") {
        return typeof(MBT.API.UI.Calendar.langData[language][name]) != "undefined" ? MBT.API.UI.Calendar.langData[language][name] : '';
    }

    return typeof(MBT.API.UI.Calendar.langData[this.default_language][name]) != "undefined" ? MBT.API.UI.Calendar.langData[this.default_language][name] : '';

}

// show date in calendar
MBT.API.UI.Calendar.prototype.showDate = function() {
    // update week days row

    // numbers of weekend days
    var weekend_days = this.getWeekendDays();

    var i;
    var day_names = this.text('dayNamesShort');
    for (i=0; i<7; i++) {
        var wd = (i+this.start_week_day)%7;

        var td = this.wd_tr.cells[i];
        td.innerHTML = day_names[wd];

        if (typeof(weekend_days[wd]) != "undefined") {
            td.className = "mbt-calendar-weekend-head";
        } else {
            td.className = "";
        }
        td.week_day_num = wd;
    }


    var monthDays = MBT.API.UI.Calendar.getMonthDays(this.date);
    //  alert(monthDays);

    // first day of the same month and year as this.date
    var date = new Date(this.date);
    date.setDate(1);
    var week_day = (date.getDay()+7-this.start_week_day)%7+1;
    //  alert(week_day);

    // current data
    var cur_year = this.date.getFullYear();
    var cur_month = this.date.getMonth();
    var cur_day = this.date.getDate();
    //alert(cur_year + ' => ' + cur_month + ' => ' + cur_day);

    // today
    var today = new Date();
    var today_year = today.getFullYear();
    var today_month = today.getMonth();
    var today_day = today.getDate();

    //
    var month_names = this.text('monthNames');
    this.head_td.innerHTML = month_names[cur_month] + ', ' + cur_year;


    var row;
    var day;
    var days = 0;
    var last_row;
    for (row=0; row<6; row++) {

        // all days are shown => just check if need to remove unused rows
        if (days == monthDays) {
            if (this.cal_tr[last_row+1]) {
                this.cal_tr[last_row+1].parentNode.removeChild(this.cal_tr[last_row+1]);
                this.cal_tr[row] = null;
            }
            continue;
        }

        for (day=0; day<7; day++) {

            if (!this.cal_tr[row]) {
                this.createCalRow(row);
            }

            var cur_tr = this.cal_tr[row];
            var cell = cur_tr.cells[day];
            cell.className = "";
            // should remove or IE attach the same event several times
        //  MBT.API.Event.stopObserve(cell);

            if (row==0 && day+1 < week_day || days == monthDays) {
                var td_text = '&nbsp;';

            } else {
                var day_num = days+1;
                var td_text = day_num;
                days++;

                cell.objectCode = 'day';
                cell.day_num = day_num;
                cell.calendar = this;
                MBT.API.UI.Calendar.attachEvents(cell);

                // hilight current date
                if (cur_day == day_num) {
                    MBT.API.UI.Calendar.addClass(cell, "mbt-calendar-current");
                }

                // hilight today date
                if (day_num == today_day &&
                    cur_month == today_month &&
                    cur_year == today_year) {
                    MBT.API.UI.Calendar.addClass(cell, "mbt-calendar-today");
                }


                var wd = (day+this.start_week_day)%7;

                // hilight weekend days
                if (typeof(weekend_days[wd]) != "undefined") {
                    MBT.API.UI.Calendar.addClass(cell, "mbt-calendar-weekend-day");
                } else {
                    MBT.API.UI.Calendar.removeClass(cell, "mbt-calendar-weekend-day");
                }

            }
            cell.innerHTML = td_text;

            if (days == monthDays) {
                last_row = row;
            }
        }
    }


    // set time
    if (this.showTime && this.hours_obj && this.mins_obj) {
        var hours = this.date.getHours();
        if (hours < 10) hours = '0' + hours;
        var mins = this.date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        this.hours_obj.value = hours;
        this.mins_obj.value = mins;
    }

    var cal = this;
    window.setTimeout(function(){cal.fitToContent()}, 1);

    // fix position (need to do this later then calendar is shown as
    // size of calendar could change in this.show(x, y)
    window.setTimeout(function(){cal.fixPosition()}, 5);

}

// change size of the iframe to fit to its content
MBT.API.UI.Calendar.prototype.fitToContent = function() {
try {
    var table_obj = this.iframe_doc.getElementById('mbt-calendar-iframe-table');
    this.iframe_obj.width = table_obj.offsetWidth;
    this.iframe_obj.height = table_obj.offsetHeight;


    if (!parseInt(this.iframe_obj.width) || !parseInt(this.iframe_obj.height)) {
        this.size_div.innerHTML = this.body_obj.innerHTML;

    this.iframe_obj.width = this.size_div.offsetWidth;
    this.iframe_obj.height = this.size_div.offsetHeight;
    }

}catch(e){}
}


// create calendar row
MBT.API.UI.Calendar.prototype.createCalRow = function(index) {
var row = this.table_obj.insertRow(3+index);
    row.className = 'mbt-calendar-cal-tr';

    var cell_indx;
    for (cell_indx=0; cell_indx<7; cell_indx++) {
        var td = row.insertCell(cell_indx);
    }

    this.cal_tr[index] = row;
    return row;
}


// returns formatted date (chars recognized are alike used by PHP function date)
MBT.API.UI.Calendar.prototype.getFormattedDate = function(format, date) {

    if (!date) date = this.date;
    if (!format) format = this.getDateFormat();

    // set time
    if (this.showTime && this.hours_obj && this.mins_obj) {
        this.date.setHours(this.hours_obj.value);
        var mins = this.date.setMinutes(this.mins_obj.value);
    }

    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();
    var wd = date.getDay();
    var hr = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    var month_names_short = this.text('monthNamesShort');
    var month_names = this.text('monthNames');
    var day_names_short = this.text('dayNamesShort');
    var day_names = this.text('dayNames');

    var am = hr < 12 ? true : false;
    var hr12 = hr > 12 ? hr - 12 : (hr == 0 ? 12 : hr);

    var f = [];

    f["%a"] = am?'am':'pm';
    f["%A"] = am?'AM':'PM';
    f["%d"] = d < 10 ? '0'+d : d; // day of the month, 2 digits with leading zeroes (01 to 31)
    f["%D"] = day_names_short[wd]; // day of the week, textual, short, eg "Fri"
    f["%F"] = month_names[m]; // month, textual, long; eg "January"
    f["%h"] = hr12 < 10 ? '0' + hr12 : hr12; // hour, 12-hour format (01 to 12)
    f["%H"] = hr < 10 ? '0' + hr : hr; // hour, 24-hour format (00 to 23)
    f["%g"] = hr12; // hour, 12-hour format without leading zeros (1 to 12)
    f["%G"] = hr; // hour, 24-hour format without leading zeros (0 to 23)
    f["%i"] = mins < 10 ? '0' + mins : mins; // minutes (00 to 59)
    f["%j"] = d; // day of the month without leading zeros (1 to 31)
    f["%l"] = day_names[wd]; // day of the week, textual, long, eg "Friday"
    f["%L"] = MBT.API.UI.Calendar.isLeapYear(y)?1:0; // 1 if leap year, otherwise - 0
    f["%m"] = m < 9 ? '0' + (m+1) : (m+1); //month (01 to 12)
    f["%n"] = m + 1; //month without leading zeros (1 to 12)
    f["%M"] = month_names_short[m]; // month, textual, short, eg "Jan"
    f["%s"] = secs < 10 ? '0' + secs : secs; // seconds (00 to 59)
    f["%t"] = MBT.API.UI.Calendar.getMonthDays(date); // number of days in the month (28 to 31)
    f["%w"] = wd; // day of the week, numeric (0, Sunday to 6, Saturday)
    f["%Y"] = y; // year, 4 digits, eg 2007
    f["%y"] = String(y).substr(2, 2); // year, 2 digits, eg "07"
    f["%z"] = MBT.API.UI.Calendar.getDayOfYear(date); // day of the year (1 to 366)

    var parts = String(format).match(/%./g);
    var i;
    var f_date = format;
    for (i=0; i<parts.length; i++) {
        var value = f[parts[i]];
        if (typeof(value) != "undefined") {
            var re = new RegExp(parts[i], 'g');
            f_date = f_date.replace(re, value);
        }
    }

    return f_date;

}


// set footer content
MBT.API.UI.Calendar.prototype.setFooterText = function(text) {
    if (this.footer_td) {
        this.footer_td.innerHTML = text;
    }
}


// return array with keys - weekend days
MBT.API.UI.Calendar.prototype.getWeekendDays = function() {
var weekend_days = this.text('weekend');
var weekend_parts = weekend_days.split(",");
var i;
var result = [];

    for (i=0; i<weekend_parts.length; i++) {
        result[weekend_parts[i]] = true;
    }

    return result;
}


// calendar on close handler; returns true if operation successfull
MBT.API.UI.Calendar.prototype.onCloseHandler = function() {

    if (this.userOnCloseHandler) {
        this.userOnCloseHandler(this);
    } else {
        this.hide();
    }

}


// calendar on change handler
MBT.API.UI.Calendar.prototype.onChangeHandler = function(object_code) {

    if (this.userOnChangeHandler) {
        this.userOnChangeHandler(this, object_code);
    } else {
        if (object_code == 'day') {

            if (this.value_el) this.value_el.value = this.getFormattedDate();

            if (this.auto_close) this.hide();

        } else {

        }
    }

}


// returns current date format
MBT.API.UI.Calendar.prototype.getDateFormat = function() {
    var lang_date_format = this.text('dateFormat');
    var format = lang_date_format ? lang_date_format : this.format;

    if (this.showTime) {
        format += ' %H:%i';
    }

    return format;
}


// parses date from string str
MBT.API.UI.Calendar.prototype.parseDate = function(str, format) {
    if (typeof(str) == "undefined") {
        return;
    }

    if (!format) format = this.getDateFormat();


    //alert(format);
    var today = new Date();
    var year = 0;
    var month = -1;
    var day = 0;
    var hours = 0;
    var mins = 0;
    var seconds = 0;

    var month_names = this.text('monthNames');
    var short_month_names = this.text('monthNamesShort');

    var en_month_names = this.text('monthNames', 'en');
    var en_short_month_names = this.text('monthNamesShort', 'en');

        // national chars are not recognized as symbols in regular expressions =>
        // replace them with english month names
        for (j=0; j<month_names.length; j++) {
            var re = new RegExp(month_names[j], 'gi');
            str = str.replace(re, en_month_names[j]);
        }
        for (j=0; j<short_month_names.length; j++) {
            var re = new RegExp(short_month_names[j], 'gi');
            str = str.replace(re, en_short_month_names[j]);
        }

    var p = String(str).split(/\W+/g);
    var f_p = String(format).match(/%./g);
    var i;
    var j;
    var k;

    for (i=0; i<f_p.length; i++) {

        if (!p[i]) continue;

        switch (f_p[i]) {
            case '%a': // am pm
            case '%A':
                if (/am/i.test(p[i]) && hours >= 12) {
                    hours -= 12;
                } else {
                    if (/pm/i.test(p[i]) && hours < 12) {
                        hours += 12;
                    }
                }
                break;
            case '%d':
            case '%j':
                day = parseInt(Number(p[i]));
                break;
            case '%F':
                for (j=0; j<en_month_names.length; j++) {
                    if (en_month_names[j].toLowerCase() == p[i].toLowerCase()) {
                        month = j;
                        break;
                    }
                }
                break;
            case '%h':
            case '%H':
            case '%g':
            case '%G':
                hours = parseInt(Number(p[i]));
                // to recognize this: 10pm
                if (/am/i.test(p[i]) && hours >= 12) {
                    hours -= 12;
                } else {
                    if (/pm/i.test(p[i]) && hours < 12) {
                        hours += 12;
                    }
                }
                break;
            case '%i':
                mins = parseInt(Number(p[i]));
                break;
            case '%m':
            case '%n':
                month = parseInt(Number(p[i]))-1;
                break;
            case '%M':
                for (j=0; j<en_short_month_names.length; j++) {
                    if (en_short_month_names[j].toLowerCase() == p[i].toLowerCase()) {
                        month = j;
                        break;
                    }
                }
                break;
            case '%s':
                seconds = parseInt(Number(p[i]));
                break;
            case '%Y':
                year = parseInt(Number(p[i]));
                break;
            case '%y':
                year = parseInt(p[i]);
                if (year < 100) {
                    year += year + (year > 29 ? 1900 : 2000);
                }
                break;
            default:
                break;
        }

    }

    if (isNaN(year) || year <= 0) year = today.getFullYear();
    if (isNaN(month) || month < 0 || month > 11) month = today.getMonth();
    if (isNaN(day) || day <= 0 || day > 31) day = today.getDate();
    if (isNaN(hours) || hours < 0 || hours > 23) hours = today.getHours();
    if (isNaN(mins) || mins < 0 || mins > 59) mins = today.getMinutes();
    if (isNaN(seconds) || seconds < 0 || seconds > 59) seconds = today.getSeconds();

    this.date = new Date(year, month, day, hours, mins, seconds);

}

MBT.API.UI.Calendar.langData['en'] = {today: 'Today',
                                     time: 'Time',
                                    dayNamesShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                                    dayNames : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                                    monthNamesShort : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                                    monthNames : ['January','February','March','April','May','June','July','August','September','October','November','December'],
                                    footerDateFormat: '%D, %F %j %Y',
                                    dateFormat: '%Y-%m-%d',
                                    footerDefaultText: 'Select date',
                                    clear: 'Clear Date',
                                    prev_year: 'Previous year',
                                    prev_month: 'Previous month',
                                    next_month: 'Next month',
                                    next_year: 'Next year',
                                    close: 'Close',
                                    weekend : "0,6",
                                    make_first : "Start with %s"};

MBT.API.UI.Calendar.langData['fi'] = {today: 'TÃ¤nÃ¤Ã¤n',
        time: 'Aika',
        dayNamesShort : ['Su','Ma','Ti','Ke','To','Pe','La'],
        dayNames : ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
        monthNamesShort : ['Tammi','Helmi','Maalis','Huhti','Touko','KesÃ¤','HeinÃ¤','Elo','Syys','Loka','Marras','Joulu'],
        monthNames : ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','KesÃ¤kuu','HeinÃ¤kuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
        footerDateFormat: '%D, %F %j %Y',
        dateFormat: '%Y-%m-%d',
        footerDefaultText: 'Valitse pÃ¤ivÃ¤',
        clear: 'TyhjennÃ¤ valinta',
        prev_year: 'Edellinen vuosi',
        prev_month: ' Kitas',
        next_month: ' Seuraava kuukausi',
        next_year: 'Seuraava vuosi',
        close: 'Sulje',
        weekend : "1,7",
        make_first : "Viikon 1. pÃ¤ivÃ¤ %s"};

MBT.API.UI.Calendar.langData['lt'] = {today: 'Šiandien',
        time: 'Laikas',
        dayNamesShort : ['S','P','A','T','K','P','Š'],
        dayNames : ['Sekmadienis', 'Pirmadienis','Antradienis','Trečiadienis','Ketvirtadienis','Penktadienis','Šeštadienis'],
        monthNamesShort : ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis','Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Grudis'],
        monthNames : ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis','Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Grudis'],
        footerDateFormat: '%D, %F %j %Y',
        dateFormat: '%Y-%m-%d',
        footerDefaultText: 'Pasirinkite datą',
        clear: 'Išvalyti',
        prev_year: 'Praėję metai',
        prev_month: ' Praėjęs mėnuo mėnuo',
        next_month: ' Kitas mėnuo',
        next_year: 'Kiti metai',
        close: 'Uždaryti',
        weekend : "0,6",
        make_first : "Savaitės pradžia"};

MBT.API.formatDate = function (date, format) {
    var returnStr = '';
    var replace = MBT.API.replaceChars;
    for (var i = 0; i < format.length; i++) {
        var curChar = format.charAt(i);
        if (replace[curChar]) {
            returnStr += replace[curChar].call(date);
        } else {
            returnStr += curChar;
        }
    }
    return returnStr;
};
MBT.API.replaceChars = {
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    longDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    // Day
    d: function() { return (this.getDate() < 10 ? '0' : '') + this.getDate(); },
    D: function() { return Date.replaceChars.shortDays[this.getDay()]; },
    j: function() { return this.getDate(); },
    l: function() { return Date.replaceChars.longDays[this.getDay()]; },
    N: function() { return this.getDay() + 1; },
    S: function() { return (this.getDate() % 10 == 1 && this.getDate() != 11 ? 'st' : (this.getDate() % 10 == 2 && this.getDate() != 12 ? 'nd' : (this.getDate() % 10 == 3 && this.getDate() != 13 ? 'rd' : 'th'))); },
    w: function() { return this.getDay(); },
    z: function() { return "Not Yet Supported"; },
    // Week
    W: function() { return "Not Yet Supported"; },
    // Month
    F: function() { return Date.replaceChars.longMonths[this.getMonth()]; },
    m: function() { return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1); },
    M: function() { return Date.replaceChars.shortMonths[this.getMonth()]; },
    n: function() { return this.getMonth() + 1; },
    t: function() { return "Not Yet Supported"; },
    // Year
    L: function() { return "Not Yet Supported"; },
    o: function() { return "Not Supported"; },
    Y: function() { return this.getFullYear(); },
    y: function() { return ('' + this.getFullYear()).substr(2); },
    // Time
    a: function() { return this.getHours() < 12 ? 'am' : 'pm'; },
    A: function() { return this.getHours() < 12 ? 'AM' : 'PM'; },
    B: function() { return "Not Yet Supported"; },
    g: function() { return this.getHours() % 12 || 12; },
    G: function() { return this.getHours(); },
    h: function() { return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12); },
    H: function() { return (this.getHours() < 10 ? '0' : '') + this.getHours(); },
    i: function() { return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes(); },
    s: function() { return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds(); },
    // Timezone
    e: function() { return "Not Yet Supported"; },
    I: function() { return "Not Supported"; },
    O: function() { return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00'; },
    T: function() { var m = this.getMonth(); this.setMonth(0); var result = this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, '$1'); this.setMonth(m); return result;},
    Z: function() { return -this.getTimezoneOffset() * 60; },
    // Full Date/Time
    c: function() { return "Not Yet Supported"; },
    r: function() { return this.toString(); },
    U: function() { return this.getTime() / 1000; }
};

MBT.API.parseDate = function (value) {
    var tokens = value.split('-');

    // ISO 8601
    if (tokens.length != 3) {
        return null;
    }
        var d = new Date(parseInt(tokens[0], 10),parseInt(tokens[1], 10)-1,parseInt(tokens[2], 10));
        // d.setYear(parseInt(tokens[0], 10));
        // d.setMonth(parseInt(tokens[1], 10) - 1);
        // d.setDate(parseInt(tokens[2], 10));
    return d;
};

MBT.API.haveFlash = function () {
    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if(fo) hasFlash = true;
    }
    catch(e)
    {
        if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
    }
    return hasFlash;
}

MBT.API.formatLivePagesLink = function (link) {
    var livePagesLink = link;
    var typeId = MBT.API.getLivePagesTypeIndex();
    var langId = MBT.API.getLivePagesLangId();
    if (typeId > 0) {
        livePagesLink += '?type=' + typeId;
    }

    if (langId > 0) {
        livePagesLink += '&lang=' + langId;
    }
    return livePagesLink;
}

MBT.API.convertDecToHex = function (dec) {

    if (dec < 0) {
       dec = 0xFFFFFFFF + dec + 1;
    }

    return parseInt(dec, 10).toString(16);
}

MBT.API.convertHexToDex = function (hex) {

  var dec = (hex + '').replace(/[^a-f0-9]/gi, '');
  dec =  parseInt(hex, 16);
  var max = Math.pow(2, (4*hex.length + (hex.length % 2)));
  var _dec = max - dec;
  return dec > _dec ? -_dec : dec;
}


MBT.API.UI.animate = function(el, property, value, time, callback)
{
    var frames = (time / 1000) * 60;
    var currFrame = frames;
    var timePerFrame = 1000 / 60;
    var shiftPerFrame = Math.floor(parseInt(value) / frames);
    var fn = function() {
        var old = parseInt(el.style[property]);

        if (currFrame == 1) {
            el.style[property] = (old + shiftPerFrame + (value - shiftPerFrame * frames)) + 'px';
        } else {
            el.style[property] = (old + shiftPerFrame) + 'px';
        }


        currFrame--;
        if (currFrame > 0) {
            setTimeout(fn, timePerFrame);
        } else if (callback) {
            callback();
        }
    }

    setTimeout(fn, timePerFrame);
}

MBT.API.UI.Scroller = function(config)
{
    this.type = config.type || 'vertical';
    this.previousButton = MBT.API.get(config.previousButton);
    MBT.API.Event.observe(this.previousButton, 'click', this.scrollUp.bind(this));

    this.nextButton = MBT.API.get(config.nextButton);
    MBT.API.Event.observe(this.nextButton, 'click', this.scrollDown.bind(this));

    this.itemTagName = config.itemTagName || 'a';

    this.animationLength = config.animationLength || 500;

    this.container = MBT.API.get(config.container);

    if (this.type == 'vertical') {
        this.styleKey = 'top';
        this.offsetKey = 'offsetHeight';
    } else if (this.type == 'horizontal') {
        this.styleKey = 'left';
        this.offsetKey = 'offsetWidth';
    }

    this.container.style = this.container.style || {};
    this.container.style['position'] = 'relative';
    this.container.style[this.styleKey] = '0px';

    this.locked = false;

    this.items = this.container.getElementsByTagName(this.itemTagName);
    for (i = 0; i < this.items.length; i++) {
        MBT.API.Event.observe(this.items[i], 'click', config.itemHandler);
    }

    if (config.afterInit) {
        setTimeout(config.afterInit, 1); //workaround for firefox
    }
}

MBT.API.UI.Scroller.prototype.scrollUp = function(e, scrolls)
{
    scrolls = scrolls || 1;
    if (this.locked) {
        return;
    }


    var offset = this.container.parentNode[this.offsetKey];

    if (parseInt(this.container.style[this.styleKey]) + (offset * scrolls) > 0) {
        return;
    }

    this.locked = true;
    MBT.API.UI.animate(this.container, this.styleKey, offset * scrolls, this.animationLength * scrolls, this.unlock.bind(this));
}

MBT.API.UI.Scroller.prototype.scrollDown = function(e, scrolls)
{
    scrolls = scrolls || 1;
    if (this.locked) {
        return;
    }

    var offset = this.container.parentNode[this.offsetKey];

    if (parseInt(this.container.style[this.styleKey]) - (offset * scrolls) <= -this.container[this.offsetKey]) {
        return;
    }

    this.locked = true;
    MBT.API.UI.animate(this.container, this.styleKey, (-offset * scrolls), this.animationLength * scrolls, this.unlock.bind(this));
}

MBT.API.UI.Scroller.prototype.unlock = function()
{
    this.locked = false;
}

MBT.API.UI.Scroller.prototype.scrollTo = function(index)
{
    var viewPortCoords = this.container.parentNode.getBoundingClientRect();
    var itemCoords = this.items[index].getBoundingClientRect();

    //todo implement scrollTo for vertical scrolling
    if (itemCoords.left < viewPortCoords.left) {
        var distanceInScrolls = Math.ceil(Math.abs(viewPortCoords.left - itemCoords.left) / viewPortCoords.width);
        this.scrollUp(null, distanceInScrolls);
        return;
    } else if (itemCoords.right > viewPortCoords.right) {
        var distanceInScrolls = Math.ceil(Math.abs(itemCoords.right - viewPortCoords.right) / viewPortCoords.width);
        this.scrollDown(null, distanceInScrolls);
        return;
    }

    return;
}

MBT.API.UI.Scroller.prototype.itemVisible = function(index)
{
    var viewPortCoords = this.container.parentNode.getBoundingClientRect();
    var itemCoords = this.items[index].getBoundingClientRect();

    if (this.type == 'horizontal') {
        return (itemCoords.left >= viewPortCoords.left && itemCoords.right <= viewPortCoords.right);
    } else if (this.type == 'vertical') {
        return (itemCoords.top >= viewPortCoords.top && itemCoords.bottom <= viewPortCoords.bottom);
    }

    return false;
}

MBT.API.extendParams = function(a, b) {
    for( var key in b ) {
        if( b.hasOwnProperty( key ) ) {
            a[key] = b[key];
        }
    }
    return a;
}

MBT.API.wrapInner = function(parent, wrapper, attribute, attributevalue) {
    if (typeof wrapper === "string") {
        wrapper = document.createElement(wrapper);
    }
    var div = parent.appendChild(wrapper)
        .setAttribute(attribute, attributevalue);

    while (parent.firstChild !== wrapper) {
        wrapper.appendChild(parent.firstChild);
    }
}

MBT.API.createResponsiveNavigation = function(options) {

    this.menuContainer = MBT.API.get(options.menuContainer);

    this.mobileMenuContainer = MBT.API.get(options.mobileMenuContainer);

    this.activeMenuItemText = options.activeMenuItemText;

    this.options = MBT.API.extendParams(this.getDefaults(), options);

    MBT.API.Event.observe(this.mobileMenuContainer, 'click', this.init.bind(this));

}

MBT.API.createResponsiveNavigation.prototype = {

    getDefaults: function() {
        return {
            filtersMode: false,
            mobileMenuCloseText: "Select",
            mobileMenuOpenedClass: "mbt-v2-mobile-menu-opened"
        }
    },

    init: function() {
        if(this.getMenuContainerVisibility() == 'none') {
            this.showMenuContainer();
            this.addOpendClassToMobileMenu();
            if(!this.options.filtersMode) {
                this.setMobileMenuCloseText();
            }
        }else {
            this.hideMenuContainer();
            this.removeOpendClassToMobileMenu();
            if(!this.options.filtersMode) {
                this.setMobileMenuTitle();
            }
        }

        var events = ['resize', 'redraw'];

        for(var i = 0; i < events.length; i++) {
            window.addEventListener(events[i], this.checkVisibility.bind(this), false);
        }
    },

    getMenuContainerVisibility: function() {
        return window.getComputedStyle(this.menuContainer, null).getPropertyValue('display');
    },

    showMenuContainer: function() {
        this.menuContainer.style.display = 'block';
    },

    hideMenuContainer: function() {
        this.menuContainer.style.display = 'none';
    },

    addOpendClassToMobileMenu: function() {
        this.mobileMenuContainer.classList.add(this.options.mobileMenuOpenedClass);
    },

    removeOpendClassToMobileMenu: function() {
        this.mobileMenuContainer.classList.remove(this.options.mobileMenuOpenedClass);
    },

    getActiveMenuItemText:  function() {
        for (var i = 0; i < this.menuContainer.childNodes.length; i++) {
            if (this.menuContainer.childNodes[i].className == 'mbt-v2-navigation-tab-active') {
                item = this.menuContainer.childNodes[i];
                this.activeMenuItemText = item.innerHTML;
                break;
            }
        }
    },

    setMobileMenuTitle: function() {
        this.getActiveMenuItemText();
        this.mobileMenuContainer.innerHTML = this.activeMenuItemText;
    },

    setMobileMenuCloseText: function() {
        this.mobileMenuContainer.innerHTML = this.options.mobileMenuCloseText;
    },

    checkVisibility: function() {
        var mobileVisibility = window.getComputedStyle(this.menuContainer, null).getPropertyValue('display');
        var menuVisibility = window.getComputedStyle(this.menuContainer, null).getPropertyValue('display');
        if(mobileVisibility == 'none' && menuVisibility == 'none') {
            this.menuContainer.style.display = 'block';
        }
    }
}

MBT.API.responsiveTable = function(options) {
    this.table = MBT.API.get(options.table);
    this.tablesContainer = MBT.API.get(options.tablesContainer);
    this.columnsToPin = options.columnsToPin;

    this.splitted = false;
}

MBT.API.responsiveTable.prototype = {

    watchTable: function() {

        if(!this.table) {
            return;
        }

        var self = this;

        setTimeout(function() {
            self.checkTableWidth();
        }, 300);

        var events = ['resize', 'redraw'];

        for(var i = 0; i < events.length; i++) {
            window.addEventListener(events[i], this.checkTableWidth.bind(this), false);
        }
    },

    checkTableWidth: function() {
        if(this.splitted) {
            this.scroller.resizeScrollContent();
        }
        if(this.table.offsetWidth > this.tablesContainer.offsetWidth && !this.splitted) {
            this.splitTable();
        } else if (this.table.offsetWidth < this.tablesContainer.offsetWidth && this.splitted) {
            this.unsplitTable();
        }
    },

    splitTable: function() {

        var pinnedTable = this.createPinnedTable();

        if(this.table.hasAttribute('class')) {
            pinnedTable.setAttribute('class', this.table.getAttribute('class'));
        }

        var scrollableContainer = this.createScrollableContainer();
        scrollableContainer.appendChild(this.table);
        this.tablesContainer.appendChild(scrollableContainer);

        this.hideTableColumns();

        var pinnedContainer = this.createPinnedContainer();
        pinnedContainer.appendChild(pinnedTable);
        this.tablesContainer.appendChild(pinnedContainer);

        if(window.getComputedStyle(this.table, null).getPropertyValue('direction') == 'rtl') {
            scrollableContainer.style.marginRight = pinnedTable.offsetWidth +"px";
        } else {
           scrollableContainer.style.marginLeft = pinnedTable.offsetWidth +"px";
        }
        scrollableContainer.style.height = pinnedTable.offsetHeight +"px";

        this.scroller = new MBT.API.Scrollbar(
            scrollableContainer,
            {
                scrollDirection : 'horiz'
            }
        );

        this.splitted = true;
    },

    unsplitTable: function() {
        this.showTableColumns();
        this.tablesContainer.innerHTML = null;

        this.tablesContainer.appendChild(this.table);

        this.splitted = false;
    },

    hideTableColumns: function() {
        var tableRows = this.getTableTr();

        for(var i = 0; i < tableRows.length; i++) {
            for(var j = 0; j < this.columnsToPin; j++) {
                tableRows[i].getElementsByTagName('td')[j].style.display = 'none';
                if(tableRows[i].getElementsByTagName('td')[j].getAttribute('colspan') == this.columnsToPin) {
                    break;
                }
            }
        }

        var tableTheadRows = this.getTableThead();

        if(tableTheadRows) {
            for(var i = 0; i < this.columnsToPin; i++) {
                tableTheadRows.getElementsByTagName('th')[i].style.display = 'none';

            }
        }
    },

    showTableColumns: function() {
        var tableRows = this.getTableTr();

        for(var i = 0; i < tableRows.length; i++) {
            for(var j = 0; j < this.columnsToPin; j++) {
                tableRows[i].getElementsByTagName('td')[j].removeAttribute('style');
            }
        }

        var tableTheadRows = this.getTableThead();

        if(tableTheadRows) {
            for(var i = 0; i < this.columnsToPin; i++) {
                tableTheadRows.getElementsByTagName('th')[i].removeAttribute('style');
            }
        }
    },

    getTableTr: function() {
        var tbody  = this.table.getElementsByTagName('tbody')[0];
        var tr = tbody.getElementsByTagName('tr');
        return tr;
    },

    getTableThead: function() {
        var thead = this.table.getElementsByTagName('thead')[0];
        if(thead) {
            return thead.getElementsByTagName('tr')[0];
        }

        return false;
    },

    createPinnedContainer: function() {
        var container = document.createElement('div');
        container.className += ' mbt-v2-pinned-table-container';

        return container;
    },

    createScrollableContainer: function() {
        var container = document.createElement('div');
        container.className += ' mbt-v2-scrollable-table-container';

        return container;
    },

    createPinnedTable: function() {
        var table = document.createElement('table');

        table.className += ' mbt-v2-table';

        var originalTableThead = this.getTableThead();

        if(originalTableThead) {
            var tableThead = document.createElement('thead');
            var tableTheadRow = document.createElement('tr');
            for(var i = 0; i < this.columnsToPin; i++) {
                var tableTheadRowTh = document.createElement('th');
                tableTheadRowTh.innerHTML = originalTableThead.getElementsByTagName('th')[i].innerHTML;
                tableTheadRow.style.height = originalTableThead.getElementsByTagName('th')[i].offsetHeight + "px";
                tableTheadRow.appendChild(tableTheadRowTh);
                tableThead.appendChild(tableTheadRow);
                table.appendChild(tableThead);
            }
        }

        var tableBody = document.createElement('tbody');

        var originalTableRows = this.getTableTr();

        for(var i = 0; i < originalTableRows.length; i++) {
            var tableBodyRow = document.createElement('tr');

            if(originalTableRows[i].hasAttribute('class')) {
                tableBodyRow.setAttribute('class', originalTableRows[i].getAttribute('class'));
            }

            for(var j = 0; j < this.columnsToPin; j++) {
                var cell = document.createElement('td');
                cell.innerHTML = originalTableRows[i].getElementsByTagName('td')[j].innerHTML;
                if(originalTableRows[i].getElementsByTagName('td')[j].hasAttribute('colspan')) {
                    cell.setAttribute('colspan', originalTableRows[i].getElementsByTagName('td')[j].getAttribute('colspan'));
                }
                tableBodyRow.appendChild(cell);
                tableBody.appendChild(tableBodyRow);
                
                if(originalTableRows[i].getElementsByTagName('td')[j].getAttribute('colspan') == this.columnsToPin) {
                    break;
                }
            }

            var max = Math.max(tableBodyRow.offsetHeight, originalTableRows[i].offsetHeight);
            originalTableRows[i].style.height = max + "px";
            tableBodyRow.style.height = max + "px";
        }

        table.appendChild(tableBody);

        return table;
    }
}


MBT.API.Scrollbar = function(element, options) {
    this.el = MBT.API.get(element),
    this.track,
    this.scrollbar,
    this.dragOffset,
    this.flashTimeout,
    this.contentEl         = this.el,
    this.scrollContentEl   = this.el,
    this.scrollOffsetAttr   = 'scrollTop',
    this.sizeAttr           = 'height',
    this.scrollSizeAttr     = 'scrollHeight',
    this.offsetAttr         = 'top';

    this.options = MBT.API.extendParams(MBT.API.Scrollbar.DEFAULTS, options);
    this.scrollDirection    = this.options.scrollDirection,
    this.theme   = this.options.css;

    this.init();
}

MBT.API.Scrollbar.SCROLLBAR_WIDTH;
MBT.API.Scrollbar.IS_WEBKIT = 'WebkitAppearance' in document.documentElement.style;


MBT.API.Scrollbar.DEFAULTS = {
    scrollDirection: 'vert',
    wrapContent: true,
    autoHide: true,
    css: {
        container: 'mbt-v2-bar',
        content: 'mbt-v2-bar-content',
        scrollContent: 'mbt-v2-bar-scroll-content',
        scrollbar: 'mbt-v2-scrollbar',
        scrollbarTrack: 'mbt-v2-scrollbar-track'
    }
};

MBT.API.Scrollbar.prototype =  {

    init: function() {
        if(typeof MBT.API.Scrollbar.SCROLLBAR_WIDTH === 'undefined') {
            MBT.API.Scrollbar.SCROLLBAR_WIDTH = this.scrollbarWidth();
        }

        if(MBT.API.Scrollbar.SCROLLBAR_WIDTH === 0) {
            this.el.style.overflow = 0;
            return;
        }

        if (this.scrollDirection === 'horiz' ) {
            this.scrollOffsetAttr   = 'scrollLeft';
            this.sizeAttr           = 'offsetWidth';
            this.scrollSizeAttr     = 'scrollWidth';
            this.offsetAttr         = 'offsetLeft';
        }

        if (this.options.wrapContent) {
            var contentContainerEl = document.createElement('div');
            var contentEl = document.createElement('div');
            MBT.API.wrapInner(this.el, contentEl, 'class', this.theme.content);
            MBT.API.wrapInner(this.el, contentContainerEl, 'class', this.theme.scrollContent);
        }

        this.contentEl = contentEl;

        var scrollbarTrackEl = document.createElement('div');
        scrollbarTrackEl.setAttribute('class', this.theme.scrollbarTrack);

        var scrollbarEl = document.createElement('div');
        scrollbarEl.setAttribute('class', this.theme.scrollbar);

        scrollbarTrackEl.appendChild(scrollbarEl);
        this.el.insertBefore(scrollbarTrackEl, this.el.firstChild);

        this.track = scrollbarTrackEl;
        this.scrollbar = scrollbarEl;
        this.scrollContentEl = contentContainerEl;

        if (this.scrollDirection === 'horiz') {
            this.el.className += ' mbt-v2-scrollbar-horizontal';
        }

        this.resizeScrollContent();

        if (this.options.autoHide) {
            this.el.addEventListener('mouseenter', this.flashScrollbar.bind(this), false);
        }

        this.scrollbar.addEventListener('mousedown', this.startDrag.bind(this), false);
        this.scrollContentEl.addEventListener('scroll', this.startScroll.bind(this), false);

        this.resizeScrollbar();

        if (!this.options.autoHide) {
            this.showScrollbar();
        }
    },

    startDrag: function (e) {
        e.preventDefault();

        var eventOffset = e.pageY;

        if (this.scrollDirection === 'horiz') {
            eventOffset = e.pageX;
        }

        if(this.offsetAttr === 'top') {
            this.dragOffset = eventOffset - this.scrollbar.offsetTop;
        } else {
           this.dragOffset = eventOffset - this.scrollbar.offsetLeft;
        }

        document.addEventListener('mousemove', this, false);
        document.addEventListener('mouseup', this, false);

        this.resizeScrollbar();
    },

    startScroll: function(e) {

        this.flashScrollbar();
    },

    drag: function (e) {
        e.preventDefault();

        var eventOffset = e.pageY,
            dragPos     = null,
            dragPerc    = null,
            scrollPos   = null;

        if (this.scrollDirection === 'horiz') {
            eventOffset = e.pageX;
        }

        var offset = 0,
            a = 0;

        if(this.offsetAttr === 'top') {
            offset = this.track.offsetTop;
            a = this.track.offsetHeight;
        } else {
            offset = this.track.offsetLeft;
            a = this.track.offsetWidth;
        }

        dragPos = eventOffset - offset - this.dragOffset;

        dragPerc = dragPos / a;

        scrollPos = dragPerc * this.contentEl[this.scrollSizeAttr];

        this.scrollContentEl[this.scrollOffsetAttr] = scrollPos;
    },

    endDrag: function () {
        document.removeEventListener('mousemove', this, false);
        document.removeEventListener('mouseup', this, false);
    },

    flashScrollbar: function() {
        this.resizeScrollbar();
        this.showScrollbar();
    },

    resizeScrollbar: function() {

        if(MBT.API.Scrollbar === 0) {
            return;
        }

        var contentSize = this.contentEl[this.scrollSizeAttr],
            scrollOffset = this.scrollContentEl[this.scrollOffsetAttr],
            scrollbarSize = this.track[this.sizeAttr],
            scrollbarRatio = scrollbarSize / contentSize,
            handleOffset = Math.round(scrollbarRatio * scrollOffset) + 2,
            handleSize = Math.floor(scrollbarRatio * (scrollbarSize - 2)) - 2;

        if (scrollbarSize < contentSize) {
            if (this.scrollDirection === 'vert') {
                this.scrollbar.style.top = handleOffset;
                this.scrollbar.style.height = handleSize;
            } else {
                this.scrollbar.style.left = handleOffset +'px';
                this.scrollbar.style.width = handleSize +'px';
            }

            this.track.style.display = 'block';
        } else {
             this.track.style.display = 'none';
        }
    },

    resizeScrollContent: function() {
        if (MBT.API.Scrollbar.IS_WEBKIT) {
            return;
        }

        if (this.scrollDirection === 'vert') {
            this.scrollContentEl.style.width  = (this.el.offsetWidth + MBT.API.Scrollbar.SCROLLBAR_WIDTH)+'px';
            this.scrollContentEl.style.height = this.el.offsetHeight+'px';
        } else {
            this.scrollContentEl.style.width = this.el.offsetWidth+'px';
            this.scrollContentEl.style.height = this.el.offsetHeight + MBT.API.Scrollbar.SCROLLBAR_WIDTH+'px';
        }

    },

    showScrollbar: function () {
        this.scrollbar.className = this.theme.scrollbar +' visible';

        if (!this.options.autoHide) {
            return;
        }

        if(typeof this.flashTimeout === 'number') {
            window.clearTimeout(this.flashTimeout);
        }

        this.flashTimeout = window.setTimeout(this.hideScrollbar.bind(this), 1000);
    },

    hideScrollbar: function() {
        this.scrollbar.className = this.theme.scrollbar;

        if(typeof this.flashTimeout === 'number') {
            window.clearTimeout(this.flashTimeout);
        }
    },

    resizeScrollContent: function () {
        if (MBT.API.Scrollbar.IS_WEBKIT) {
            return;
        }

        if (this.scrollDirection === 'vert') {
            this.scrollContentEl.style.width  = (this.el.offsetWidth + MBT.API.Scrollbar.SCROLLBAR_WIDTH)+'px';
            this.scrollContentEl.style.height = this.el.offsetHeight+'px';
        } else {
            this.scrollContentEl.style.width = this.el.offsetWidth+'px';
            this.scrollContentEl.style.height = this.el.offsetHeight + MBT.API.Scrollbar.SCROLLBAR_WIDTH+'px';
        }
    },

    scrollbarWidth: function() {
        var tempEl = document.createElement('div');
        tempEl.style.width = '50px';
        tempEl.style.height = '50px';
        tempEl.style.overflowY = 'scroll';
        tempEl.style.top = '-200px';
        tempEl.style.left = '-200px';

        var elInsideTemp = document.createElement('div');
        elInsideTemp.style.height = '100px';

        tempEl.appendChild(elInsideTemp);

        document.body.appendChild(tempEl);

        width = 0,
        widthMinusScrollbars = 0;

        width = tempEl.offsetWidth;
        widthMinusScrollbars = elInsideTemp.offsetWidth;

        document.body.removeChild(tempEl);

        return (width - widthMinusScrollbars);
    },

    handleEvent: function(event) {
        switch(event.type) {
            case 'mousemove':
                this.drag(event);
                break;
            case 'mouseup':
                this.endDrag(event);
                break;
        }
    }
}
