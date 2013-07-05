﻿Type.registerNamespace('Mscrm'); Mscrm.EntityPropUtil = function () { }; Mscrm.EntityPropUtil.isActivityTypeCode = function (iObjectType) { switch (parseInt(iObjectType, 10)) { case 4406: case 4208: case 4209: case 4202: case 4210: case 4402: case 4214: case 4212: case 4207: case 4206: case 4401: case 4211: case 4201: case 4204: case 4251: case 4200: return true; default: return false; } }; Mscrm.EntityPropUtil.isQueueItemTypeCode = function (iObjectType) { switch (parseInt(iObjectType, 10)) { case 4210: case 4251: case 4207: case 4401: case 4402: case 4202: case 4212: case 4204: case 4201: case 112: case 4214: return true; default: return false; } }; Mscrm.EntityPropUtil.isImportableTypeCode = function (iObjectType) { switch (parseInt(iObjectType, 10)) { case 8: case 4503: case 1089: case 1083: case 1084: case 4009: case 4210: case 3234: case 9603: case 4211: case 1080: case 123: case 1090: case 1022: case 4208: case 9508: case 4251: case 2: case 4502: case 5: case 1091: case 10001: case 4207: case 1013: case 9502: case 1016: case 1070: case 1011: case 2020: case 2013: case 1071: case 127: case 4400: case 4: case 1024: case 4209: case 132: case 4401: case 4402: case 1026: case 4206: case 4202: case 1038: case 10: case 4212: case 9602: case 3: case 1055: case 2029: case 9: case 9600: case 4204: case 4201: case 1036: case 9105: case 4001: case 2011: case 129: case 1: case 112: case 1088: case 1085: case 1010: case 4300: case 4000: case 4214: return true; default: return false; } }; Mscrm.EntityPropUtil.EntityTypeName2CodeMap = { 'sdkmessagerequestfield': 4614, 'workflowlog': 4706, 'entitymap': 4600, 'subscriptionclients': 1072, 'picklistmapping': 4418, 'systemuser': 8, 'timezonerule': 4811, 'sdkmessage': 4606, 'monthlyfiscalcalendar': 2003, 'ownermapping': 4420, 'unresolvedaddress': 2012, 'ribboncommand': 1116, 'sdkmessageresponsefield': 4611, 'customeropportunityrole': 4503, 'import': 4410, 'post': 8000, 'calendarrule': 4004, 'salesorderdetail': 1089, 'opportunityproduct': 1083, 'integrationstatus': 3000, 'resource': 4002, 'ribbonrule': 1117, 'applicationfile': 4707, 'quote': 1084, 'kbarticlecomment': 1082, 'webwizard': 4800, 'site': 4009, 'phonecall': 4210, 'reportvisibility': 9103, 'userentityinstancedata': 2501, 'pluginassembly': 4605, 'ribbondiff': 1130, 'audit': 4567, 'ribboncustomization': 1120, 'connection': 3234, 'serviceendpoint': 4618, 'semiannualfiscalcalendar': 2001, 'publisheraddress': 7102, 'recurrencerule': 4250, 'principalobjectaccessreadsnapshot': 90, 'metric': 9603, 'quoteclose': 4211, 'reportentity': 9101, 'subscription': 29, 'privilegeobjecttypecodes': 31, 'discounttype': 1080, 'systemuserprincipals': 14, 'userform': 1031, 'documentindex': 126, 'activitymimeattachment': 1001, 'userqueryvisualization': 1112, 'columnmapping': 4417, 'fieldsecurityprofile': 1200, 'competitor': 123, 'bulkdeleteoperation': 4424, 'organizationui': 1021, 'notification': 4110, 'principalobjectattributeaccess': 44, 'invoice': 1090, 'importdata': 4413, 'pricelevel': 1022, 'competitoraddress': 1004, 'opportunityclose': 4208, 'reportcategory': 9102, 'privilege': 1023, 'quarterlyfiscalcalendar': 2002, 'postcomment': 8005, 'workflow': 4703, 'sharepointdocumentlocation': 9508, 'recurringappointmentmaster': 4251, 'plugintypestatistic': 4603, 'savedqueryvisualization': 1111, 'contact': 2, 'bulkoperationlog': 4405, 'constraintbasedgroup': 4007, 'customerrelationship': 4502, 'annotation': 5, 'invoicedetail': 1091, 'fdocs_fdocstemplate': 10001, 'dependencynode': 7106, 'duplicaterecord': 4415, 'letter': 4207, 'timezonedefinition': 4810, 'invaliddependency': 7107, 'discount': 1013, 'publisher': 7101, 'attributemap': 4601, 'sharepointsite': 9502, 'kbarticletemplate': 1016, 'salesliteratureitem': 1070, 'ribbontabtocommandmap': 1113, 'leadaddress': 1017, 'contractdetail': 1011, 'sdkmessageprocessingstep': 4608, 'queue': 2020, 'businessunitmap': 6, 'territory': 2013, 'interprocesslock': 4011, 'customeraddress': 1071, 'resourcespec': 4006, 'displaystringmap': 4101, 'kbarticle': 127, 'campaign': 4400, 'owner': 7, 'importfile': 4412, 'savedquery': 1039, 'lead': 4, 'solution': 7100, 'product': 1024, 'orderclose': 4209, 'resourcegroup': 4005, 'bulkoperation': 4406, 'usersettings': 150, 'license': 2027, 'subscriptionsyncinfo': 33, 'businessunitnewsarticle': 132, 'uomschedule': 1056, 'lookupmapping': 4419, 'postregarding': 8002, 'campaignresponse': 4401, 'clientupdate': 36, 'internaladdress': 1003, 'connectionrole': 3231, 'connectionroleobjecttypecode': 3233, 'salesprocessinstance': 32, 'filtertemplate': 30, 'resourcegroupexpansion': 4010, 'workflowwaitsubscription': 4702, 'reportlink': 9104, 'duplicaterulecondition': 4416, 'transformationparametermapping': 4427, 'annualfiscalcalendar': 2000, 'recordcountsnapshot': 91, 'report': 9100, 'campaignactivity': 4402, 'attachment': 1002, 'emailhash': 4023, 'importlog': 4423, 'dependency': 7105, 'wizardaccessprivilege': 4803, 'userentityuisettings': 2500, 'sdkmessagerequest': 4609, 'productpricelevel': 1026, 'incidentresolution': 4206, 'roletemplate': 1037, 'relationshiprolemap': 4501, 'webresource': 9333, 'duplicaterule': 4414, 'subscriptiontrackingdeletedobject': 35, 'email': 4202, 'importjob': 9107, 'salesliterature': 1038, 'sdkmessageprocessingstepimage': 4615, 'relationshiprole': 4500, 'businessunit': 10, 'fixedmonthlyfiscalcalendar': 2004, 'task': 4212, 'importentitymapping': 4428, 'timezonelocalizedname': 4812, 'replicationbacklog': 1140, 'goalrollupquery': 9602, 'plugintype': 4602, 'rollupfield': 9604, 'opportunity': 3, 'mailmergetemplate': 9106, 'uom': 1055, 'queueitem': 2029, 'template': 2010, 'userfiscalcalendar': 1086, 'team': 9, 'postfollow': 8003, 'calendar': 4003, 'importmap': 4411, 'goal': 9600, 'fax': 4204, 'wizardpage': 4802, 'appointment': 4201, 'sitemap': 4709, 'role': 1036, 'transactioncurrency': 9105, 'service': 4001, 'commitment': 4215, 'contracttemplate': 2011, 'subject': 129, 'processsession': 4710, 'account': 1, 'incident': 112, 'salesorder': 1088, 'userquery': 4230, 'ribboncontextgroup': 1115, 'postlike': 8006, 'quotedetail': 1085, 'principalattributeaccessmap': 43, 'fieldpermission': 1201, 'complexcontrol': 9650, 'sdkmessageresponse': 4610, 'organization': 1019, 'contract': 1010, 'sdkmessageprocessingstepsecureconfig': 4616, 'bulkdeletefailure': 4425, 'activitypointer': 4200, 'sdkmessagefilter': 4607, 'isvconfig': 4705, 'transformationmapping': 4426, 'organizationstatistic': 4708, 'asyncoperation': 4700, 'sdkmessagepair': 4613, 'list': 4300, 'workflowdependency': 4704, 'postrole': 8001, 'emailsearch': 4299, 'solutioncomponent': 7103, 'equipment': 4000, 'activityparty': 135, 'serviceappointment': 4214, 'systemform': 1030, 'displaystring': 4102 }; Mscrm.EntityPropUtil.registerClass('Mscrm.EntityPropUtil');