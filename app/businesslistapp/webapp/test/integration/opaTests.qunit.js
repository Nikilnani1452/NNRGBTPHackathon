sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'businesslistapp/test/integration/FirstJourney',
		'businesslistapp/test/integration/pages/Business_PartnerList',
		'businesslistapp/test/integration/pages/Business_PartnerObjectPage'
    ],
    function(JourneyRunner, opaJourney, Business_PartnerList, Business_PartnerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('businesslistapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusiness_PartnerList: Business_PartnerList,
					onTheBusiness_PartnerObjectPage: Business_PartnerObjectPage
                }
            },
            opaJourney.run
        );
    }
);