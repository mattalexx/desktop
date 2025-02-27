import { Component } from '@angular/core';

import { ApiService } from 'jslib-common/abstractions/api.service';
import { CryptoService } from 'jslib-common/abstractions/crypto.service';
import { I18nService } from 'jslib-common/abstractions/i18n.service';
import { MessagingService } from 'jslib-common/abstractions/messaging.service';
import { PasswordGenerationService } from 'jslib-common/abstractions/passwordGeneration.service';
import { PlatformUtilsService } from 'jslib-common/abstractions/platformUtils.service';
import { PolicyService } from 'jslib-common/abstractions/policy.service';
import { UserService } from 'jslib-common/abstractions/user.service';

import { UpdateTempPasswordComponent as BaseUpdateTempPasswordComponent } from 'jslib-angular/components/update-temp-password.component';

interface MasterPasswordScore {
    Color: string;
    Text: string;
    Width: number;
}

@Component({
    selector: 'app-update-temp-password',
    templateUrl: 'update-temp-password.component.html',
})

export class UpdateTempPasswordComponent extends BaseUpdateTempPasswordComponent {
    get masterPasswordScoreStyle(): MasterPasswordScore {
        const scoreWidth = this.masterPasswordScore == null ? 0 : (this.masterPasswordScore + 1) * 20;
        switch (this.masterPasswordScore) {
            case 4:
                return {
                    Color: 'bg-success',
                    Text: 'strong',
                    Width: scoreWidth,
                };
            case 3:
                return {
                    Color: 'bg-primary',
                    Text: 'good',
                    Width: scoreWidth,
                };
            case 2:
                return {
                    Color: 'bg-warning',
                    Text: 'weak',
                    Width: scoreWidth,
                };
            default:
                return {
                    Color: 'bg-danger',
                    Text: 'weak',
                    Width: scoreWidth,
                };
        }
    }
    constructor(i18nService: I18nService, platformUtilsService: PlatformUtilsService,
        passwordGenerationService: PasswordGenerationService, policyService: PolicyService,
        cryptoService: CryptoService, userService: UserService,
        messagingService: MessagingService, apiService: ApiService) {
        super(i18nService, platformUtilsService, passwordGenerationService, policyService, cryptoService,
            userService, messagingService, apiService);
    }
}
