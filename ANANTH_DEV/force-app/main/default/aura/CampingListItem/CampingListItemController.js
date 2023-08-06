({
    packItem:function(componenet,event,helper){
        component.set("v.item.Packed__c",true);
        event.getSource().set("v.disabled",true);  
    }
})