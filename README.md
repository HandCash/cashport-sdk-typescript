# Cashport SDK - Typescript
A Typescript SDK to integrate CashPort in your apps. https://cashport.io

# Installing
Include the dependency in your project:
```javascript
npm install cashport-sdk --save
```

# Getting Started
This section contains all the steps required to integrate *Cashport* in your app.

## 1. Get the API Credentials.

Go to https://cashport.io/developers and apply for the *API Credentials*. 

In the meanwhile you can use this `API_ID` to start developing.
 
`L77MZzEO72ZZSrRg58ysiGvveqFe51rK9lMDXKILD6YJf4lNibacSUx0xr979duv`

> Remember this are just temporal credentials.

## 2. Create an Authorization Request

First of all, you have to include an html element where Cashport will build the custom components:

```html
<div id="cashport-container"></div>
```

Some basic imports and initializations: 

```typescript
import {
    AuthorizationRequest,
    Cashport,
    GrantedAuthorization,
    PaymentRequestFactory,
    PersonalInfoPermission,
    SignTransactionRequestBuilder
} from 'cashport-sdk';

const appId = 'your-app-id';
let cashport: Cashport = new Cashport();
```

Then you can enable the Cashport login:

```typescript
let cashport = new Cashport();
let permissions = [PersonalInfoPermission.HANDLE, PersonalInfoPermission.FIRST_NAME, PersonalInfoPermission.LAST_NAME, PersonalInfoPermission.EMAIL];
let authRequest = new AuthorizationRequest(permissions, appId);
cashport.loadAuthorizationRequest('cashport-container', authRequest, {
    onDeny: () => {
        // Authorization not granted :(
    },
    onSuccess: (authorization) => {
        let authToken = authorization.authToken;
        let expirationTimestamp = authorization.expirationTimestamp;
        let channelId = authorization.channelId;
        let spendLimitInSatoshis = authorization.spendLimitInSatoshis;
        
        let personalInfo = authorization.personalInfo;
        let handle = personalInfo.handle;
        let firstName = personalInfo.firstName;
        let lastName = personalInfo.lastName;
        let email = personalInfo.email;
    }
});
```

Now the login button it's ready. So when the user clicks the button, the process can be perform in two different ways:
1. If the user **has HandCash installed** in the same device, the app will be launched with the *Authorization Request*.
2. If the device **does not have HandCash installed**, will display a QR code to be scanned by HandCash.

In any case, you will get the *Granted Authorization* in the callback.


## 3. Create a Sign Transaction Request
Once the authorization is granted you have all what you need to perform automatic payment requests, in addition to the personal information.

Let's see how to tip to a $handle.

This is the code you need to create a *Sign Transaction Request* and handle the response. 

```typescript
function sendPayToHandlePaymentRequest(handle: string): void {
    let request = SignTransactionRequestBuilder.useApiId(appId)
        .withCredentials(grantedAuthorization.personalInfo.handle, grantedAuthorization.authToken, grantedAuthorization.channelId)
        .addPayment(PaymentRequestFactory.create().getPayToHandle(handle, 2500))
        .build();
    cashport.sendSignTransactionRequest(request, {
        onStart: () => {
            // Sending request...
        },
        onEnd: () => {
            // The request is done.
        },
        onSuccess: (requestId, transactionId) => {
            // Well done!
        },
        onAuthorizedFundsLimitReached: (requestId) => {
            // Authorized funds limit reached";
        },
        onDeviceNotAvailable: () => {
            // Device not available. The user should check his device connection.
        },
        onInsufficientWalletFunds: (requestId) => {
            // Insufficient funds.
        },
        onTokenExpired: (requestId) => {
            // Token expired. Time to login again.
        },
        onNotAuthorized: (requestId) => {
            // Not authorized, what are you doing?
        },
        onInternalWalletError: (requestId) => {
            // Internal wallet error :(
        },
        onBadRequest: (message: string, errorCode: number) => {
            // Bad request. WTF are your doing!?
        },
        onAPICallError: (message: string) => {
            // API Call error. We did something wrong :$
        }
    });
}
```

**✅ Congrats, you have completed your first authorized transaction!**

# Demo

Try the demo at [try.cashport.io](https://try.cashport.io)

# Next
- Build your first app and start to disrupt your industry! 
- More docs coming soon!

```python
#BringTheOasis
```

# License
MIT License

Copyright (c) 2018 HandCash

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.