<script runat="server">

    Platform.Load("core", "1");

    var api = new Script.Util.WSProxy();

    try {

        api.setClientId({ "ID": Platform.Function.AuthenticatedMemberID() });

    var fields = [
    {
        "Name": "EID",
    "FieldType": "Text",
    "MaxLength": 50
            },
    {
        "Name": "MID",
    "FieldType": "Text",
    "MaxLength": 50
            },
    {
        "Name": "BusinessUnitName",
    "FieldType": "Text",
    "MaxLength": 100
            },
    {
        "Name": "AutomationName",
    "FieldType": "Text",
    "MaxLength": 100
            },
    {
        "Name": "AutomationCustomerKey",
    "FieldType": "Text",
    "MaxLength": 50
            },
    {
        "Name": "Type",
    "FieldType": "Text",
    "MaxLength": 20
            },
    {
        "Name": "StartSource",
    "FieldType": "Text",
    "MaxLength": 20
            },
    {
        "Name": "CreatedDate",
    "FieldType": "Date"
            },
    {
        "Name": "ScheduledFrequency",
    "FieldType": "Text",
    "MaxLength": 50
            },
    {
        "Name": "LastRunTime",
    "FieldType": "Date"
            },
    {
        "Name": "30DaySuccessRate",
    "FieldType": "Decimal"
            },
    {
        "Name": "30DayCompletionCount",
    "FieldType": "Number"
            },
    {
        "Name": "30DayErrorCount",
    "FieldType": "Number"
            },
    {
        "Name": "30DaySkipCount",
    "FieldType": "Number"
            },
    {
        "Name": "30DayRunCount",
    "FieldType": "Number"
            },
    {
        "Name": "12MonthRunCount",
    "FieldType": "Number"
            },
    {
        "Name": "FolderPath",
    "FieldType": "Text",
    "MaxLength": 255
            }
    ];

    var config = {
        "CustomerKey": GUID(),
    "Name": "AutomationDataExtension",
    "CategoryID": 129565,
    "Fields": fields,
    "IsSendable": false,
    "IsTestable": false
        };

    var result = api.createItem("DataExtension", config);

    Write(Stringify(result));
        
    } catch(error) {
        Write(Stringify(error));
    }

</script>


