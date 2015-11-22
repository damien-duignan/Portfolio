app.controller('XPController', ['$scope', function($scope){
    $scope.jobs = [
        {
            company: 'airG',
            title: 'Full time',
            role: 'Integrations Engineer',
            location: 'Dublin, Ireland',
            img: 'img/airg.png',
            url: 'http://corp.airg.com/',
            startDate: new Date(2013, 10, 01),
            endDate: 'Present',
            description: [
                'airG is a Canadian software company headquartered in Vancouver, British Columbia. Its products include telecom software, a social networking service designed for mobile use, and a suite of multiplayer mobile games and applications.',
                'As part of the airG Ireland team, I am responsible for the integration and maintenance of our products and services across the EMEA region.',
                'The main priority is integrations. A typical integration would involve gathering requirements from our clients, design and planning stage, ' +
                'implementation, and lastly, end to end testing.',
                'In addition to working on larger integrations projects, I am regularly making changes to improve our services by implementing and sometimes designing new features.'
            ]
        },
        {
            company: 'Kingspan',
            title: 'Intern',
            role: 'Software Developer',
            location: 'Cavan, Ireland',
            img: 'img/kingspan.jpg',
            url: 'http://www.kingspan.com/',
            startDate: new Date(2012, 00, 10),
            endDate: new Date(2012, 05, 30),
            description: [
                'Kingspan is a global leader in high performance insulation, building fabric, and solar integrated building envelopes.',
                'My main responsibility was to create internal web applications for Kingspan. I was using C#, ASP.NET, HTML and SQL Server ' +
                'to create web pages and applications.',
                'For one of these websites, I created a Content Management System from scratch so that' +
                ' the page could be updated easily without changing the source code.'
            ]
        },
        {
            company: 'Kingspan',
            title: 'Summer Position',
            role: 'Software Developer',
            location: 'Cavan, Ireland',
            img: 'img/kingspan.jpg',
            url: 'http://www.kingspan.com/',
            startDate: new Date(2012, 06, 10),
            endDate: new Date(2012, 07, 24),
            description: [
                'Following the completion of my internship, I was offered a position for the summer.',
                'As part of a team of two, I was responsible for integrating SharePoint within Kingspan.',
                'My main responsibility was to create SharePoint web parts and deploy them according to the specifications I was given.'
            ]
        }
    ];
}]);