public without sharing class AccountProcessor {
	@future
    public static void countContacts(List<Id> accountIds){
        List<Account> accounts = [SELECT ID,(SELECT Id from Contacts) from Account where Id in:accountIds];
        
        for(Account acc:accounts){
            acc.Number_Of_Contacts__c = acc.Contacts.size();
            
        }
        
        update accounts;
    }
}