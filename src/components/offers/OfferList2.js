import React, {useEffect} from 'react';
import { List, Datagrid, Filter, EditButton, TextInput, TextField, EmailField, BooleanField, ReferenceField, ArrayField, DateField, SingleFieldList, ChipField} from 'react-admin';
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
        <TextInput label="Title" source="title" defaultValue="Hello, World!" />
    </Filter>
);

const CustBool = props => {
    const classes = useStyles();
    return <BooleanField className={classes.test} {...props}/>
}

export const OfferList2 = props => {
    useEffect(() => {
        console.log({...props})
    })
    return (
        <List {...props} title="List of Offers" filters={<PostFilter/>}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="externalId" reference="externals"/>
                <TextField source="name" />
                <CustBool source = 'reuptakeAllowed'/>
                <DateField source="publishStartDate" />
                <DateField source="publishEndDate" />
                <DateField source="bonusEndDateTime" />
                {/* <TextField source="channelTags" /> */}
                <CustBool source="carrierBillableOffer" />
                <EditButton />
            </Datagrid>
        </List>
    );
}