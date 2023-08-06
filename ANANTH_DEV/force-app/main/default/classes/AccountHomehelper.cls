public with sharing class AccountHomehelper {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type, Rating,
                Phone, Website, AnnualRevenue
            FROM Account ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccount(String searchTerm) {

        // Return all Accounts when no search term
        //searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getAccountList();
        }

        // Prepare query paramters
        searchTerm = '%' + searchTerm + '%';


        // Execute search query
        return [SELECT Id, Name, Type, Rating,
                Phone, Website, AnnualRevenue
            FROM Account where name like:searchTerm];
    }


    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id AccountId) {

        // Execute search query
        return [SELECT Name, Phone, LeadSource
            FROM Contact where AccountId =:AccountId];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName) { 
        String keyString = '%'+actName+'%';   
        return [SELECT Id, Name,Type, Rating,
        Phone, Website, AnnualRevenue FROM Account where name like:keyString];
    }
}