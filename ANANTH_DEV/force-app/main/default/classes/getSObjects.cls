public with sharing class getSObjects {
    @AuraEnabled(cacheable=true)
    public static List<string> getAllObjects(){
        List<string> objectList = new List<string>();
        for ( Schema.SObjectType o : Schema.getGlobalDescribe().values() )
        {
            Schema.DescribeSObjectResult objResult = o.getDescribe();
            objectList.add(objResult.getName());
        }
        objectList.sort();
        return objectList;
    } 
}