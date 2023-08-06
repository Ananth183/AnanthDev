public class List_Example_One {
    Public Account Acc {set;get;}
    Public List<Account> accounts {set;get;}
    Public List_Example_One(){
        acc = new Account();
        accounts = new List<Account>();
    }
    Public void addMe(){
        accounts.add(acc);
        acc = new Account(); //We are doing this to clear data in VF page, once we have entered the data.
    }
    
    Public void clearData(){
        accounts.clear();        
	}

}