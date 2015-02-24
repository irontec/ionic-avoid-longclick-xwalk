# ionic-avoid-longclick-xwalk
ionic-avoid-longclick-xwalk is a dirt [AngularJS] directive, designed to work for [Ionic Framework] applications, running on [XWalk].

The main and only purpouse of the directive s to disable de copy & paste menu which happens to appear after a longclick event above an input field;

More Info:
  - http://stackoverflow.com/questions/15764311/how-to-disable-long-click-on-webview-in-android
  - http://stackoverflow.com/questions/11820708/disabling-text-selection-in-phonegap

### Usage
You need to register "avoid-longclick-xwalk" module on your application, and then just use on the main container of your input fields.
```html
<form class="css-form" novalidate avoid-long-click>
    <input type="text" ng-model="form.identifier" required />
    <input type="password" ng-model="form.identifier" required />
</form>
```
### Version
0.0.1

[Ionic Framework]:http://ionicframework.com/
[AngularJS]:http://angularjs.org
[XWalk]:https://crosswalk-project.org/

