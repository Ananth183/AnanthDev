public class StringArrayTest {
    public static List<String> generateStringArray(Integer n){
        List<String> a = new List<String>();
        for(integer i=0;i<n ;i++){
           a.add('Test '+i);
        }
        system.debug(a);
        return a;  
    }
}