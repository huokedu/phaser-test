import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './main';
import state from './states/state';
console.log('hello, react!');
class App extends Component {
    componentWillMount() {
        const game = new Game();
    }
    render() {
        return (
            <h1>
                Hello, react!
            </h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('reactRoot'));

/*
import Game from './main';
import state from './states/state';

const SERVER = 'http://localhost:8080/';

const startGame = () => {
    //$('#signinScreen').css('display', 'none');
    $.ajax({
        url: SERVER + 'highestScore',
        type: 'GET',
        success: data => {
            state.gameHighestScore = data.result[0].highestScore;
            //$('body').data('gameHighestScore', gameHighestScore);
            const game = new Game();
        },
        error: e => {
            console.log(e);
        },
    });
};

const playerSignin = facebookId => {
    //this ajax call checks if this is a first time player
    $.ajax({
        url: SERVER + 'users/facebookId/' + facebookId,
        type: 'GET',
        success: data => {
            if (data.length === 0) {
                let register = '';
                register += '<p>Please enter a screen name</p>';
                register += '<input id="inputScreenName" type="text" />';
                register += '<button id="js-submitScreenName" type="submit">submit</button>';
                $('#signinScreen').append(register);
                $('#js-submitScreenName').click(() => {
                    const newPlayer = {
                        facebookId: facebookId,
                        screenName: $('#inputScreenName').val(),
                    };
                    $.ajax({
                        url: SERVER + 'users/',
                        type: 'POST',
                        contentType: 'application/json; charset=utf-8',
                        data: JSON.stringify(newPlayer),
                        success: player => {
                            state.playerData = player;
                            console.log(2);
                            startGame();
                        },
                        error: e => {
                            console.log(e);
                        },
                    });
                });
            } else {
                $('body').data('playerData', data[0]);
                startGame();
            }
        },
        error: e => {
            console.log(e);
        },
    });
};

$(function() {
    const logInButton = '<div><fb:login-button autologoutlink="true" data-size="xlarge" id="fbloginbutton" scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button></div>';
    const playAsAGuest = '<div><button type="submit" id="playasguest">Play as a Guest</button></div>';
    $('#signinScreen').html(logInButton);
    $('#signinScreen').append(playAsAGuest);
    $('#playasguest').click(() => {
        const guestPlayer = {
            highestScore: 0,
            screenName: 'Guest',
        };
        $('body').data('playerData', guestPlayer);
        startGame();
    });
    $(function() {
        // This is called with the results from from FB.getLoginStatus().

        window.fbAsyncInit = () => {
            FB.init({
                appId: '113731382506643',
                cookie: true, // enable cookies to allow the server to access
                // the session
                xfbml: true, // parse social plugins on this page
                version: 'v2.8', // use graph api version 2.8
            });

            FB.getLoginStatus(response => {
                //statusChangeCallback(response);
                if (response.status === 'connected') {
                    FB.api('/me', response => {
                        const signedInUserFacebookId = response.id;
                        playerSignin(signedInUserFacebookId);
                    });
                }
            });
        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    });
});
*/
