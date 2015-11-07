app.controller('XPController', ['$scope', function($scope){
    $scope.jobs = [
        {
            company: 'Kingspan',
            title: 'Software Development Intern',
            location: 'Kingscourt, Co. Cavan, Ireland',
            img: 'img/kingspan.jpg',
            url: 'http://www.kingspan.com/',
            startDate: new Date(2012, 00, 10),
            endDate: new Date(2012, 07, 24),
            description: [
                'Kingspan is a global leader in high performance insulation, building fabric, and solar integrated building envelopes.',
                'As part of third year I completed six months Industrial Placement. I was then offered a summer position working with SharePoint.',
                'My main job was to create internal websites for Kingspan. I was using C#, ASP.NET,HTML and SQL Server to create web pages and applications. For one of these websites, I created a CMS from scratch so that the page could be updated easily without changing the source code.'
            ]
        },
        {
            company: 'AirG',
            title: 'Software Engineer',
            location: '8-9 Westmoreland St, Dublin 2, Ireland',
            img: 'img/airg.png',
            url: 'http://corp.airg.com/',
            startDate: new Date(2013, 10, 01),
            endDate: 'Present',
            description: [
                'airG is a Canadian software company headquartered in Vancouver, British Columbia. Its products include telecom software, a social networking service designed for mobile use, and a suite of multiplayer mobile games and applications.',
                'My main job is to integrate our products and services with new carriers, and to make updates to existing products. Our core technology at AirG is Perl. Recently, we have started to use more Python.',
                'In addition to working on larger projects for a period of time, I am regularly workingwith our Business Solutions team to improve our services by implementing and sometimes designing new features.'
            ]
        }
    ];
}]);