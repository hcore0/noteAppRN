import React, {Component} from 'react';
import {ListView, Text, View, RefreshControl} from 'react-native';

import NoteListItem from './NoteListItem';
import NoteViewScreen from './NoteViewScreen';

import {noteAction} from './action';
import NoteStore from './store';

export default class NoteListScreen extends Component {
    constructor(props) {
        super(props);

        this.page = 1;
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1._id !== r2._id});

        this._onChange = this._onChange.bind(this);
        
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isRefreshing: false
        };

        noteAction.noteList(this.page);
    }

    _onChange () {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1._id !== r2._id
        });
        this.setState({
            dataSource: ds.cloneWithRows(NoteStore.getList()),
            isRefreshing: false
        });
    }

    componentDidMount () {
        NoteStore.addListener('change', this._onChange);
    }

    componentWillUnmount () {
        NoteStore.removeListener('change', this._onChange);
    }

    render () {
        return (
            <ListView
                dataSource={this.state.dataSource} 
                initialListSize={10}
                renderRow={(rowData) => <NoteListItem itemData={rowData} onPress={() => {
                        this.props.tabNavigator.push({
                            screen: NoteViewScreen,
                            title: '详细',
                            params: {
                                note: rowData
                            }
                        });
                    }}
                    tabNavigator={this.props.tabNavigator}/>}
                onEndReachedThreshold={10}
                onEndReached={() => {
                    if (this.state.dataSource.getRowCount() > 9) {
                        this._nextPage();
                    }
                }}
                showsVerticalScrollIndicator={false}
                enableEmptySections={true}

                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['#ff0000']}
                    />
                }
            />
        )
    }

    _nextPage () {
        this.page++;
        noteAction.noteList(this.page);
    }

    _onRefresh () {
        this.setState({
            isRefreshing: true
        });
        this.page = 1;
        noteAction.noteList(this.page);
    }
}