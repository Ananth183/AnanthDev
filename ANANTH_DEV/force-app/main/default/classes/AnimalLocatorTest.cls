@isTest
public class AnimalLocatorTest {
    @isTest
    static void animalLocatorTestcase1(){
        Test.setMock(HttpcalloutMock.class, new AnimalLocatorMock());
        string actual = AnimalLocator.getAnimalNameById(1);
        string expected = 'moose';
        system.assertEquals(expected, actual);
    }

}