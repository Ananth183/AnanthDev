@isTest
public class AccountTriggerKeepAcctTeamTest {
	@IsTest
    
    private static void testAccountHandler(){
        
        List<Account> listAcc = [SELECT Id FROM Account Where NAME = 'Anantha Sai']; 
    	String str = JSON.serialize(listAcc);   
        
        
        Test.startTest();
        
            AccountTriggerKeepAcctTeamHandler.retainOldTeamMemberOnOwnerChange(str);
            List<Account> newlistAcc = (List<Account>) JSON.deserialize(str,List<Account>.class);
            for(Account objAccTeamMember : newlistAcc){
                system.assertEquals('Prospect', objAccTeamMember.type);
            }
        
        Test.stopTest();
    }
}