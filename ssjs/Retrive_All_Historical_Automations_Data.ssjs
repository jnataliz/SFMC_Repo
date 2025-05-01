<script runat="server">

Platform.Load("Core", "1");

var api = new Script.Util.WSProxy();
var deKey = "527af26e-27e2-49bb-bde4-e0dbed33d228"; // External Key della DE

try {
    var automations = retrieveAllAutomations();
    var todayDate = "2025-04-18T00:00:00"; // fallback data fissa

    if (automations.length > 0) {
        for (var i = 0; i < automations.length; i++) {
            var automation = automations[i];

            // Preparazione LastRunTime
            var lastRunTimeValue = "1900-01-01T00:00:00Z"; // fallback neutro
            if (automation.LastRunTime && String(automation.LastRunTime).indexOf("0001") == -1) {
                lastRunTimeValue = automation.LastRunTime;
            }

            // Costruzione Properties
            var propertiesArray = [
                { Name: "AutomationCustomerKey", Value: automation.CustomerKey },
                { Name: "AutomationName", Value: automation.Name },
                { Name: "CreatedDate", Value: automation.CreatedDate },
                { Name: "FolderPath", Value: automation.CategoryID },
                { Name: "LastRunTime", Value: lastRunTimeValue },
                { Name: "EID", Value: "510003463" },
                { Name: "MID", Value: "510003463" },
                { Name: "BusinessUnitName", Value: "Sanofi Aventis Group" },
                { Name: "StartSource", Value: automation.AutomationType },
                { Name: "ScheduledFrequency", Value: automation.Schedule },
            ];

            var props = {
                CustomerKey: deKey,
                Properties: propertiesArray
            };

            // Proviamo a scrivere e gestiamo eventuali errori individuali
            try {
                var result = api.createItem('DataExtensionObject', props);

                if (result.Status == "OK") {
                    Write("Inserito automation " + automation.CustomerKey + "<br>");
                } else {
                    Write("Errore inserimento per automation " + automation.CustomerKey + ": " + Stringify(result) + "<br>");
                }
            } catch(innerErr) {
                Write("Errore critico su automation " + automation.CustomerKey + ": " + Stringify(innerErr) + "<br>");
            }
        }
    } else {
        Write("Nessuna automation trovata.");
    }

} catch(err) {
    Write("Errore globale: " + Stringify(err));
}

// Recupero Automations
function retrieveAllAutomations() {
    var out = [],
        moreData = true,
        reqID = data = null;

    var cols = [
        "Name",
        "CustomerKey",
        "CreatedDate",
        "CategoryID",
        "LastRunTime",
        "ScheduledTime",
        "AutomationType",
        "Schedule"
    ];

    var filter = {
        Property: 'Status',
        SimpleOperator: 'IN',
        Value: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
    };

    var opts = { BatchSize: 300 };
    var props = { QueryAllAccounts: true };

    while (moreData) {
        moreData = false;
        if(reqID) props.ContinueRequest = reqID;

        var data = api.retrieve("Automation", cols, filter, opts, props);

        if (data) {
            moreData = data.HasMoreRows;
            reqID = data.RequestID;
            for (var i = 0; i < data.Results.length; i++) {
                out.push(data.Results[i]);
            }
        }
    }

    return out;
}

</script>
