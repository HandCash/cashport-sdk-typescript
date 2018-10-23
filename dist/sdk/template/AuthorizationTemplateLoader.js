"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_generator_es6_1 = require("qrcode-generator-es6");
var buttonTemplate = require('./button-cashport-login.html');
var qrContainerTemplate = require('./qr-cashport-login.html');
class AuthorizationTemplateLoader {
    load(componentId, uri) {
        let containerComponent = document.getElementById(componentId);
        if (!containerComponent) {
            throw new DOMException('Cannot find the element with id=' + componentId);
        }
        let rootComponent = AuthorizationTemplateLoader._getRootComponent();
        let buttonComponent = AuthorizationTemplateLoader._getButtonComponent();
        let qrContainerComponent = AuthorizationTemplateLoader._getQrContainerComponent();
        buttonComponent.addEventListener('click', (event) => {
            if (AuthorizationTemplateLoader._enableRedirect()) {
                setTimeout(function () {
                    buttonComponent.style.display = 'none';
                    qrContainerComponent.style.display = 'block';
                }, 250);
                document.location.href = uri + '&redirect_back=1';
            }
            else {
                buttonComponent.style.display = 'none';
                qrContainerComponent.style.display = 'block';
            }
        });
        containerComponent.appendChild(rootComponent);
        rootComponent.appendChild(buttonComponent);
        rootComponent.appendChild(qrContainerComponent);
        document.getElementById('open-handcash-link').setAttribute('href', uri);
        let qrComponent = document.getElementById('cashport-qr');
        if (qrComponent.hasChildNodes()) {
            qrComponent.removeChild(qrComponent.firstChild);
        }
        const qr = new qrcode_generator_es6_1.default(0, 'H');
        qr.addData(uri);
        qr.make();
        qrComponent.innerHTML = qr.createSvgTag({
            cellColor: (c, r) => {
                return '#38CB7C';
            }
        });
    }
    static _enableRedirect() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    static _getRootComponent() {
        let rootComponent = document.getElementById('cashport-root');
        if (!rootComponent) {
            rootComponent = document.createElement('div');
            rootComponent.id = 'cashport-root';
        }
        return rootComponent;
    }
    static _getButtonComponent() {
        let buttonComponent = document.getElementById('btn-cashport-login');
        if (!buttonComponent) {
            buttonComponent = AuthorizationTemplateLoader._createElementFromHTML(buttonTemplate);
        }
        buttonComponent.style.display = 'inline-block';
        return buttonComponent;
    }
    static _getQrContainerComponent() {
        let qrContainerComponent = document.getElementById('cashport-login-container');
        if (!qrContainerComponent) {
            qrContainerComponent = AuthorizationTemplateLoader._createElementFromHTML(qrContainerTemplate);
        }
        qrContainerComponent.style.display = 'none';
        return qrContainerComponent;
    }
    static _createElementFromHTML(htmlContent) {
        let div = document.createElement('div');
        div.innerHTML = htmlContent.trim();
        return div.firstChild;
    }
}
exports.AuthorizationTemplateLoader = AuthorizationTemplateLoader;
//# sourceMappingURL=AuthorizationTemplateLoader.js.map