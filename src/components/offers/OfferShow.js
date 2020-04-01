import React, {useEffect} from 'react';
import {
    Show, 
    SimpleShowLayout,
    Datagrid, 
    Filter, 
    EditButton, 
    ShowButton,
    NumberField, 
    TextField, 
    EmailField, 
    BooleanField, 
    ReferenceField, 
    ArrayField, 
    DateField, 
    SingleFieldList, 
    ChipField,
    UrlField
} from 'react-admin';

const OfferShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="externalId"/>
            <TextField source="partnerId"/>
            <TextField source="name" />
            <NumberField source="recurringCharge" />
            <NumberField source="oneOffCharge" />
            <NumberField source="contractTerm" />
            <NumberField source="totalPrice" />
            <DateField source="publishStartDate" />
            <DateField source="publishEndDate" />
            <DateField source="bonusEndDateTime" />
            <TextField source="channelTags" />
            <BooleanField source="reuptakeAllowed" />
            <BooleanField source="canaryOffer" />
            <BooleanField source="serviceTransferAllowed" />
            <BooleanField source="carrierBillableOffer" />
            <NumberField source="bonusPeriod" />
        </SimpleShowLayout>
    </Show>
);

export default OfferShow;