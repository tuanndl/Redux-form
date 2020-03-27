import React from 'react';
import { Provider } from 'react-redux';
import { Header } from './components';
import { store } from './store';
import { CreateUser } from './modules';

const USERS = [
    {
        a: {
            firstName: "tuan nguyen"
        },
        email: "123@gmail.com"
    },
    {
        a: {
            firstName: "tuan nguyen 1212    "
        },
        email: "123456@gmail.com"
    }
]

function App() {

    const [ open, setOpen ] = React.useState(false);
    const [ users, setUsers ] = React.useState(USERS);

    const addUser = () => {
        const temp = [ ...users ];
        temp.push({});
        setUsers(temp);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const showResults = values => {
        console.log(values)
    }

    return (
        <Provider store={ store }>
            <Header open={ open } handleDrawerOpen={ handleDrawerOpen } handleDrawerClose={ handleDrawerClose } />

            <CreateUser users={ users } onSubmit={ showResults } open={ open } addUser={ addUser } />
        </Provider>
    );
}

export default App;
