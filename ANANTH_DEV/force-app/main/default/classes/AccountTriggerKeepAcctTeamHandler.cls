public class AccountTriggerKeepAcctTeamHandler {
    @future
    public static void retainOldTeamMemberOnOwnerChange(String str){
        system.debug('Future call '+str); 
        List<Account> newlistAcc = (List<Account>) JSON.deserialize(str,List<Account>.class);
        for(Account objAccTeamMember : newlistAcc){
            objAccTeamMember.type= 'Prospect';
        }
        system.debug('Account records to insert'+(JSON.serialize(newlistAcc)));
        update newlistAcc;
     }
}