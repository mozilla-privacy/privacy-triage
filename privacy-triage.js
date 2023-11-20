PrivacyTriage = function () { };
PrivacyTriage.prototype.tables = {};
PrivacyTriage.prototype.rootElement = "#privacy-triage-root";
// PrivacyTriage.prototype.rootElement = "#privacy-triage-root";
PrivacyTriage.prototype.version = "0.1";
PrivacyTriage.prototype.useTabs = false;

// COMPONENTS
PrivacyTriage.prototype.components = [
    "DOM: Credential Management",
    "Permission Manager",
    "Privacy: Anti-Tracking",
];

// TABLES
PrivacyTriage.prototype.availableTables = {
    "untriaged": {
        "is_user": false,
        "title": "Untriaged bugs",
        "query": {
            // Not closed
            "resolution": "---",

            // no need info
            "f19": "flagtypes.name",
            "v19": "needinfo",
            "o19": "substring",
            "n19": "1",

            // Core networking components
            "product": "Core",
            "component": PrivacyTriage.prototype.components,
            "query_format": "advanced",

            // Skip intermittent bugs or WPT sync bugs
            "email1": "intermittent-bug-filer@mozilla.bugs",
            "email2": "wptsync@mozilla.bugs",
            "emailreporter1": "1",
            "emailreporter2": "1",
            "emailtype1": "notequals",
            "emailtype2": "notequals",
            "j1": "OR",
            "f1": "OP",

            // Don't have triaged tag
            "f2": "OP",
            "n3": "1",
            "f3": "status_whiteboard",
            "o3": "substring",
            // "v3": "[necko-triaged]",
            "v3": "[privacy-triaged]",
            "n4": "1",
            "f4": "status_whiteboard",
            "o4": "substring",
            // "v4": "[necko-priority-queue]",
            "v4": "[privacy-priority-queue]",
            "n5": "1",
            "f5": "status_whiteboard",
            "o5": "substring",
            // "v5": "[necko-priority-review]",
            "v5": "[privacy-priority-review]",
            "n6": "1",
            "f6": "status_whiteboard",
            "o6": "substring",
            // "v6": "[necko-would-take]",
            "v6": "[privacy-would-take]",
            "n7": "1",
            "f7": "status_whiteboard",
            "o7": "substring",
            // "v7": "[necko-backlog]",
            "v7": "[privacy-backlog]",
            "n8": "1",
            "f8": "status_whiteboard",
            "o8": "substring",
            // "v8": "[necko-active]",
            "v8": "[privacy-active]",
            "n9": "1",
            "f9": "status_whiteboard",
            "o9": "substring",
            // "v9": "[necko-next]",
            "v9": "[privacy-next]",
            "f10": "CP",

            // Has [necko-triaged] but priority or severity is empty.
            "f11": "OP",
            "j12": "OR",
            "f12": "OP",
            "f13": "priority",
            "o13": "equals",
            "v13": "--",
            "f14": "bug_severity",
            "o14": "equals",
            "v14": "--",
            "f15": "CP",
            "f16": "status_whiteboard",
            "o16": "substring",
            // "v16": "[necko-triaged]",
            "v16": "[privacy-triaged]",
            "f17": "CP",
            "f18": "CP",
        },
        "extra_columns": ["priority"],
        "default_sort": "priority"
    },

    // TEST FAILURES SECTION
    "recent-intermittents": {
        "is_user": false,
        "title": "Recent Intermittent test failures",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "short_desc",
            "o1": "substring",
            "v1": "application crashed",
            "n1": "1",
            "f3": "reporter",
            "o3": "equals",
            "v3": "intermittent-bug-filer@mozilla.bugs",
            "n4": "1",
            "f4": "status_whiteboard",
            "o4": "substring",
            // "v4": "[necko-triaged]",
            "v4": "[privacy-triaged]",
            "n5": "1",
            "f5": "status_whiteboard",
            "o5": "substring",
            // "v5": "[necko-would-take]",
            "v5": "[privacy-would-take]",
            "n6": "1",
            "f6": "status_whiteboard",
            "o6": "substring",
            // "v6": "[necko-backlog]",
            "v6": "[privacy-backlog]",
            "n7": "1",
            "f7": "status_whiteboard",
            "o7": "substring",
            // "v7": "[necko-active]",
            "v7": "[privacy-active]",
            "n8": "1",
            "f8": "status_whiteboard",
            "o8": "substring",
            // "v8": "[necko-next]",
            "v8": "[privacy-next]",
            "chfield": "[Bug creation]",
            "chfieldfrom": "2023-06-15",
        },
        "extra_columns": ["failure_count"],
        "default_sort": "failure_count"
    },

    // REOPENED SECTION
    "reopened" : {
        "is_user": false,
        "title": "Reopened bugs",
        "query": {
            "resolution": "---",
            "bug_status": "REOPENED",
            "product": "Core",
            "component": PrivacyTriage.prototype.components,
            "query_format": "advanced",
        },
        "extra_columns": ["priority"],
        "default_sort": "priority"
    },

    // PRIORITY QUEUE SECTION
    "priority-queue": {
        "is_user": false,
        // "title": "Necko Priority Queue",
        "title": "Privacy Priority Queue",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "status_whiteboard",
            "o1": "substring",
            // "v1": "[necko-priority-queue]",
            "v1": "[privacy-priority-queue]",
        },
        "extra_columns": ["priority"],
        "default_sort": "priority"
    },

    // NEXT PRIORITY SECTION
    "next-priority": {
        "is_user": false,
        // "title": "Necko Next Priority",
        "title": "Privacy Next Priority",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "status_whiteboard",
            "o1": "substring",
            // "v1": "[necko-priority-next]",
            "v1": "[privacy-priority-next]",
        },
        "extra_columns": ["priority"],
        "default_sort": "priority"
    },

    // PRIORITY NEW SECTION
    "priority-new": {
        "is_user": false,
        // "title": "Necko Priority New",
        "title": "Privacy Priority New",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "status_whiteboard",
            "o1": "substring",
            // "v1": "[necko-priority-new]",
            "v1": "[privacy-priority-new]",
        },
        "extra_columns": [],
    },
    "priority-review": {
        "is_user": false,
        // "title": "Necko Priority Review",
        "title": "Privacy Priority Review",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "status_whiteboard",
            "o1": "substring",
            // "v1": "[necko-priority-review]",
            "v1": "[privacy-priority-review]",
        },
        "extra_columns": [],
    },

    // MONITOR SECTION
    "monitoring": {
        "is_user": false,
        // "title": "Necko Monitor",
        "title": "Privacy Monitor",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "status_whiteboard",
            "o1": "substring",
            // "v1": "[necko-monitor]",
            "v1": "[privacy-monitor]",
        },
        "extra_columns": ["priority"],
        "default_sort": "priority"
    },

    // UNTRIAGED BUGS SECTION
    "untriaged-ni": {
        "is_user": false,
        "title": "Untriaged bugs (awaiting ni?)",
        "query": {
            "product": "Core",
            "component": PrivacyTriage.prototype.components,
            "query_format": "advanced",
            "f1": "flagtypes.name",
            "v1": "needinfo?",
            "resolution": "---",
            "o1": "substring",
            "n3": "1",
            "f3": "status_whiteboard",
            "o3": "substring",
            // "v3": "[necko-triaged]",
            "v3": "[privacy-triaged]",
            "n4": "1",
            "f4": "status_whiteboard",
            "o4": "substring",
            // "v4": "[necko-would-take]",
            "v4": "[privacy-would-take]",
            "n5": "1",
            "f5": "status_whiteboard",
            "o5": "substring",
            // "v5": "[necko-backlog]",
            "v5": "[privacy-backlog]",
            "n6": "1",
            "f6": "status_whiteboard",
            "o6": "substring",
            // "v6": "[necko-active]",
            "v6": "[privacy-active]",
            "n7": "1",
            "f7": "status_whiteboard",
            "o7": "substring",
            // "v7": "[necko-next]",
            "v7": "[privacy-next]",
        },
        "extra_columns": ["ni-date"],
        "default_sort": "ni-date"
    },

    // UNASSIGNED P1 SECTION
    "p1-unassigned": {
        "is_user": false,
        "title": "Unassigned P1 bugs",
        "query": {
            "j_top": "OR",
            "f1": "assigned_to",
            "o1": "isempty",
            "f2": "assigned_to",
            "o2": "equals",
            "v2": "nobody@mozilla.org",
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "priority": "P1",
            "resolution": "---"
        },
        "extra_columns": [],
        "default_sort": "severity"
    },

    // UNASSIGNED P2 SECTION
    "p2-unassigned": {
        "is_user": false,
        "title": "Unassigned P2 bugs",
        "query": {
            "j_top": "OR",
            "f1": "assigned_to",
            "o1": "isempty",
            "f2": "assigned_to",
            "o2": "equals",
            "v2": "nobody@mozilla.org",
            "product": "Core",
            "query_format": "advanced",
            // "component": PrivacyTriage.prototype.components,
            "component": PrivacyTriage.prototype.components,
            "priority": "P2",
            "resolution": "---"
        },
        "extra_columns": [],
        "default_sort": "severity"
    },

    // STALLED BUGS SECTION
    "stalled": {
        "is_user": false,
        "title": "Stalled Bugs",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "keywords": "stalled",
            "keywords_type": "allwords"
        },
        "extra_columns": [],
        "default_sort": "severity"
    },


    // TEST CRASHES SECTION
    "intermittent-test-crashes": {
        "is_user": false,
        "title": "Intermittent test crashes",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "short_desc",
            "o1": "substring",
            "v1": "application crashed",
            "f3": "reporter",
            "o3": "equals",
            "v3": "intermittent-bug-filer@mozilla.bugs",
            "n4": "1",
            "f4": "status_whiteboard",
            "o4": "substring",
            // "v4": "[necko-triaged]",
            "v4": "[privacy-triaged]",
            "n5": "1",
            "f5": "status_whiteboard",
            "o5": "substring",
            // "v5": "[necko-would-take]",
            "v5": "[privacy-would-take]",
            "n6": "1",
            "f6": "status_whiteboard",
            "o6": "substring",
            // "v6": "[necko-backlog]",
            "v6": "[privacy-backlog]",
            "n7": "1",
            "f7": "status_whiteboard",
            "o7": "substring",
            // "v7": "[necko-active]",
            "v7": "[privacy-active]",
            "n8": "1",
            "f8": "status_whiteboard",
            "o8": "substring",
            // "v8": "[necko-next]",
            "v8": "[privacy-next]",
        },
        "extra_columns": ["failure_count"],
        "default_sort": "failure_count"
    },

    // TEST FAILURES SECTION
    "intermittent-test-failures": {
        "is_user": false,
        "title": "Intermittent test failures",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "f1": "short_desc",
            "o1": "substring",
            "v1": "application crashed",
            "n1": "1",
            "f3": "reporter",
            "o3": "equals",
            "v3": "intermittent-bug-filer@mozilla.bugs",
            "n4": "1",
            "f4": "status_whiteboard",
            "o4": "substring",
            // "v4": "[necko-triaged]",
            "v4": "[privacy-triaged]",
            "n5": "1",
            "f5": "status_whiteboard",
            "o5": "substring",
            // "v5": "[necko-would-take]",
            "v5": "[privacy-would-take]",
            "n6": "1",
            "f6": "status_whiteboard",
            "o6": "substring",
            // "v6": "[necko-backlog]",
            "v6": "[privacy-backlog]",
            "n7": "1",
            "f7": "status_whiteboard",
            "o7": "substring",
            // "v7": "[necko-active]",
            "v7": "[privacy-active]",
            "n8": "1",
            "f8": "status_whiteboard",
            "o8": "substring",
            // "v8": "[necko-next]",
            "v8": "[privacy-next]",
        },
        "extra_columns": ["failure_count"],
        "default_sort": "failure_count"
    },
};

