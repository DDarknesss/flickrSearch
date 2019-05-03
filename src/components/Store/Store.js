import { EventEmitter } from 'events';

class  Store extends EventEmitter {
    constructor(props){
        super(props)
        this.search = { tag: 'dog'}
    }

    getTag() {
        return this.search.tag;
    }

    setTag = (value) => {
        this.search.tag = value;
        console.log(this.search.tag)
        this.emit("tagUpdate");
    }

}

const mainStore = new Store();

export default mainStore;