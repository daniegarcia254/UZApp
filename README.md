# UZ Campus Web Map
**UZ Campus Web Map** is a web and mobile app for all students, professors, visitors, etc. of the University of Zaragoza ([Unizar](http://unizar.es/)). They will find it useful in order to locate and find information about campus buildings, transportation, services and other campus features.


# How to run the application

We will first install all the dependencies with the ***npm*** package manager:
```
npm install
```
In order to build *&&* run the application we will use ***gradle***:
```
gradle build
gradle run
```

We can also generate a ***war*** file and put it in an *Apache Tomcat Server*:
```
gradle build
gradle war
```

# How to configure the application for development

## The server side
We will use the same procedure described before:
```
gradle build
gradle run
```

## The web application side
We will use the ***Ionic Framework with Sass*** feature in order to have a more comfortable development.

First of all we have to setup Sass following the instructions on this link: [Ionic Framework - Using Sass](http://ionicframework.com/docs/cli/sass.html)

Once this is done, we will use the following command that will watch for changes in our application. Those changes will be applied immediately:
```
ionic serve
```

####Note:
The project also include the configuration project files for use *&&* and run the application (server side mainly) with IntelliJ IDEA: [UZapp.iml](UZapp.iml) so we can use the ***gradle*** comands directly in our project.
