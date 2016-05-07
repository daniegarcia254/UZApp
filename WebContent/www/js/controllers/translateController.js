/**************************************************************************
 * TopCtrl: Controlador encargado de la traducci�n de la aplicaci�n
 ***********************************************************************/

UZCampusWebMapApp.controller('TranslationCtrl',['$scope', 'translationService', 'sharedProperties',
        function ($scope, translationService, sharedProperties){

            //Run translation if selected language changes
            $scope.translate = function(){
                translationService.getTranslation($scope, $scope.selectedLanguage);
            };

            $scope.changeLanguage = function (langKey) {
                console.log(langKey);
                $scope.selectedLanguage = langKey;
                $scope.translate();
                sharedProperties.setMapa(undefined);//Por si hay cambio de idioma, que se repinte el mapa en ingl�s si ya se habia visitado
            };

            //Init
            $scope.selectedLanguage = 'es';
            $scope.translate();
        }
    ]);