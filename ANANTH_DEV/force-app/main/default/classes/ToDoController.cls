public class ToDoController {
  //Add a new item in ToDo__c object
  //Accepts serialized ToDo object
  @AuraEnabled
  public static String addTodo(String payload) {
    ToDo payloadObject = (ToDo) JSON.deserialize(payload, ToDo.class);

    SObject todo = (Sobject) Type.forName('ToDo__c').newInstance();
    todo.put('Name', payloadObject.todoName);
    todo.put('Done__c', payloadObject.done);

    insert todo;

    return String.valueOf(todo.Id);
  }

  //Update an item
  //Accepts serialized ToDo object
  @AuraEnabled
  public static void updateTodo(String payload) {
    ToDo payloadObject = (ToDo) JSON.deserialize(payload, ToDo.class);

    SObject todo = (Sobject) Type.forName('ToDo__c').newInstance();
    todo.put('Id', payloadObject.todoId);
    todo.put('Name', payloadObject.todoName);
    todo.put('Done__c', payloadObject.done);

    update todo;
  }

  @AuraEnabled
  public static void HideTodo(String payload) {
    ToDo payloadObject = (ToDo) JSON.deserialize(payload, ToDo.class);

    SObject todo = (Sobject) Type.forName('ToDo__c').newInstance();
    todo.put('Id', payloadObject.todoId);
    todo.put('Name', payloadObject.todoName);
    todo.put('Show__c', payloadObject.show);

    update todo;
  }

  //Delete an item
  //Accepts id of the item to delete
  @AuraEnabled
  public static void deleteTodo(String todoId) {
    SObject todo = (Sobject) Type.forName('ToDo__c').newInstance();
    todo.put('Id', todoId);

    delete todo;
  }

  //Get all todos for last 7 days
  //The method is cacheable, means the response will cached in the browser
  @AuraEnabled(cacheable=true)
  public static List<ToDo> getAllTodos() {
    List<SObject> todos = Database.query(
      'SELECT Id, Name, CreatedDate, Done__c,Show__c FROM ToDo__c WHERE CreatedDate = LAST_N_DAYS:7 and Show__c = true ORDER BY CreatedDate DESC'
    );

    return getToDos(todos);
  }

  //Get all todos for today
  @AuraEnabled
  public static List<ToDo> getCurrentTodos() {
    List<SObject> todos = Database.query(
      'SELECT Id, Name, CreatedDate, Done__c,Show__c FROM ToDo__c WHERE   and Show__c = true ORDER BY CreatedDate DESC'
    );
    return getToDos(todos);
  }


   //Get all todos by Id
   @AuraEnabled
   public static List<ToDo> getToDosById() {
        String cntstr = 'SELECT Id, Name, CreatedDate, Done__c,Show__c FROM ToDo__c WHERE Show__c = true';// AND OwnerId=\''+userInfo.getUserId()+'\'';
     List<SObject> todos = Database.query(
       cntstr
     );
     return getToDos(todos);
   }

  //Wrap ToDo__c SObject into ToDo object
  public static List<ToDo> getToDos(List<SObject> objs) {
    List<ToDo> todos = new List<ToDo>();
    for (SObject obj : objs) {
      ToDo todo = new ToDo();
      todo.todoId = obj.Id;
      todo.todoName = String.valueOf(obj.get('Name'));
      todo.todoDate = Date.valueOf(obj.get('CreatedDate'));
      todo.done = Boolean.valueOf(obj.get('Done__c'));
      todo.show = Boolean.valueOf(obj.get('Show__c'));
      todos.add(todo);
    }

    return todos;
  }

  //Wrapper Class to represent a ToDo Item
  public class ToDo {
    @AuraEnabled
    public String todoId;
    @AuraEnabled
    public String todoName;
    @AuraEnabled
    public Date todoDate;
    @AuraEnabled
    public Boolean done;
    @AuraEnabled
    public Boolean show;
  }
}