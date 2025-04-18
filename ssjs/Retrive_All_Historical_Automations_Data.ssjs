<script runat="server">

Platform.Load("Core", "1");

var api = new Script.Util.WSProxy();
var deCustomerKey = "527af26e-27e2-49bb-bde4-e0dbed33d228"; // il tuo DE External Key

try {
    var automations = retrieveAllAutomations();

    for (var i = 0; i < automations.length; i++) {
        var automation = automations[i];

        var props = [
            { Name: "AutomationCustomerKey", Value: automation.CustomerKey },
            { Name: "AutomationName", Value: automation.Name },
            { Name: "CreatedDate", Value: automation.CreatedDate },
            { Name: "FolderPath", Value: automation.CategoryID },
            { Name: "LastRunTime", Value: automation.LastRunTime },
            { Name: "ScheduledTime", Value: automation.ScheduledTime },
            { Name: "EID", Value: "510003463" },
            { Name: "MID", Value: "510003463" },
            { Name: "BusinessUnitName", Value: "Sanofi Aventis Group" }
        ];

        var result = api.updateItem('DataExtensionObject', {
            CustomerKey: deCustomerKey,
            Properties: props
        });

        // Se vuoi vedere il risultato
        Write("Automation " + automation.Name + ": " + Stringify(result) + "<br>");
    }

} catch(err) {
    Write("Errore: " + Stringify(err));
}

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
        "ScheduledTime"
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
