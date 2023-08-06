({
	show : function(component, event, helper) {
		var abc=component.get("c.callMe");
        
        abc.setCallback(this,function(response){
            console.log('Method Invoked');
            var state = response.getState();
            if(state==='SUCCESS'){
                console.log('Operation Success');
                var result = response.getReturnValue();
					 component.set("v.empName",result);
            }else{
                    console.log('Error');
            }
           
        });
        $A.enqueueAction(abc);
       //component.set("v.empName",abc);
	}
})