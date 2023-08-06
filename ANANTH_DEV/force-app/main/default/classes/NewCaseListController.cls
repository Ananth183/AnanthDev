public class NewCaseListController {
    public list<Case> getNewCases(){
        list<case> caselist = new list<case>();
        caselist = [Select Id,CaseNumber from case where status='New'];
        return caselist;
    }
}