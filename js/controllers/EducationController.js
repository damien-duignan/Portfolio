app.controller('EducationController', ['$scope', function($scope){
    $scope.schools = [
        {
            school: 'Athlone IT',
            course: 'Bsc (Hons) Software Design (Games Development)',
            role: 'Software Developer',
            location: 'Westmeath, Ireland',
            startDate: new Date(2009, 09, 00),
            endDate: new Date(2013, 05, 00),
            description: [
                'I chose this course because of my interest in gaming and technology. The course was primarily core Software Development modules with a specialised focus on games development.',
                'The course focused on Java as our introduction to programming, but as we advanced, we were introduced to PHP, Python, JavaScript.',
                'We were introduced to best practices in programming - OOP, Software Testing, Requirements Specifications and Project Management.',
                ''
            ]
        },
        {
            school: 'Carrigallen V.S.',
            course: 'Leaving Certificate',
            role: 'Software Developer',
            location: 'Leitrim, Ireland',
            startDate: new Date(2003, 09, 00),
            endDate: new Date(2009, 05, 00),
            description: [
                'During my time in secondary school, I took an interest in more technical' +
                ' and practical subjects. I enjoyed Maths, Engineering, Design & Communication ' +
                'Graphics, and Physics.'
            ]
        }
    ];
}]);