import { EventEmitter } from 'events';

class  Store extends EventEmitter {
    constructor(props){
        super(props)
        this.search = { tag: 'cat'}
    }

    getTag() {
        return this.search.tag;
    }

    setTag = (value) => {
        this.search.tag = value;
        this.emit("tagUpdate");
    }

}

const mainStore = new Store();

export default mainStore;