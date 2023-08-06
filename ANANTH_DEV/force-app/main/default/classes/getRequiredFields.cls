public with sharing class getRequiredFields {
    @AuraEnabled(cacheable=true)
    public static List<string> getReqFields(string objectName){
        Map<String, Schema.SObjectType> m = Schema.getGlobalDescribe();
        List<string> reqFieldList = new List<string>();
        Schema.SObjectType s = m.get(objectName);
        Schema.DescribeSObjectResult r = s.getDescribe();
        Map<String,Schema.SObjectField> fields = r.fields.getMap();
        for(String field : fields.keyset()) {
        Schema.DescribeFieldResult describeResult = fields.get(field).getDescribe();
            if (describeResult.isCreateable() && !describeResult.isNillable() && !describeResult.isDefaultedOnCreate()) {
                reqFieldList.add(field);
            }
        }
        system.System.debug(reqFieldList);
        return(reqFieldList);
    }
}