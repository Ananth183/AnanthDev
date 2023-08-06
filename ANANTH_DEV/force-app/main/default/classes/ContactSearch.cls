public class ContactSearch {
    public static list<Contact> searchForContacts (string lastname,string postalcode){
        list<contact> contacts ;
        contacts = [SELECT Id,Name FROM Contact 
                   WHERE (LastName= :lastname AND MailingPostalCode = :postalcode)
                   ];
        return contacts;
    }

}