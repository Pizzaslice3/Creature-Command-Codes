/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-howto
 **/

'use strict';

const Alexa = require('alexa-sdk');
const recipes = require('./recipes');

const APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).

//Constants for all of the characters that can be stored inside the player variable (These are just placeholders)
const varu = 1;
const momolt = 2;
const babool = 3;
var klaki = 4;

var pOneHp = 50;
var pTwoHp = 50;

var turn = 1;

//The first player character variable that will store the character chosen (Placeholders)
var firstPlayerChar;
var pselction = 1;
var secondPlayerChar;

const languageStrings = {
    'en': {
        translation: {
            RECIPES: recipes.RECIPE_EN_US,
            SKILL_NAME: 'Creature command',
            WELCOME_MESSAGE: "Welcome to creature command Please choose a character!",
            WELCOME_REPROMPT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: 'Welcome to Creature command',
            HELP_MESSAGE: "You can ask questions such as, what\'s the recipe, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMPT: "You can say things like, what\'s the recipe, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            RECIPE_REPEAT_MESSAGE: 'Try saying repeat.',
            RECIPE_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'the recipe for %s. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'that recipe. ',
            RECIPE_NOT_FOUND_REPROMPT: 'What else can I help with?',
        },
    },
    'en-US': {
        translation: {
            RECIPES: recipes.RECIPE_EN_US,
            SKILL_NAME: 'American Minecraft Helper',
        },
    },
    'en-GB': {
        translation: {
            RECIPES: recipes.RECIPE_EN_GB,
            SKILL_NAME: 'British Minecraft Helper',
        },
    },
    'de': {
        translation: {
            RECIPES: recipes.RECIPE_DE_DE,
            SKILL_NAME: 'Assistent für Minecraft in Deutsch',
            WELCOME_MESSAGE: 'Willkommen bei %s. Du kannst beispielsweise die Frage stellen: Welche Rezepte gibt es für eine Truhe? ... Nun, womit kann ich dir helfen?',
            WELCOME_REPROMPT: 'Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.',
            DISPLAY_CARD_TITLE: '%s - Rezept für %s.',
            HELP_MESSAGE: 'Du kannst beispielsweise Fragen stellen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Du kannst beispielsweise Sachen sagen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            RECIPE_REPEAT_MESSAGE: 'Sage einfach „Wiederholen“.',
            RECIPE_NOT_FOUND_MESSAGE: 'Tut mir leid, ich kenne derzeit ',
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: 'das Rezept für %s nicht. ',
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: 'dieses Rezept nicht. ',
            RECIPE_NOT_FOUND_REPROMPT: 'Womit kann ich dir sonst helfen?',
        },
    },
};

const handlers = {
    'PlayVideoIntent' : function() {
    const cardTitle = 'CURRENT HP';
    const cardContent = 'PLayer1hp: '+pOneHp+'/50  PLayer2hp'+pTwoHp+'/50';
    const repromptSpeech = "What you want dog";
    const imageObj = {
    	largeImageUrl: 'https://imgs.xkcd.com/comics/standards.png'
    };

    // VideoApp.Play directives can be added to the response
    if (this.event.context.System.device.supportedInterfaces.VideoApp) {
        this.response.playVideo('https://s3.amazonaws.com/creaturecommand/klaki_water_attack.mp4')
        .cardRenderer(cardTitle, cardContent, imageObj);
    }else {
        this.response.speak("The video cannot be played on your device. " +
        "To watch this video, try launching the skill from your echo show device.");
    }
    this.emit(':responseReady');
    
    },
'Fireball' : function() {
        if (secondPlayerChar == varu && secondPlayerTurn == true){
            // VideoApp.Play directives can be added to the response
             if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                 pOneHp -= doDmgPlayerTwo(varu, fireball);
                 this.response.playVideo(/*Plays the Fireball attack animation (Right side)*/);
             } else {
                 this.response.speak("The video cannot be played on your device. " +
                 "To watch this video, try launching the skill from your echo show device.");
             }
        }
    

        if (firstPlayerChar == varu && firstPlayerTurn == true){
            if (this.event.context.System.device.supportedInterfaces.VideoApp) {
                pTwoHp -= doDmgPlayerOne(varu, fireball);
                this.response.playVideo(/*Play fireball animation (Left side)*/);
            } else {
                  this.response.speak("The video cannot be played on your device. " +
                  "To watch this video, try launching the skill from your echo show device.");
             }
        }

        this.emit(':responseReady');
},

