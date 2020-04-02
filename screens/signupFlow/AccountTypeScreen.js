import React, {useContext, useState} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import get from 'lodash/get'

import {Context as SignupContext} from 'context/SignupContext'
// import NavLink from 'components/NavLink'
import NavLink from 'components/NavLink'

const AccountTypeScreen = ({navigation}) => {
    const {saveAccountType, clearErrorMessage} = useContext(SignupContext)

    return (
        < View
    style = {styles.container} >
        < NavigationEvents
    onWillBlur = {clearErrorMessage}
    />
    < TouchableOpacity
    style = {styles.area}
    onPress = {()
=>
    saveAccountType('company')
}>
<
    Text
    h3
    style = {styles.text} > We
    are
    a
    company < /Text>
    < /TouchableOpacity>
    < TouchableOpacity
    style = {styles.area}
    onPress = {()
=>
    saveAccountType('hero')
}>
<
    Text
    h3
    style = {styles.text} > I
    want
    to
    work
    a
    delivery
    hero < /Text>
    < /TouchableOpacity>
    < NavLink
    text = "< Go Back"
    routeName = "Intro"
        / >
        < /View>
)
}

AccountTypeScreen.navigationOptions = () => {
    return {
        header: null
    }
}

// The homepage of the site
router.post('/checkout_action', async (req, res, next) => {
    const db = req.app.db;
    const config = req.app.config;
    const paymentConfig = common.getPaymentConfig();

    // Create the payload
    const payload = {
        singleUseTokenId: req.body.singleUseTokenId,
        customerNumber: randtoken.generate(20),
        transactionType: 'payment',
        principalAmount: numeral(req.session.totalCartAmount).format('0.00'),
        currency: 'aud',
        merchantId: paymentConfig.merchantId
    };

    // Check for single use token
    if(!req.body.singleUseTokenId || req.body.singleUseTokenId === ''){
        console.info('Either null or no single use token', req.body);
        req.session.messageType = 'danger';
        req.session.message = 'Your payment has failed. Please try again';
        req.session.paymentApproved = false;
        req.session.paymentDetails = '';
        res.redirect('/checkout/payment');
        return;
    }

    try{
        let txn = await got.post('https://api.payway.com.au/rest/v1/transactions', {
            username: paymentConfig.apiKey,
            form: payload,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        });

        // Parse the response
        txn = JSON.parse(txn.body);

        // order status if approved
        let orderStatus = 'Paid';
        if(txn && txn.status === 'declined'){
            console.log('Declined response payload', txn);
            orderStatus = 'Declined';
        }

        const orderDoc = {
            orderPaymentId: txn.transactionId.toString(),
            orderPaymentGateway: 'PayWay',
            orderPaymentMessage: `${txn.responseCode} - ${txn.responseText}`,
            orderTotal: req.session.totalCartAmount,
            orderShipping: req.session.totalCartShipping,
            orderItemCount: req.session.totalCartItems,
            orderProductCount: req.session.totalCartProducts,
            orderCustomer: common.getId(req.session.customerId),
            orderEmail: req.session.customerEmail,
            orderCompany: req.session.customerCompany,
            orderFirstname: req.session.customerFirstname,
            orderLastname: req.session.customerLastname,
            orderAddr1: req.session.customerAddress1,
            orderAddr2: req.session.customerAddress2,
            orderCountry: req.session.customerCountry,
            orderState: req.session.customerState,
            orderPostcode: req.session.customerPostcode,
            orderPhoneNumber: req.session.customerPhone,
            orderComment: req.session.orderComment,
            orderStatus: orderStatus,
            orderDate: new Date(),
            orderProducts: req.session.cart,
            orderType: 'Single'
        };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding: 20,
    },
    area: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 100,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: 'blue',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default AccountTypeScreen
