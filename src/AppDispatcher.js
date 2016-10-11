import {Dispatcher} from 'flux';
import {noteActionTypes, noteAction} from './screens/note/action';
import NoteStore from './screens/note/store';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case noteActionTypes.NOTELIST:
            NoteStore.fetchList(action.page, () => {
                NoteStore.emit('change');
            });
            break;
        case noteActionTypes.ADDNOTE:
            NoteStore.addNote(action.note);
            NoteStore.emit('change');
            break;
        default:
            //no op
    }
});

export default AppDispatcher;