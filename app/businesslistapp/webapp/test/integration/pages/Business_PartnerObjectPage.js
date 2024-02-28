sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'businesslistapp',
            componentId: 'Business_PartnerObjectPage',
            contextPath: '/Business_Partner'
        },
        CustomPageDefinitions
    );
});