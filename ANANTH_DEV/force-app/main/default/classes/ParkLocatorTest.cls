@isTest
public class ParkLocatorTest {

    @isTest
    static void testCallOut(){
        Test.setMock(WebServiceMock.class, new ParkServiceMock());
        string country = 'United States';
        List<String> expectedParks = new List <String>{'India','AP','kerala'};
        system.assertEquals(expectedParks, ParkLocator.country(country));
        
    }
}