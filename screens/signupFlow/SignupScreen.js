import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'

import {Context as SignupContext} from 'context/SignupContext'

import AccountTypeScreen from './AccountTypeScreen'
import CompanyEntryScreen from './CompanyEntryScreen'
import CompanyAddressEntryScreen from './CompanyAddressEntryScreen'
import CredentialEntryScreen from './CredentialEntryScreen'

const SignupScreen = ({navigation}) => {
    const {state, clearErrorMessage} = useContext(SignupContext)

    return (
        < View
    style = {styles.container} >
        < NavigationEvents
    onWillBlur = {clearErrorMessage}
    />
    {
        state.step === 'accountType' && < AccountTypeScreen / >
    }
    {
        state.step === 'companyDetailEntry' && < CompanyEntryScreen / >
    }
    {
        state.step === 'companyAddressEntry' && < CompanyAddressEntryScreen / >
    }
    {
        state.step === 'credentialEntry' && < CredentialEntryScreen / >
    }
<
    /View>
)
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

router.get('/checkout_return', (req, res, next) => {
    const db = req.app.db;
    const config = req.app.config;
    const paymentId = req.session.paymentId;
    const payerId = req.query.PayerID;

    const details = { payer_id: payerId };
    paypal.payment.execute(paymentId, details, (error, payment) => {
        let paymentApproved = false;
        let paymentMessage = '';
        let paymentDetails = '';
        if(error){
            paymentApproved = false;

            if(error.response.name === 'PAYMENT_ALREADY_DONE'){
                paymentApproved = false;
                paymentMessage = error.response.message;
            }else{
                paymentApproved = false;
                paymentDetails = error.response.error_description;
            }

            // set the error
            req.session.messageType = 'danger';
            req.session.message = error.response.error_description;
            req.session.paymentApproved = paymentApproved;
            req.session.paymentDetails = paymentDetails;

            res.redirect('/payment/' + req.session.orderId);
            return;
        }

        const paymentOrderId = req.session.orderId;
        let paymentStatus = 'Approved';

        // fully approved
        if(payment.state === 'approved'){
            paymentApproved = true;
            paymentStatus = 'Paid';
            paymentMessage = 'Your payment was successfully completed';
            paymentDetails = '<p><strong>Order ID: </strong>' + paymentOrderId + '</p><p><strong>Transaction ID: </strong>' + payment.id + '</p>';

            // clear the cart
            if(req.session.cart){
                common.emptyCart(req, res, 'function');
            }
        }

        // failed
        if(payment.failureReason){
            paymentApproved = false;
            paymentMessage = 'Your payment failed - ' + payment.failureReason;
            paymentStatus = 'Declined';
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SignupScreen
