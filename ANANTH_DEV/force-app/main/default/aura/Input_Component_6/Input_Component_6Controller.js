({
	calculate : function(component, event, helper) {
        var amount = component.get("v.Amount");
         var years = component.get("v.Years");
         var rate = component.get("v.Rate");
        
        
        component.set("v.Intrest",(amount*years*rate)/100);
        
		
	},
    
    reset : function(component, event, helper) {
        component.set("v.Amount",0);
        component.set("v.Years",0);
        component.set("v.Rate",0);
        component.set("v.Intrest",0);
		
	}
    
   
})