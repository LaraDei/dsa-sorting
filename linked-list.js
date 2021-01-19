'use strict';

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class MyLinkedList {
    constructor(){
        this.head = null
    }

    insertFirst = item => {
        this.head = new _Node(item, this.head)
    }

    insertLast(item){
        if (this.head === null){
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null){
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head
        if (!this.head){
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next == null){
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        return currNode
    }

    remove(item){
        if (!this.head){
            return null
        }
        if (this.head.value === item){
            this.head = this.head.next
            return
        }
        let currNode = this.head
        let previousNode = this.head
        while ((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
    insertBefore(item, beforeItem){
        if (!this.head) {
            return null;
        }
        if (this.head === null){
            this.insertFirst(item)
        }
        if (this.head.value === beforeItem) {
            this.insertFirst(item)
        }
        else {
            let currentNode = this.head;
            let previousNode = this.head;
            while (currentNode.value  !== beforeItem && currentNode !== null){
                previousNode= currentNode
                currentNode = currentNode.next
            }
            previousNode.next = new _Node(item, currentNode)
        }
    }
    insertAfter(item, afterItem){
        if (!this.head) {
            return null;
        }
        if (this.head === null){
            this.insertFirst(item)
            return;
        }
        let tempNode = this.head
        while (tempNode.value  !== afterItem && tempNode.next !== null){
            tempNode = tempNode.next
        }
        let nexItem = tempNode.next
        tempNode.next = new _Node(item, nexItem)
    }
    
    insertAt(item, position){
        if (!this.head) {
            return null;
        }
        if (this.head === null){
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            let previousNode = this.head
            let index = 0;
            let next = ""
            while (tempNode.next !== null && position !== index) {
                previousNode = tempNode;
                tempNode = tempNode.next;
                index++;
            }
            previousNode.next = new _Node(item, tempNode)
          }
    }

}

module.exports = MyLinkedList