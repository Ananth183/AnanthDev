public class ParkLocator {
    public static List<String> country(string country){
        parkService.ParksImplPort prkSvc = new parkService.ParksImplPort();
        return prkSvc.byCountry(country);
       
    }
}