// UNASSIGNED P2 BUGS SECTION
PrivacyTriage.prototype.add_more_tables = function () {
    for (comp in this.components) {
        let name = "p2-unassigned-" + comp;
        let title = "Unassigned P2 bugs - " + this.components[comp];
        this.availableTables[name] =  {
            "is_user": false,
            "title": title,
            "query": {
                "j_top": "OR",
                "f1": "assigned_to",
                "o1": "isempty",
                "f2": "assigned_to",
                "o2": "equals",
                "v2": "nobody@mozilla.org",
                "product": "Core",
                "query_format": "advanced",
                "component": [this.components[comp]],
                "priority": "P2",
                "resolution": "---"
            },
            "extra_columns": [],
            "default_sort": "severity",
        };
    }

    // META BUGS SECTION
    this.availableTables["meta-bugs"] = {
        "is_user": false,
        "title": "Meta Bugs",
        "query": {
            "product": "Core",
            "query_format": "advanced",
            "component": PrivacyTriage.prototype.components,
            "resolution": "---",
            "keywords": "meta",
            "keywords_type": "allwords"
        },
        "default_sort": "id",
        "extra_columns": ["alias"],
    }
};

PrivacyTriage.prototype.init = function () {
    // Make sure we display the proper version info
    $("#necko-triage-version").text(this.version);
    // $("#privacy-triage-version").text(this.version);

    // Give ourselves a handle to the element, not just its id
    this.rootElement = $(this.rootElement);

    this.settings = new AppSettings();
    $("#menu").menu();
    $("#reload-all").click($.proxy(this, "reloadAll", false));

    this.settings.darkModeChanged();

    this.loadBugzillaMetadata();

    this.add_more_tables();
    // Now load all the tables
    let self = this;
    $.each(this.availableTables, function (k, v) {
        self.tables[k] = new BugTable(k, v, self);
        self.tables[k].create();
    });

    this.createUserTables();

    // Finally, set up the tabs, now that all our DOM elements are in place
    this.useTabs = this.settings.get("show-tables-in-tabs");
    if (this.useTabs) {
        this.rootElement.tabs({
            "activate": (event, ui) => {
                let uiId = ui["newTab"].attr("id");
                let tableId = uiId.replace(/^bug-tab-/, "");
                self.tables[tableId].load();
            }
        });
    }
};

