public class CustomRecordSaveController {
    @AuraEnabled
    public static string sobjectRecordSave(String objectApiName, String fieldApi1, String fieldApi2, String fieldApi3, 
                                                  String fieldApi4, String fieldApi5, String fieldValue1, String fieldValue2,
                                                  String fieldValue3, String fieldValue4, String fieldValue5)
    {
        objectApiName = objectApiName.replace('"','');
        fieldApi1 = fieldApi1.replace('"','');
        fieldApi2 = fieldApi2.replace('"','');
        fieldApi3 = fieldApi3.replace('"','');
        fieldApi4 = fieldApi4.replace('"','');
        fieldApi5 = fieldApi5.replace('"','');
        fieldValue1 = fieldValue1.replace('"','');
        fieldValue2 = fieldValue2.replace('"','');
        fieldValue3 = fieldValue3.replace('"','');
        fieldValue4 = fieldValue4.replace('"','');
        fieldValue5 = fieldValue5.replace('"','');
        
        sObject obj = Schema.getGlobalDescribe().get(objectApiName).newSObject(); 
        List<String> allSObject = new List<String>();
        for( Schema.SObjectType o: Schema.getGlobalDescribe().values()){
            System.debug(o.getDescribe().getName());
            allSObject.add(o.getDescribe().getName());
        }
        
        try {
            if(objectApiName != null) {
                if(fieldApi1 == 'Id' || fieldApi2 == 'Id' || fieldApi3 == 'Id' || fieldApi4 == 'Id' || fieldApi5 == 'Id') {
                    try{
                        obj.put(fieldApi1, fieldValue1);
                    }catch(exception e){
                        throw new AuraHandledException('Object name is invalid..s');
                    }
                    if(String.isNotBlank(fieldApi1))
                        obj.put(fieldApi1, fieldValue1);
                    if(String.isNotBlank(fieldApi2))
                        obj.put(fieldApi2, fieldValue2);
                    if(String.isNotBlank(fieldApi3))
                        obj.put(fieldApi3, fieldValue3);
                    if(String.isNotBlank(fieldApi4))
                        obj.put(fieldApi4, fieldValue4);
                    if(String.isNotBlank(fieldApi5))
                        obj.put(fieldApi5, fieldValue5);
                    system.debug('obj===>'+obj);
                    update obj;
                }else{
                    if(String.isNotBlank(fieldApi1))
                        obj.put(fieldApi1, fieldValue1);
                    if(String.isNotBlank(fieldApi2))
                        obj.put(fieldApi2, fieldValue2);
                    if(String.isNotBlank(fieldApi3))
                        obj.put(fieldApi3, fieldValue3);
                    if(String.isNotBlank(fieldApi4))
                        obj.put(fieldApi4, fieldValue4);
                    if(String.isNotBlank(fieldApi5))
                        obj.put(fieldApi5, fieldValue5);
                    system.debug('obj===>'+obj);
                    
                    insert obj;
                }
            }
            return 'Success';
        }
        catch(Exception ex) {
            //System.assert(false, 'condition');
            System.debug('Exception == >'+ex.getMessage());
            //System.debug('Exception stack  == >'+);
            throw new AuraHandledException(ex.getMessage());
        
        }  
    }
}