import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '../../components';

const useStyle = makeStyles({
    root: {
        marginTop: 65,
        width: 400,
        margin: '0 auto'
    },
    expand: {
        marginLeft: 240,
        marginTop: 65
    },
    padding: {
        padding: 16
    }
});

const CreateUser = props => {
    const { open, handleSubmit, addUser, users, initialize } = props;
    console.log(props);
    const classes = useStyle();

    React.useEffect(() => {
        initialize(users);
    }, [users])

    const renderUser = () => {
        return users.map((value, index)=> {
            const prefixName = `[${index}]`;
            return (
                <Grid container key={ index } spacing={ 2 }>
                    <Grid item lg={ 12 }>
                        <label>First Name</label>
                        <Field name={`${prefixName}.a.firstName`} component="input" />
                    </Grid>
    
                    <Grid item lg={ 12 }>
                        <label>Last Name</label>
                        <Field name={`${prefixName}.lastName`} component="input" />
                    </Grid>
    
                    <Grid item lg={ 12 }>
                        <label>Email</label>
                        <Field name={`${prefixName}.email`} component="input" />
                    </Grid>
                    
                    <Divider />
                </Grid>
            );
        });
    }
    
    return (
        <form onSubmit={ handleSubmit } className={ Clsx(classes.padding, open ? classes.expand : classes.root) }>
            { renderUser() }
            <Grid item lg={ 12 }>
                <Button onClick={ addUser } >Add New User</Button>
                    <Button type="submit" >Submit</Button>
            </Grid>
        </form>
    )
}

CreateUser.propTypes = {
    open: PropTypes.bool.isRequire,
    handleSubmit: PropTypes.bool.isRequire,
    addUser: PropTypes.bool.isRequire,
    initialValues: PropTypes.bool.isRequire,
    initialize: PropTypes.bool.isRequire
}

CreateUser.defaultProps = {}

export default reduxForm({
    form: 'demo',
    enableReinitialize: true
})(CreateUser);