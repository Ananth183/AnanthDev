({
	clickCreateItem : function(component, event, helper) {
        var validItem = component.find('newcampingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validItem){
            
         
            var newCampItem = component.get("v.newItem");
            console.log("Camping Items123:" + JSON.stringify(newCampItem));
            var Test = JSON.stringify(newCampItem);
            var campingItems = componenet.get("v.items");
           var Test = JSON.stringify(campingItems);
            var item1 = JSON.parse(JSON.stringify(campingItems));
            
            campingItems.push(item1);
            
                      
            componenet.set("v.items",campingItems);

            componenet.set("v.newItem",{
                'sObjectType' : 'camping_Item__c',
                'Name' : '',
                'Quantity__c' : 0,
                'Price__c' : 0,
                'Packed__c' : false            
            });     
        }       
	}
})