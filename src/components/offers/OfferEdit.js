import React, { useEffect } from 'react';
import {
    Edit, 
    Datagrid, 
    Filter, 
    EditButton, 
    TextInput, 
    TextField, 
    EmailField, 
    BooleanField, 
    ReferenceField, 
    ArrayField, 
    DateField, 
    SingleFieldList, 
    ChipField,
    SelectInput,
    NumberInput,
    SimpleFormIterator,
    DateInput,
    ArrayInput,
    SimpleForm,
    BooleanInput,
    ReferenceInput,
    required
} from 'react-admin';

import { Box, Card, CardContent, Typography } from '@material-ui/core';

export const OfferEdit = props => (
    <Edit {...props}>
        
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="externalId" />
            <TextInput source="name" validate={required()}/>
            <TextInput source="offerType" />
            <NumberInput source="recurringCharge" />
            <NumberInput source="oneOffCharge" />
            <NumberInput source="contractTerm" />
            <NumberInput source="totalPrice" />
            <NumberInput source="bonusPeriod" />
            <DateInput source="publishStartDate" />
            <DateInput source="publishEndDate" />
            <DateInput source="bonusEndDateTime" />
            <TextInput source="channelTags" />
            <TextInput source="website" />
            <TextInput source="url" />
            <BooleanInput source="reuptakeAllowed" />
            <BooleanInput source="canaryOffer" />
            <BooleanInput source="serviceTransferAllowed" />
            <BooleanInput source="carrierBillableOffer" />
            
        </SimpleForm>
    </Edit>
);
export default OfferEdit;