'Tornado' : function() {
        if (secondPlayerChar == varu && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(varu, tornado);
             this.response.playVideo(/*Plays the Tornado attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == varu && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(varu, tornado);
              this.response.playVideo(/*Play Tornado animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

'Waterpump' : function() {
        if (secondPlayerChar == babool && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(babool, waterpump);
             this.response.playVideo(/*Plays the Waterpump attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == babool && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(babool, waterpump);
              this.response.playVideo(/*Play Waterpump animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

'Rocks' : function() {
        if (secondPlayerChar == babool && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(babool, rocks);
             this.response.playVideo(/*Plays the Rocks attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == babool && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(babool, rocks);
              this.response.playVideo(/*Play Rocks animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

'waterblast' : function() {
    
    console.log(turn);
    console.log(firstPlayerChar);
    
        if (secondPlayerChar == 4 && turn == 2){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             doDmgPlayerTwo(klaki, 'waterBlast');
                const cardTitle = 'CURRENT HP';
                const cardContent = 'Player1hp: '+pOneHp+'/50  PLayer2hp'+pTwoHp+'/50';
                const repromptSpeech = "What you want dog";
                const imageObj = {
                	largeImageUrl: 'https://imgs.xkcd.com/comics/standards.png'
                };
                     this.response.playVideo('https://s3.amazonaws.com/creaturecommand/klaki_water_attack.mp4')
        .cardRenderer(cardTitle, cardContent, imageObj);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == 4 && turn == 1){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             doDmgPlayerOne(klaki, 'waterBlast');
                const cardTitle = 'CURRENT HP';
                const cardContent = 'Player1hp: '+pOneHp+'/50  PLayer2hp'+pTwoHp+'/50';
                const repromptSpeech = "What you want dog";
                const imageObj = {
                	largeImageUrl: 'https://imgs.xkcd.com/comics/standards.png'
                };
                     this.response.playVideo('https://s3.amazonaws.com/creaturecommand/klaki_water_attack.mp4')
                     .cardRenderer(cardTitle, cardContent, imageObj);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
        }
        }

        this.emit(':responseReady');
},

'IceSpin' : function() {
        if (secondPlayerChar == 1 && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(klaki, iceSpin);
             this.response.playVideo(/*Plays the IceSpin attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == 1 && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(klaki, iceSpin);
              this.response.playVideo(/*Play IceSpin animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

'Earthquake' : function() {
        if (secondPlayerChar == momolt && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(momolt, earthquake);
             this.response.playVideo(/*Plays the Earthquake attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == momolt && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(momolt, earthquake);
              this.response.playVideo(/*Play Earthquake animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

'Punch' : function() {
        if (secondPlayerChar == momolt && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             pOneHp -= doDmgPlayerTwo(momolt, punch);
             this.response.playVideo(/*Plays the Punch attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == momolt && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              pTwoHp -= doDmgPlayerOne(momolt, punch);
              this.response.playVideo(/*Play Punch animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

    'dodmgIntent' : function(){
        //this.response.playVideo('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4');
    const videoSource = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    const metadata = {
    	'title': 'Title for Sample Video',
    	'subtitle': 'Secondary Title for Sample Video'
    };
    this.response.playVideo(videoSource, metadata);
        this.emit(':responseReady');
    },
    'clacky_chosen' : function(){
        // make a differnt intent for each of the characters following this logic!
        if(pselction == 1){
            firstPlayerChar = 4; 
           pselction = 2;
           this.emit(':ask',"Player one you chose clacky ,Player two please choose a character!");
        }else{
            secondPlayerChar = 4;
                console.log(turn);
             console.log(firstPlayerChar);
            this.emit(':ask',"Player two you chose clacky ,Player one choose an attack");
            //this.emit('attack_handel');
        }
        
    },
    'LaunchRequest': function () {
        this.emit(':ask', "Player one, Please select a character!", this.attributes.repromptSpeech);
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMPT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
};

    function doDmgPlayerOne(pOneElement,pOneMove){
  //fire element character
  if(pOneElement == momolt){
    if(pOneMove == "punch"){
      var dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        console.log(critChance(dmg));
    }else if (pOneMove == "earthquake") {
      var dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        return critChance(dmg);
    }
  }
  //water type character
  if(pOneElement == klaki){
    if(pOneMove == "waterBlast"){
      var dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        //return critChance(dmg);
        pOneHp -= dmg;
    }else if (pOneMove == "iceSpin") {
      var dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        //return critChance(dmg);
        
        pOneHp -= dmg;
    }
  }
  if(pOneElement == varu){
    if(pOneMove == "tornado"){
      var dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        return critChance(dmg);
    }else if (pOneMove == "fireball") {
      var dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        return critChance(dmg);
    }
  }
  if(pOneElement == "babool"){
    if(pOneMove == "rocks"){
      var dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        return critChance(dmg);
    }else if (pOneMove == "waterpump") {
      var dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        return critChance(dmg);
    }
  }
}


function doDmgPlayerTwo(pTwoElement,pTwoMove){
    //fire element character
  if(pTwoElement == momolt){
    if(pTwoMove == "punch"){
      var dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        console.log(critChance(dmg));
    }else if (pTwoMove == "earthquake") {
      var dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        return critChance(dmg);
    }
  }
  //water type character
  if(pTwoElement == klaki){
    if(pTwoMove == "waterBlast"){
      var dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        //return critChance(dmg);
        pOneHp -= dmg;
    }else if (pTwoMove == "iceSpin") {
      var dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        return critChance(dmg);
    }
  }
  if(pTwoElement == varu){
    if(pTwoMove =="'tornado"){
      var dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        return critChance(dmg);
    }else if (pTwoMove == "fireball") {
      var dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        return critChance(dmg);
    }
  }
  if(pTwoElement == "babool"){
    if(pTwoMove == "rocks"){
      var dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        return critChance(dmg);
    }else if (pTwoMove == "waterpump") {
      var dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        return critChance(dmg);
    }
  }

}

  function critChance(dmg){
  var chance = Math.floor(Math.random() * 100) + 1;
  //checks to see if chance is less than 6 out of 100
  if(chance < 10){
     return dmg * crit;
  }else{
    return dmg;
  }
  }


exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
