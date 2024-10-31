import MFS from './MFS'
import Constants from './Constants'
import Utils from './Utils'
import {
    CheckMasterPassFunction,
    DeleteCardFunction,
    DirectPurchaseFunction,
    GetLastTokenFunction,
    LinkCardToClientFunction,
    ListCardsFunction,
    PurchaseFunction,
    PurchaseAndRegisterFunction,
    RegisterFunction,
    ResendOtpFunction,
    SetAddressFunction,
    SetClientIdFunction,
    ValidateTransactionFunction,
} from './Types'

export default class MasterPass {
    // MasterPass Utils Methods
    public static Utils = Utils

    // MasterPass Constants
    public static Constants = Constants

    // Set Adress Method
    public static setAddress: SetAddressFunction = MFS.setAddress

    // Set Client Id Method
    public static setClientId: SetClientIdFunction = MFS.setClientId

    // Get Last Token Method
    public static getLastToken: GetLastTokenFunction = MFS.getLastToken

    // Check MasterPass Method
    public static checkMasterPass: CheckMasterPassFunction = async data =>
        new Promise((resolve, reject) => {
            MFS.checkMasterPass(data, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // List Cards Method
    public static listCards: ListCardsFunction = async (msisdn, token) =>
        new Promise((resolve, reject) => {
            MFS.listCards(msisdn, token, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Register Method
    public static register: RegisterFunction = async data =>
        new Promise((resolve, reject) => {
            const combined = {
                ...Constants.DefaultMethodData.register,
                ...data,
            }

            MFS.register(combined, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Validate Transaction Method
    public static validateTransaction: ValidateTransactionFunction = async data =>
        new Promise((resolve, reject) => {
            const combined = {
                ...Constants.DefaultMethodData.validateTransaction,
                ...data,
            }

            MFS.validateTransaction(combined, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Delete Card Method
    public static deleteCard: DeleteCardFunction = async data =>
        new Promise((resolve, reject) => {
            MFS.deleteCard(data, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Resend Otp Method
    public static resendOtp: ResendOtpFunction = async sendSMsLanguage =>
        new Promise((resolve, reject) => {
            const lastToken = MFS.getLastToken()

            MFS.resendOtp(lastToken, sendSMsLanguage, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Link Card To Client Method
    public static linkCardToClient: LinkCardToClientFunction = async data =>
        new Promise((resolve, reject) => {
            MFS.linkCardToClient(data, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Purchase Method
    public static purchase: PurchaseFunction = async data =>
        new Promise((resolve, reject) => {
            const combined = {
                ...Constants.DefaultMethodData.purchase,
                ...data,
            }

            MFS.purchase(combined, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Purchase And Register Method
    public static purchaseAndRegister: PurchaseAndRegisterFunction = async data =>
        new Promise((resolve, reject) => {
            MFS.purchaseAndRegister(data, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // Direct Purchase Method
    public static directPurchase: DirectPurchaseFunction = async data =>
        new Promise((resolve, reject) => {
            MFS.directPurchase(data, (status, response) => {
                return Utils.mfsResponseHandler(
                    status,
                    response,
                    resolve,
                    reject
                )
            })
        })

    // SetAdditionalParameters Method
    public static setAdditionalParameters = MFS.setAdditionalParameters

    public static rsaEncrypt: (data: string) => string = (data) => {
        var F = new MFS.RSAKey();
         F.setPublic('F619C53A37BAB059C583DA9AC4E2920FFC9D57E00885E82F7A0863DEAC43CE06374E45A1417DAC907C6CAC0AF1DDF1D7152192FED7A1D9255C97BC27E420E0742B95ED3C53C62995F42CB6EEDB7B1FBDD3E4F4A4AA935650DA81E763CA7074690032F6A6AF72802CC50394C2AFA5C9450A990E6F969A38571C8BC9E381125D2BEEC348AF919D7374FF10DC3E0B4367566CE929AD6EA323A475A677EB41C20B42D44E82E8A53DD52334D927394FCADF09', '03');
        return F.encrypt(data);
    }
}
