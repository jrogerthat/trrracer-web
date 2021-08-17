export let UserSingleton = (function () {

    let instance;

    function create() {
        let _state;
        let _user;
        let _isSignedIn = false;
        let _folderName = "159mYuPKRRR15EI9m-yWXsGFLt8evWcHP";

        function getState(){
            return _state;
        }

        function getUser(){
            return _user;
        }

        function isSignedIn(){
            return _isSignedIn;
        }

        function changeState(state){
            _state = state;
        }

        function changeUser(user){
            _user = user;
        }

        function changeIsSignedIn(){
            _isSignedIn = _isSignedIn === false ? true : false;
        }

        return {
            getState : getState,
            getUser : getUser,
            changeState : changeState,
            changeUser : changeUser,
            isSignedIn : isSignedIn,
            changeIsSignedIn : changeIsSignedIn
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = create();
            }
            return instance;
        }
    };
})();