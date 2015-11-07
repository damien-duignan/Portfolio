app.controller('SkillsController', ['$scope', 'skills', function($scope, skills){
    $scope.skills = [
        {
            name: 'Java',
            class: 'language',
            level: 6
        },
        {
            name: 'Python',
            class: 'language',
            level: 7
        },
        {
            name: 'Perl',
            class: 'language',
            level: 8
        },
        {
            name: 'JavaScript',
            class: 'language',
            level: 7
        },
        {
            name: 'CSS',
            class: 'frontend',
            level: 7
        },
        {
            name: 'Grunt',
            class: 'tool',
            level: 8
        },
        {
            name: 'Django',
            class: 'framework',
            level: 6
        },
        {
            name: 'ASP',
            class: 'framework',
            level: 3
        },
        {
            name: 'SASS',
            class: 'frontend',
            level: 7
        },
        {
            name: 'AngularJS',
            class: 'framework',
            level: 5
        },
        {
            name: 'Bootstrap',
            class: 'frontend',
            level: 6
        },
        {
            name: 'PHP',
            class: 'language',
            level: 5
        },
        {
            name: 'SQL',
            class: 'database',
            level: 8
        },
        {
            name: 'Jenkins',
            class: 'tool',
            level: 4
        },
        {
            name: 'NPM',
            class: 'tool',
            level: 6
        },
        {
            name: 'Redis',
            class: 'database',
            level: 5
        },
        {
            name: 'MongoDB',
            class: 'database',
            level: 5
        },
        {
            name: 'JIRA',
            class: 'tool',
            level: 9
        },
        {
            name: 'Git',
            class: 'tool',
            level: 7
        },
        {
            name: 'C#',
            class: 'language',
            level: 4
        },
        {
            name: 'HTML5',
            class: 'frontend',
            level: 8
        },
        {
            name: 'jQuery',
            class: 'frontend',
            level: 4
        },
        {
            name: 'Windows',
            class: 'os',
            level: 9
        },
        {
            name: 'Ubuntu',
            class: 'os',
            level: 8
        },
        {
            name: 'CentOS',
            class: 'os',
            level: 6
        },
        {
            name: 'JSON',
            class: 'database',
            level: 7
        },
    ];

    shuffleArray($scope.skills);
    $scope.skillsClass = getSkillCategory();

    $scope.addSkill = function(index){
        exists = 0;
        for(i=0; i<$scope.viewSkills.length; i++){
            if(index == $scope.viewSkills[i].index){
                exists = 1;
            }
        }
        if(!exists && $scope.viewSkills.length <15){
            $scope.viewSkills.push({
                index: index,
                name: $scope.skills[index].name,
                class: $scope.skills[index].class,
                level: $scope.skills[index].level,
                levelClass: $scope.skills[index].level,
            });
        }

        $("div").removeClass("fillBar");
    };

    $scope.viewSkills = [];



    $scope.displayType = function(type){
        $scope.viewSkills = [];
        for(index=0; index<$scope.skills.length; index++){
            if($scope.skills[index].class == type){
                $scope.addSkill(index);
            }
        }
        $scope.viewSkills = sortByKey($scope.viewSkills, 'level');
    };

    $scope.removeSkill = function(index){
        $scope.viewSkills.splice(index, 1);
    };

    $scope.expandSkill = function(index){
        if($scope.viewSkills[index].expanded != 1){
            $scope.viewSkills[index].levelClass = 10;
            $scope.viewSkills[index].expanded = 1;
        }
        else{
            $scope.viewSkills[index].levelClass = $scope.viewSkills[index].level;
            $scope.viewSkills[index].expanded = 0;
        }
        $scope.viewSkills[index].selectedIndex = index;
        $("div").removeClass("fillBar");
    };

    addDefaultSkills();

    function addDefaultSkills(){
        defaultSkills = ['Python', 'Django', 'Bootstrap', 'JavaScript', 'Perl', 'SQL', 'HTML5'];
        indices = getIndexByKey('name', defaultSkills);
        for(i=0;i<indices.length;i++){
            $scope.addSkill(indices[i]);
        }
        $scope.viewSkills = sortByKey($scope.viewSkills, 'level');
    }

    function getIndexByKey(key, keyArray){
        lookup = [];
        for(i=0; i<keyArray.length; i++){
            for(j=0;j<$scope.skills.length;j++){
                if($scope.skills[j][key] == keyArray[i]){
                    lookup.push(j);
                }
            }
        }
        return lookup;
    }

    function getSkillCategory(){
        lookup = []
        terminator = 0;
        while(terminator<$scope.skills.length){
            var found = lookup.some(function (sl) {
                return sl === $scope.skills[terminator].class;
            });
            if (!found) { lookup.push($scope.skills[terminator].class); }
            terminator++;
        }
        return lookup;
    }

}]);

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function shuffleArray(array) {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
