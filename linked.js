// design two factories 
class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //appending an item 
    append(value){
        let newNode = new node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size ++;
    }
     // adding a value
    prepend(value){
        let newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
        if(!this.tail){
            this.tail = nextNode;
        }
        this.size ++;
    }
   at(index){
    if(index < 0 || index >= this.size){
     return null;
    }
    let currentNode = this.head;
    for(let i = 0; i< index; i++){
        currentNode = currentNode.next;
    }
    return currentNode;
   }

   //function to remove items
   pop(){
    if(!this.head){
        return null;
    }
    if(this.head === 1){
        const removeValue = this.head.value;
        this.head = null;
        this.tail = null;
        this.size --;
        return removedValue;
    }
    let currentNode = this.head;
    while(currentNode.next !== this.tail){
        currentNode = currentNode.next;
    }
    let removedValue = this.tail.values;
    currentNode.next = null;
    this.tail = currentNode;
    this.size--;
    return removedValue;
   }

   contain(value){
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.value === value){
            return true;
        }
        currentNode = currentNode.next
    }
    return false;
   }

   find(value){
    let currentNode = this.head;
    let index = 0;
    while(currentNode){
        if(currentNode.value === value){
            return index;
        }
        currentNode = currentNode.next;
        index++;
    }
    return null;
   }
   
   //stringfy the outPut now
   toString(){
    let result = "";
    let currentNode = this.head;
    while(currentNode){
        result += `${currentNode.value} -->`
        currentNode = currentNode.next;
    }
    result += null;
    return result;
   }
}

// calling the items now ;

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log(linkedList.toString());
console.log(linkedList.size);
console.log(linkedList.head.value);
console.log(linkedList.tail.value);
console.log(linkedList.at(1));
console.log(linkedList.contain(2));
console.log(linkedList.find(1));
console.log(linkedList.pop());
console.log(linkedList.toString());
console.log(linkedList.size);