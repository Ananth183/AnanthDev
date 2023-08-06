@RestResource(urlMapping='/Teacher/*')
global with sharing class TeacherRestApi {
        @HttpGet
    global static Teacher__c getTeacherById() {
        RestRequest request = RestContext.request;
        // grab the Teacher Id from the end of the URL
        String TeacherId = request.requestURI.substring(
          request.requestURI.lastIndexOf('/')+1);
        Teacher__c result =  [SELECT Name__c,Age__c,Salary__c
                        FROM Teacher__c
                        WHERE Id = :TeacherId];
        return result;
        
    }    
}