/**************************************************************************
 * TopCtrl: Controlador encargado de redirigir la aplicaci�n a la pantalla
 *          de splash en caso de refresco de p�gina
 ***********************************************************************/

UZCampusWebMapApp.controller('TopCtrl', function($location){
        $location.path("/");
    });