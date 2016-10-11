import AppDispatcher from '../../AppDispatcher';

export var noteAction =  {
    noteList: function (page) {
        AppDispatcher.dispatch({
            actionType: noteActionTypes.NOTELIST,
            page: page
        });
    },
    addNote: function (note) {
        AppDispatcher.dispatch({
            actionType: noteActionTypes.ADDNOTE,
            note: note
        });
    }
};

export const noteActionTypes = {
    NOTELIST: 'NOTELIST',
    ADDNOTE: 'ADDNOTE'
};