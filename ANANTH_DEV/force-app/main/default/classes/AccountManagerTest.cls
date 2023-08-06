@isTest
public class AccountManagerTest {
    
    @isTest
    static void testGetAccount(){
        Account a = new Account(Name='Ananth');
        insert a;
        COntact c = new Contact(AccountId = a.Id,FirstName = 'Ananth',LastName = 'Gadamsetty');
        insert c;
        
        RestRequest request = new RestRequest();
        request.requestUri =
            'https://yourInstance.salesforce.com/services/apexrest/Accounts/'+a.Id+'/contacts';
            
        request.httpMethod = 'GET';
        RestContext.request = request;
        
        
        Account myAccnt = AccountManager.getAccount();
        system.assert(myAccnt!= null);
        system.assertEquals('Ananth', myAccnt.Name);
        
    }

}