import {
    accountQuery,
    accountingQuery,
    addonQuery,
    agentQuery,
    annualStatementQuery,
    apiKeyQuery,
    appHealthQuery,
    appInvoiceQuery,
    appRoleQuery,
    branchQuery,
    commentsQuery,
    commissionQuery,
    contractQuery,
    conversationQuery,
    conversationMessageQuery,
    correctionQuery,
    counterQuery,
    creditRatingQuery,
    dashboardQuery,
    depositAccountQuery,
    depositInsuranceQuery,
    eSigningQuery,
    evictionCaseQuery,
    fileQuery,
    finalSettlementQuery,
    productQuery,
    importQuery,
    integrationQuery,
    invoicePaymentQuery,
    invoiceQuery,
    invoiceSummaryQuery,
    lambdaSqsQuery,
    ledgerAccountQuery,
    listingQuery,
    logsQuery,
    netReceivedFileQuery,
    notificationQuery,
    notificationLogQuery,
    notificationTemplateQuery,
    partnerPayoutQuery,
    partnerQuery,
    partnerSettingQuery,
    partnerUsagesQuery,
    payoutQuery,
    payoutProcessQuery,
    phoneNumberQuery,
    powerOfficeLogQuery,
    propertyItemQuery,
    propertyQuery,
    propertyRoomItemQuery,
    propertyRoomQuery,
    queueQuery,
    rentSpecificationReportQuery,
    ruleQuery,
    settingQuery,
    taskQuery,
    taxCodeQuery,
    templateBlockItemQuery,
    tenantQuery,
    transactionQuery,
    upgradeScriptQuery,
    userQuery,
    userReportQuery,
    xledgerLogQuery
} from './queries'
import {
    accountMutation,
    accountingMutation,
    addonMutation,
    annualStatementMutation,
    apiKeyMutation,
    appHealthMutation,
    appRoleMutation,
    branchMutation,
    commentMutation,
    commissionMutation,
    contractMutation,
    conversationMutation,
    conversationMessageMutation,
    correctionMutation,
    cpiDataSetMutation,
    creditRatingMutation,
    depositAccountMutation,
    depositInsuranceMutation,
    eSigningMutation,
    evictionCaseMutation,
    fileMutation,
    finalSettlement,
    importMutation,
    integrationMutation,
    invoiceMutation,
    invoicePaymentMutation,
    lambdaSqsMutation,
    ledgerAccountMutation,
    listingMutation,
    netReceivedFileMutation,
    notificationLogMutation,
    notificationMutation,
    notificationTemplateMutation,
    outboundFileProcessingMutation,
    partnerMutation,
    partnerPayoutMutation,
    partnerSettingMutation,
    partnerUsageMutation,
    paymentMutation,
    payoutMutation,
    payoutProcessMutation,
    phoneNumberMutation,
    powerOfficeLogMutation,
    propertyItemMutation,
    propertyMutation,
    propertyRoomMutation,
    propertyRoomItemMutation,
    queueMutation,
    rentSpecificationReportMutation,
    ruleMutation,
    settingMutation,
    taskMutation,
    taxCodeMutation,
    tenantMutation,
    transactionMutation,
    upgradeScript,
    userMutation,
    productMutation,
    userReportMutation,
    xledgerLogMutation
} from './mutations'

export default {
    Query: {
        ...accountQuery,
        ...accountingQuery,
        ...addonQuery,
        ...agentQuery,
        ...annualStatementQuery,
        ...apiKeyQuery,
        ...appInvoiceQuery,
        ...appHealthQuery,
        ...appRoleQuery,
        ...branchQuery,
        ...commentsQuery,
        ...productQuery,
        ...commissionQuery,
        ...contractQuery,
        ...conversationQuery,
        ...conversationMessageQuery,
        ...counterQuery,
        ...correctionQuery,
        ...creditRatingQuery,
        ...dashboardQuery,
        ...depositAccountQuery,
        ...depositInsuranceQuery,
        ...eSigningQuery,
        ...evictionCaseQuery,
        ...fileQuery,
        ...finalSettlementQuery,
        ...importQuery,
        ...integrationQuery,
        ...invoicePaymentQuery,
        ...invoiceQuery,
        ...invoiceSummaryQuery,
        ...lambdaSqsQuery,
        ...ledgerAccountQuery,
        ...listingQuery,
        ...logsQuery,
        ...netReceivedFileQuery,
        ...notificationQuery,
        ...notificationLogQuery,
        ...notificationTemplateQuery,
        ...partnerPayoutQuery,
        ...partnerQuery,
        ...partnerSettingQuery,
        ...partnerUsagesQuery,
        ...payoutQuery,
        ...payoutProcessQuery,
        ...phoneNumberQuery,
        ...powerOfficeLogQuery,
        ...propertyItemQuery,
        ...propertyQuery,
        ...propertyRoomItemQuery,
        ...propertyRoomQuery,
        ...payoutQuery,
        ...queueQuery,
        ...rentSpecificationReportQuery,
        ...ruleQuery,
        ...settingQuery,
        ...taskQuery,
        ...taxCodeQuery,
        ...templateBlockItemQuery,
        ...tenantQuery,
        ...transactionQuery,
        ...upgradeScriptQuery,
        ...userQuery,
        ...userReportQuery,
        ...xledgerLogQuery
    },
    Mutation: {
        ...accountMutation,
        ...accountingMutation,
        ...addonMutation,
        ...annualStatementMutation,
        ...apiKeyMutation,
        ...appHealthMutation,
        ...appRoleMutation,
        ...branchMutation,
        ...commentMutation,
        ...commissionMutation,
        ...contractMutation,
        ...conversationMutation,
        ...conversationMessageMutation,
        ...correctionMutation,
        ...cpiDataSetMutation,
        ...creditRatingMutation,
        ...depositAccountMutation,
        ...depositInsuranceMutation,
        ...eSigningMutation,
        ...evictionCaseMutation,
        ...productMutation,
        ...fileMutation,
        ...finalSettlement,
        ...importMutation,
        ...integrationMutation,
        ...invoiceMutation,
        ...invoicePaymentMutation,
        ...lambdaSqsMutation,
        ...ledgerAccountMutation,
        ...listingMutation,
        ...netReceivedFileMutation,
        ...notificationLogMutation,
        ...notificationMutation,
        ...notificationTemplateMutation,
        ...outboundFileProcessingMutation,
        ...partnerPayoutMutation,
        ...partnerMutation,
        ...partnerSettingMutation,
        ...partnerUsageMutation,
        ...paymentMutation,
        ...payoutMutation,
        ...payoutProcessMutation,
        ...phoneNumberMutation,
        ...powerOfficeLogMutation,
        ...propertyItemMutation,
        ...propertyMutation,
        ...propertyRoomMutation,
        ...propertyRoomItemMutation,
        ...queueMutation,
        ...rentSpecificationReportMutation,
        ...ruleMutation,
        ...settingMutation,
        ...taskMutation,
        ...taxCodeMutation,
        ...tenantMutation,
        ...transactionMutation,
        ...upgradeScript,
        ...userMutation,
        ...userReportMutation,
        ...xledgerLogMutation
    }
}