PrivacyTriage.prototype.persistProducts = function (data) {
    let ps = data["products"];
    let products = [];
    for (let i = 0; i < ps.length; i++) {
        let product = {"name": ps[i]["name"],
                       "components": []};
        let cs = ps[i]["components"];
        for (let j = 0; j < cs.length; j++) {
            product["components"].push(cs[j]["name"]);
        }
        product["components"].sort();
        products.push(product);
    }
    products.sort((a, b) => {
        let au = a.name.toUpperCase();
        let bu = b.name.toUpperCase();

        if (au < bu) {
            return -1;
        }

        if (au > bu) {
            return 1;
        }

        return 0;
    });
    this.products = products;
    window.localStorage.setItem("bz-products", JSON.stringify(this.products));
};
PrivacyTriage.prototype.lazyRefreshProducts = function () {
    let self = this;
    let origin = this.settings.get("testing-only-bugzilla-origin");
    $.getJSON({url: origin + "/rest/product?type=enterable&include_fields=name,components",
               type: "GET",
               traditional: true})
             .then(function (data) { self.persistProducts(data); });
};
PrivacyTriage.prototype.loadBugzillaMetadata = async function () {
    let origin = this.settings.get("testing-only-bugzilla-origin");
    let self = this;

    this.statuses = [];
    await $.getJSON(origin + "/rest/field/bug/status/values").then((data) => {
        self.statuses = data["values"];
    });

    this.resolutions = [];
    await $.getJSON(origin + "/rest/field/bug/resolution/values").then((data) => {
        self.resolutions = data["values"];
    });

    let products = window.localStorage.getItem("bz-products");
    if (products) {
        this.products = JSON.parse(products);
        this.lazyRefreshProducts();
    } else {
        this.products = [];
        await $.getJSON({url: origin + "/rest/product?type=enterable&include_fields=name",
                        type: "GET",
                        traditional: true})
                    .then(function (data) { self.products = data["products"]; }).promise();
        this.products.sort((a, b) => {
            let au = a.name.toUpperCase();
            let bu = b.name.toUpperCase();

            if (au < bu) {
                return -1;
            }

            if (au > bu) {
                return 1;
            }

            return 0;
        });

        this.lazyRefreshProducts();
    }
};

