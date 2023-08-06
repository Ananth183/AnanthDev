public with sharing class OpportuniyController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> findOpportunityByAccountId(String accountId) { 
        return [SELECT Id,Name,Amount,StageName,CloseDate FROM Opportunity where AccountId =:accountId];
    }
}