import React, {useEffect, cloneElement, Children} from 'react';
import {
    List, 
    Datagrid, 
    Filter, 
    EditButton, 
    ShowButton,
    TextInput, 
    TextField, 
    EmailField, 
    BooleanField, 
    ReferenceField, 
    ArrayField, 
    DateField, 
    SingleFieldList, 
    ChipField,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import MyUrlField from '../fields/MyUrlField';

const useStyles = makeStyles({
    test: {
        '& svg[data-testid="false"]': {
            color: 'red'
        },
        '& svg[data-testid="true"]': {
            color: 'green'
        }
    }
})

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Name" source="name" defaultValue="" />
        <TextInput label="Partner" source="partnerId" defaultValue="" />
        <TextInput label="Canary Offer" source="canaryOffer" defaultValue="" />
        <TextInput label="Carrier billable" source="carrierBillableOffer" defaultValue="" />
    </Filter>
);

const CustBool = props => {
    const classes = useStyles();
    return <BooleanField className={classes.test} {...props}/>
}


const usePostListActionToolbarStyles = makeStyles({
    toolbar: {
        alignItems: 'center',
        display: 'flex',
        marginTop: -1,
        marginBottom: -1,
    },
});

const PostListActionToolbar = ({ children, ...props }) => {
    const classes = usePostListActionToolbarStyles();
    return (
        <div className={classes.toolbar}>
            {Children.map(children, button => cloneElement(button, props))}
        </div>
    );
};

const OfferList = props => {
    useEffect(() => {
        // console.log({...props})
    })
    return (
        <List {...props} title="One Place Offers Admin" filters={<PostFilter/>}>
            <Datagrid>
                <TextField source="partnerId" />
                <TextField source="name"/>
                <TextField source="id" />
                <CustBool source="canaryOffer"/>
                <DateField source="publishStartDate" />
                <DateField source="publishEndDate" />
                {/* <DateField source="bonusEndDateTime" /> */}
                {/* <TextField source="channelTags" /> */}
                <CustBool source="carrierBillableOffer" label="Carrier billable" />
                <CustBool source = 'reuptakeAllowed'/>
                <PostListActionToolbar>
                    <EditButton />
                    <ShowButton />
                </PostListActionToolbar>
            </Datagrid>
        </List>
    );
}

export default OfferList;