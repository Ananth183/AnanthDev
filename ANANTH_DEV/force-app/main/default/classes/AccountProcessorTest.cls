@isTest
public class AccountProcessorTest {
    @isTest
    private static void countContactsTest(){
        //Load Test Data
        List<Account> accounts = new List<Account>();
        for (Integer i=0; i<300; i++) {
            accounts.add(new Account(Name='Test Account' + i));
        }
        insert accounts;
        
        
        List<Contact> contacts = new List<Contact>();
        List<Id> accountIds = new List<Id>();
        for (Account acc: accounts) {
            contacts.add(new Contact(FirstName=acc.Name, LastName='TestContact', AccountId=acc.Id));
            accountIds.add(acc.Id);
        }
        insert contacts;
        //Do the Test
        
        
        Test.startTest();
        AccountProcessor.countContacts(accountIds);
        Test.stopTest();
        
        //Check Result
        
         List<Account> accs = [SELECT Id, Number_of_Contacts__c FROM Account];
        for (Account acc : accs) {
			System.assertEquals(1, acc.Number_of_Contacts__c, 'ERROR: At least 1 Account record with incorrect Contact count');            
        }
    }
}