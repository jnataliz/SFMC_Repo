<script runat="server">

Platform.Load("Core", "1");

var api = new Script.Util.WSProxy();

try {
    var automations = retrieveAllAutomations();

    if (automations.length > 0) {
        // Iteriamo su tutte le automazioni e mostriamo le informazioni
        for (var i = 0; i < automations.length; i++) {
            var automation = automations[i]; // Automazione corrente
            
            // Otteniamo il formato delle date
            var createdDate = automation.CreatedDate;
            var lastRunTime = automation.LastRunTime;

            // Mostriamo l'oggetto Schedule completo per l'analisi
            Write("<br><br>");
            Write("Automation " + (i + 1) + ":</b><br>");
            Write("AutomationCustomerKey: " + automation.CustomerKey + "<br>");
            Write("AutomationName: " + automation.Name + "<br>");
            Write("CreatedDate (Formato originale): " + createdDate + "<br>");
            Write("LastRunTime (Formato originale): " + lastRunTime + "<br>");
            Write("ScheduledTime: " + automation.ScheduledTime + "<br>");
            
            // Mostriamo l'oggetto Schedule per debug
            Write("Schedule Object: " + Stringify(automation.Schedule) + "<br>");
            
            // Accesso al campo Schedule (ScheduleDefinition)
            var scheduleDetails = automation.Schedule; // Contenuto della pianificazione
            var recurrenceType = "N/A"; // Default se la frequenza non è disponibile
            var recurrenceInterval = "N/A"; // Default se l'intervallo non è disponibile

            // Estrazione della frequenza (RecurrenceType) e intervallo (Recurrence)
            if (scheduleDetails) {
                if (scheduleDetails.RecurrenceType) {
                    recurrenceType = scheduleDetails.RecurrenceType;
                }
                if (scheduleDetails.Recurrence) {
                    recurrenceInterval = scheduleDetails.Recurrence;
                }
            }

            // Visualizzare le informazioni di frequenza e intervallo
            Write("Recurrence Type: " + recurrenceType + "<br>");
            Write("Recurrence Interval: " + recurrenceInterval + "<br>");
            Write("<br>");
        }
    } else {
        Write("Nessuna automation trovata.");
    }

} catch(err) {
    Write("Errore: " + Stringify(err));
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
        "Schedule"  // Include la proprietà Schedule
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