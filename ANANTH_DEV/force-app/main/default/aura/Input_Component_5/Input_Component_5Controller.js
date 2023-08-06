({
	show : function(component, event, helper) {
        var exp = component.get("v.exp");
        var salary = 0;
        console.log('Exp:'+exp);
        if(exp>5){
            salary = 50000;
        }
        else{
            salary = 30000;
        }
        
        console.log('Exp:'+exp);
        component.set("v.salary",salary)
		
	}
})