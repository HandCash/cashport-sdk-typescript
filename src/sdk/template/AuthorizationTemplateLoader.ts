//import {ecLevel, modes, qrcode} from '@rjseibane/qrcode/src';
import qrcode from 'qrcode-generator-es6';

var buttonTemplate = require('./button-cashport-login.html');
var qrContainerTemplate = require('./qr-cashport-login.html');

export class AuthorizationTemplateLoader {

    public load(componentId: string, uri: string): void {
        let containerComponent = document.getElementById(componentId);
        if (!containerComponent) {
            throw new DOMException('Cannot find the element with id=' + componentId);
        }
        let rootComponent = AuthorizationTemplateLoader._getRootComponent();
        let buttonComponent = AuthorizationTemplateLoader._getButtonComponent();
        let qrContainerComponent = AuthorizationTemplateLoader._getQrContainerComponent();
        buttonComponent.addEventListener('click', (event) => {
            setTimeout(function () {
                buttonComponent.style.display = 'none';
                qrContainerComponent.style.display = 'block';
            }, 350);
            document.location.href = uri + '&redirect_back=1';
        });
        containerComponent.appendChild(rootComponent);
        rootComponent.appendChild(buttonComponent);
        rootComponent.appendChild(qrContainerComponent);
        let qrComponent = document.getElementById('cashport-qr');
        if (qrComponent.hasChildNodes()) {
            qrComponent.removeChild(qrComponent.firstChild);
        }
        const qr = new qrcode(0, 'H');
        qr.addData(uri);
        qr.make();
        qrComponent.innerHTML = qr.createSvgTag({
            cellColor: (c, r) => {
                return '#38CB7C'
            }
        });
    }

    private static _getRootComponent(): HTMLElement {
        let rootComponent = document.getElementById('cashport-root');
        if (!rootComponent) {
            rootComponent = document.createElement('div');
            rootComponent.id = 'cashport-root';
        }
        return rootComponent;
    }

    private static _getButtonComponent(): HTMLElement {
        let buttonComponent = document.getElementById('btn-cashport-login');
        if (!buttonComponent) {
            buttonComponent = AuthorizationTemplateLoader._createElementFromHTML(buttonTemplate);
        }
        buttonComponent.style.display = 'inline-block';
        return buttonComponent;
    }

    private static _getQrContainerComponent(): HTMLElement {
        let qrContainerComponent = document.getElementById('cashport-login-container');
        if (!qrContainerComponent) {
            qrContainerComponent = AuthorizationTemplateLoader._createElementFromHTML(qrContainerTemplate);
        }
        qrContainerComponent.style.display = 'none';
        return qrContainerComponent;
    }

    private static _createElementFromHTML(htmlContent: string) {
        let div = document.createElement('div');
        div.innerHTML = htmlContent.trim();
        return div.firstChild as HTMLElement;
    }

}