PrivacyTriage.prototype.reloadAll = function (resetUserTables) {
    // In addition to destroying our tables if the user has un-checked the box,
    // we need to destroy them (temporarily) if we're changing the list of
    // user tables. This allows jquery-ui to set the proper classes on the new
    // tables so they'll properly display as tabs.
    if (this.useTabs && (resetUserTables || !this.settings.get("show-tables-in-tabs"))) {
        this.rootElement.tabs("destroy");
    }

    if (resetUserTables) {
        $(".user-table").remove();
        $(".user-table-tab").remove();

        let newTables = {};
        $.each(this.tables, function (k, table) {
            if (!table.isUser) {
                newTables[k] = table;
            }
        });
        this.tables = newTables;
    }

    $.each(this.tables, function (k, table) {
        table.load();
    });

    if (resetUserTables) {
        this.createUserTables();
    }

    // This is the pair for the block at the top of this method - enable our tabs
    // if (1) they're newly enabled, or (2) they were enabled *and* we changed
    // the table list.
    if ((!this.useTabs && this.settings.get("show-tables-in-tabs")) ||
        (this.useTabs && resetUserTables)) {
        this.rootElement.tabs();
    }

    this.useTabs = this.settings.get("show-tables-in-tabs");
};
PrivacyTriage.prototype.createUserTables = function () {
    let customQueries = this.settings.get("custom-queries");
    let self = this;
    $.each(customQueries, function (i, customQuery) {
        self.createUserTable(i, customQuery);
    });
};
PrivacyTriage.prototype.createUserTable = function (index, customQuery) {
    let queryConfig = $.extend({}, customQuery);
    queryConfig["extra_columns"] = [];
    queryConfig["default_sort"] = "severity";
    queryConfig["is_user"] = true;

    let tableID = "user-query-" + index;
    this.tables[tableID] = new BugTable(tableID, queryConfig, this);
    this.tables[tableID].create();
};

PrivacyTriage.prototype.autocompleteEmail = async function (request, response) {
    let api_key = this.settings.get("bz-apikey");
    let url = this.settings.get("testing-only-bugzilla-origin") + "/rest/user?api_key=" + api_key + "&match=" + request["term"];
    let matches;

    await $.getJSON({
        url: url,
        type: "GET",
        processData: false,
        headers: {"Content-Type": "application/json"}
    }).done((data) => { matches = data["users"]; }).promise();

    response(matches.map(x => x["email"]));
};
