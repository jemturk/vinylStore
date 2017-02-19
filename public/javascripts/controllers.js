angular.module('vinylApp')
    .controller('VinylCtrl', function ($firebaseObject) {
        const rootRef = firebase.database().ref();
        const ref = rootRef.child('records');
        this.object = $firebaseObject(ref);
    });
