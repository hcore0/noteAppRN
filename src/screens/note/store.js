import {EventEmitter} from 'events';

import {
  AsyncStorage
} from 'react-native';

class NoteStore extends EventEmitter {
    constructor(props) {
      super(props);
      this.notes = [];

      this.fetchList = this.fetchList.bind(this);
      this.getList = this.getList.bind(this);
      this.addNote = this.addNote.bind(this);
    }

    fetchList (page, cb) {
      if (page < 2) {
        this.notes = [];
      }
      return AsyncStorage.getItem('@noteAppRN:token')
        .then((token) => {
          return fetch('http://192.168.0.123:3000/api/note?page=' + page, {
            method: 'get',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          });
        })
        .then((response) => {
          return response.json();
        })
        .then((notes) => {
          this.notes = this.notes.concat(notes);
          cb();
        });
    }

    getList (page) {
        return this.notes;
    }

    addNote (note) {
        this.notes.unshift(note);
    }

}

export default new NoteStore();