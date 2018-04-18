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

var crit = 1.5;
var pOneHp = 50;
var pTwoHp = 50;

var turn = 1;
var altImg = "";
//attackScreenHandel();

//The first player character variable that will store the character chosen (Placeholders)
var firstPlayerChar;
var pselection = 1;
var secondPlayerChar;
var winner = 0;
var dmg = 0;
//new content var's
         var contentModel = {
             "hasDisplaySpeechOutput" : "Thing",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Body titile",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+End+Screen.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
//content variables
var chooseVaru = {
     "hasDisplaySpeechOutput" : "Choose an attack",
     "hasDisplayRepromptText" : "Don't forget to choose an attack",
     "simpleCardTitle" : "Current Health:",
     "simpleCardContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "bodyTemplateTitle" : "Current Health:",
     "bodyTemplateContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Varu+Screen+Player1.png",
     "askOrTell" : ":ask",
     "sessionAttributes": {}
};
  
  
var chooseBabool = {
     "hasDisplaySpeechOutput" : "Choose an attack",
     "hasDisplayRepromptText" : "Don't forget to choose an attack",
     "simpleCardTitle" : "Current Health:",
     "simpleCardContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "bodyTemplateTitle" : "Current Health:",
     "bodyTemplateContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.console.aws.amazon.com/s3/object/cre-imgs/Creature%2520Command%2520Babool%2520Screen%2520Player1.png?region=us-east-1&tab=overview",
     "askOrTell" : ":ask",
     "sessionAttributes": {}
};
     
     
var chooseMomolt = {
     "hasDisplaySpeechOutput" : "Choose an attack",
     "hasDisplayRepromptText" : "Don't forget to choose an attack",
     "simpleCardTitle" : "Current Health:",
     "simpleCardContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "bodyTemplateTitle" : "Current Health:",
     "bodyTemplateContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Momolt+Screen+Player1.png",
     "askOrTell" : ":ask",
     "sessionAttributes": {}
};
  
  
var chooseKlaki = {
     "hasDisplaySpeechOutput" : "Choose an attack",
     "hasDisplayRepromptText" : "Don't forget to choose an attack",
     "simpleCardTitle" : "Current Health:",
     "simpleCardContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "bodyTemplateTitle" : "Current Health:",
     "bodyTemplateContent" : "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Klaki+Screen+Player1.png",
     "askOrTell" : ":ask",
     "sessionAttributes": {}
};
  
  var charSelectOne = {
    "hasDisplaySpeechOutput" : "Player one choose your Character",
    "hasDisplayRepromptText" : "Please choose your character",
    "simpleCardTitle" : "",
    "simpleCardContent" : "",
    "bodyTemplateTitle" : "",
    "bodyTemplateContent" : "",
    "templateToken" : "factBodyTemplate",
    "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Character+Screen+Player1.png",
    "askOrTell" : ":ask",
    "sessionAttributes": {}
};

  var charSelectTwo = {
    "hasDisplaySpeechOutput" : "Player two choose your Character",
    "hasDisplayRepromptText" : "Please choose your character",
    "simpleCardTitle" : "",
    "simpleCardContent" : "",
    "bodyTemplateTitle" : "",
    "bodyTemplateContent" : "",
    "templateToken" : "factBodyTemplate",
    "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Character+Screen+Player2.png",
    "askOrTell" : ":ask",
    "sessionAttributes": {}
  };

var char1Win = {
     "hasDisplaySpeechOutput" : "Player 1 Wins!",
     "hasDisplayRepromptText" : "NOICE",
     "simpleCardTitle" : "NOICE",
     "simpleCardContent" : "NOICE",
     "bodyTemplateTitle" : "NOIC",
     "bodyTemplateContent" : "Nice ",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+End+Screen.png",
     "askOrTell" : ":ask",
     "sessionAttributes": {}
  };
  
  
var char2Win = {
    "hasDisplaySpeechOutput" : "Player 2 Wins!",
     "hasDisplayRepromptText" : "NOICE",
     "simpleCardTitle" : "NOICE",
     "simpleCardContent" : "NOICE",
     "bodyTemplateTitle" : "NOICE",
     "bodyTemplateContent" : "NOICE",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+End+ScreenPlayer2.png",
     "askOrTell" : ":ask",
     "sessionAttributes": {}
  };

var icespinKlakLeft = {
     "hasDisplaySpeechOutput" : "Klak used Ice Spin",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/KlakiIceP2.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

var icespinKlakRight = {
     "hasDisplaySpeechOutput" : "Klak used Ice Spin",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/KlakiIceP1.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

var waterblastKlakLeft = {
     "hasDisplaySpeechOutput" : "Klak used Waterblast",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/KlakiWaterP1.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

var waterblastKlakRight = {
     "hasDisplaySpeechOutput" : "Klak used Waterblast",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/KlakiWaterP2.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

var punchMomoltLeft = {
     "hasDisplaySpeechOutput" : "Momolt used punch!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/MomoltPunchp1.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};
var punchMomoltRight = {
     "hasDisplaySpeechOutput" : "Momolt used punch!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/MomoltPunchp2.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

var earthquakeMomoltLeft = {
     "hasDisplaySpeechOutput" : "Momolt used earthquake!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/MomoltEarthP1.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};
var earthquakeMomoltRight = {
     "hasDisplaySpeechOutput" : "Momolt used earthquake!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/MomoltEarthP2.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

var rocksBaboolLeft = {
     "hasDisplaySpeechOutput" : "Babool used rocks!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/MomoltPunchp2.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};
var rocksBaboolRight = {
     "hasDisplaySpeechOutput" : "Babool used rocks!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/MomoltPunchp2.jpg",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

var waterpumpBaboolLeft = {
     "hasDisplaySpeechOutput" : "Babool used waterpump!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/Screen+Shot+2018-04-13+at+2.56.57+AM.png",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};
var waterpumpBaboolRight = {
     "hasDisplaySpeechOutput" : "Babool used waterpump!",
     "hasDisplayRepromptText" : "",
     "simpleCardTitle" : "",
     "simpleCardContent" : "",
     "bodyTemplateTitle" : "",
     "bodyTemplateContent" : "",
     "templateToken" : "factBodyTemplate",
     "bgimg": "https://s3.amazonaws.com/cre-imgs/Screen+Shot+2018-04-13+at+2.56.57+AM.png",
     "askOrTell" : ":tell",
     "sessionAttributes": {}
};

//new objects
 var fireballVaruRight = {
         //mp4 url
        "url" : "https://s3.amazonaws.com/cre-imgs/Animations/Varu_Fireball_Beach_Sound_Flipped_Rough.mp4",
        //Title of the card after the video
        "cardTitle": "Varu used Fireball",
        //Cards background
        "cardBack" : altImg,
        //HP
        
        "speech" : "Say Alexa then select an attack!",
        "askOrTell" : ":ask",
        "sessionAttributes": {}
};
 var fireballVaruLeft = {
         //mp4 url
        "url" : "https://s3.amazonaws.com/cre-imgs/Animations/Varu_Fireball_Beach_Sound_Rough.mp4",
        //Title of the card after the video
        "cardTitle": "Varu used Fireball",
        //Cards background
        "cardBack" : altImg,
        //HP
      
        "speech" : "Say Alexa then select an attack!",
        "askOrTell" : ":ask",
        "sessionAttributes": {}
};
 var tornadoVaruLeft = {
         //mp4 url
        "url" : "https://s3.amazonaws.com/cre-imgs/Animations/Varu_Tornado_Beach_Sound_Rough.mp4",
        //Title of the card after the video
        "cardTitle": "Varu used Tornado",
        //Cards background
        "cardBack" : altImg,
        //HP
        "cardText" : "Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"",
        "speech" : "Say Alexa then select an attack!",
        "askOrTell" : ":ask",
        "sessionAttributes": {}
};
 var tornadoVaruRight = {
         //mp4 url
        "url" : "https://s3.amazonaws.com/cre-imgs/Animations/Varu_Tornado_Beach_Sound_Flipped_Rough.mp4",
        //Title of the card after the video
        "cardTitle": "Varu used Tornado",
        //Cards background
        "cardBack" : altImg,
        //HP
        "cardText" : "Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"",
        "speech" : "Say Alexa then select an attack!",
        "askOrTell" : ":ask",
        "sessionAttributes": {}
};


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
   };

const handlers = {
  //displays health for players after attacks are done.
    'resetIntent' : function(){
  firstPlayerChar = null;
  secondPlayerChar = null;
  pselection = 1;
  turn = 1;
  pOneHp = 50;
  pTwoHp = 50;
  this.emit(':tell',"The game has been reset");
},
'winIntent': function(){
  if(pOneHp > pTwoHp){
      
    renderTemplate.call(this, char1Win);
    
          firstPlayerChar = null;
          secondPlayerChar = null;
          pselection = 1;
          turn = 1;
          pOneHp = 50;
          pTwoHp = 50;
  
  }else if(pTwoHp > pOneHp){
      
      renderTemplate(this, char2Win);
              
          firstPlayerChar = null;
          secondPlayerChar = null;
          pselection = 1;
          turn = 1;
          pOneHp = 50;
          pTwoHp = 50;
  }
  
},
'vid' : function(){
                var content = {
                    //mp4 url
                    "url" : "https://s3.amazonaws.com/cre-imgs/Animations/klaki_spinattack_LeftBeach_sound.mp4",
                    //Title of the card after the video
                    "cardTitle": "This is a filler title",
                    //Cards background
                    "cardBack" : "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
                    //HP
                    "cardText" : "Player one hp: 45 <br/> Player two hp: 34",
                    "speech" : "clacky did there attack",
                    "askOrTell" : ":ask",
                    "sessionAttributes": {}
                };
          
          rendervid.call(this, content);
          console.log("---This is being hit---");
          //this.emit(':responseReady');

},

    'PlayVideoIntent' : function() {
     
         var content = {
             "hasDisplaySpeechOutput" : "Thing",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Body titile",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+End+Screen.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
          
          //renderTemplate.call(this, content);

              renderTemplate.call(this, content);
      
    },
    
    'nextCharIntent' : function()
    {
        if(turn == 1)
        {
            if(firstPlayerChar == 1){
    
              renderTemplate.call(this, chooseVaru);
                     
            }else if(firstPlayerChar == 2){
              
              renderTemplate.call(this, chooseMomolt);
              
            }else if(firstPlayerChar == 3){
              
              renderTemplate.call(this, chooseBabool);
    
            }else if(firstPlayerChar == 4){
              
              renderTemplate.call(this, chooseKlaki);
    
            }
        }else if(turn == 2)
        {
            
            if(secondPlayerChar == 1){
                    
                renderTemplate.call(this, chooseVaru);
               
            }if(secondPlayerChar == 2){
          
                 renderTemplate.call(this, chooseMomolt);
               
            }if(secondPlayerChar == 3){
          
                renderTemplate.call(this, chooseBabool);
               
            }else if(secondPlayerChar == 4){
          
                renderTemplate.call(this, chooseKlaki);

            }
            
        }
    },


// This is the fireball attack for the creatue Varu 
'Fireball' : function() {
    
    attackScreenHandel();
    
 if (secondPlayerChar == varu && turn == 2){
      
      
             doDmgPlayerTwo(varu, 'fireball');
              
             turn = 1;
            console.log(altImg);
    if(pOneHp < 0 || pTwoHp < 0){
        this.emit('winIntent');
        console.log("Wincondition boi");
    }
            rendervid.call(this, fireballVaruRight);
            
    
                

        }else if (firstPlayerChar == varu && turn == 1){
        
               doDmgPlayerOne(varu, 'fireball');
               
              turn = 2;

            console.log(altImg);
    if(pOneHp < 0 || pTwoHp < 0){
        this.emit('winIntent');
        console.log("Wincondition boi");
    }
            rendervid.call(this, fireballVaruLeft);
            
           
            
                
                
     
        }

        //this.emit(':ask',"choose another attack");
},

// this is the tornado attack for the creature Varu
'Tornado' : function() { 
    attackScreenHandel();
  if (secondPlayerChar == varu && turn == 2){
             doDmgPlayerTwo(varu, 'tornado');
             turn = 1;

            if(pOneHp < 0 || pTwoHp < 0){
        this.emit('winIntent');
        console.log("Wincondition boi");
    }
               rendervid.call(this, tornadoVaruRight);
               
        }else if (firstPlayerChar == varu && turn == 1){
               doDmgPlayerOne(varu, 'tornado');
              turn = 2;
    if(pOneHp < 0 || pTwoHp < 0){
        this.emit('winIntent');
        console.log("Wincondition boi");
    }
              rendervid.call(this, tornadoVaruLeft);
        }

        this.emit(':responseReady');
},


'Earthquake' : function() {      
  if (secondPlayerChar == momolt && turn == 2){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
          // Change based on element and attack
             doDmgPlayerTwo(momolt, 'earthquake');
             turn = 1;
//                if (pOneHp <= 0 && pTwoHp > 0)
//              {
//               winCondition("Player 2 Wins!");
//               this.emit(':responseReady');
//              }

            renderTemplate.call(this, earthquakeMomoltRight);
                 
           this.emit('nextCharIntent');
           
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }else if (firstPlayerChar == momolt && turn == 1){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
               doDmgPlayerOne(momolt, 'earthquake');
              turn = 2;
//                  if (pTwoHp <= 0 && pOneHp > 0)
//              {
//               winCondition("Player 1 Wins!");
//               this.emit(':responseReady');
//              }
            renderTemplate.call(this, earthquakeMomoltLeft);

                this.emit('nextCharIntent');
                
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},
'Punch' : function() {      
  if (secondPlayerChar == momolt && turn == 2){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
          // Change based on element and attack
             doDmgPlayerTwo(momolt, 'punch');
             turn = 1;
//                if (pOneHp <= 0 && pTwoHp > 0)
//              {
//               winCondition("Player 2 Wins!");
//               this.emit(':responseReady');
//              }

            renderTemplate.call(this, punchMomoltRight);
                 
                this.emit('nextCharIntent');
                
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }else if (firstPlayerChar == momolt && turn == 1){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
               doDmgPlayerOne(momolt, 'punch');
              turn = 2;
//                  if (pTwoHp <= 0 && pOneHp > 0)
//              {
//               winCondition("Player 1 Wins!");
//               this.emit(':responseReady');
//              }
              renderTemplate.call(this, punchMomoltLeft);

                this.emit('nextCharIntent');
                
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

'Waterpump' : function(){

        if (secondPlayerChar == babool && turn == 2){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
            doDmgPlayerTwo(babool, "waterpump");
             turn = 1;
             //   if (pOneHp <= 0 && pTwoHp > 0)
             //  {
             //   winCondition("Player 2 Wins!");
             //   this.emit(':responseReady');
             // }
            renderTemplate.call(this, waterpumpBaboolRight);

                this.emit('nextCharIntent');
                
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    
      
        if (firstPlayerChar == babool && turn == 1){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              doDmgPlayerOne(babool, "waterpump");
              turn = 2;
//                 if (pTwoHp <= 0 && pOneHp > 0)
//              {
//               winCondition("Player 1 Wins!");
//               this.emit(':responseReady');
//              }
            renderTemplate.call(this, waterpumpBaboolLeft);

              this.emit('nextCharIntent');
              
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},

'Rocks' : function() {
        if (secondPlayerChar == babool && turn == 2){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
            doDmgPlayerTwo(babool, "rocks");
             turn = 1;
//               if (pOneHp <= 0 && pTwoHp > 0)
//              {
//               winCondition("Player 2 Wins!");
//               this.emit(':responseReady');
//              }
            renderTemplate.call(this, rocksBaboolRight);

                this.emit('nextCharIntent');
                
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == babool && turn == 1){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              doDmgPlayerOne(babool, 'waterpump');
              turn = 2;
//                 if (pTwoHp <= 0 && pOneHp > 0)
//              {
//               winCondition("Player 1 Wins!");
//               this.emit(':responseReady');
//              }
            renderTemplate.call(this, rocksBaboolLeft);

              this.emit('nextCharIntent');
              
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
},


// This is the waterblast attack for Klaki 
'waterblast' : function() {
    
    console.log("This is turn"+turn);
    console.log(" water blast this is fpchar"+firstPlayerChar);
    
        if (secondPlayerChar == klaki && turn == 2){
            console.log("THIS IS TRUE PLAYER TWO!!!!!!!");
            turn = 1;
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             doDmgPlayerTwo(klaki, 'waterBlast');
           //   if (pOneHp <= 0 && pTwoHp > 0)
           // {
           //    winCondition("Player 2 Wins!");
           //   this.emit(':responseReady')
           //   }
                renderTemplate.call(this, waterblastKlakRight);

                this.emit('nextCharIntent');
                
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }else if (firstPlayerChar == klaki && turn == 1){
            console.log("THIS IS TRUE PLAYER ONE!!!!!!!");
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             doDmgPlayerOne(klaki, 'waterBlast');
              turn = 2;
             //    if (pTwoHp <= 0 && pOneHp > 0)
             //  {
             //   winCondition("Player 1 Wins!");
             //   this.emit(':responseReady');
             // }
             renderTemplate.call(this, waterblastKlakLeft);
                
                
                this.emit('nextCharIntent');
                
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
        }
        }

        this.emit(':responseReady');
},

// This is the icespin attack for Klaki
'IceSpin' : function() {
        if (secondPlayerChar == klaki && turn == 2){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             doDmgPlayerTwo(klaki, 'iceSpin');
             turn = 1;
//                if (pOneHp <= 0 && pTwoHp > 0)
//              {
//               winCondition("Player 2 Wins!");
//               this.emit(':responseReady');
//              }
            renderTemplate.call(this, icespinKlakRight);

                this.emit('nextCharIntent');
                
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    else if (firstPlayerChar == klaki && turn == 1){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
               doDmgPlayerOne(klaki, 'iceSpin');
              turn = 2;
//                  if (pTwoHp <= 0 && pOneHp > 0)
//              {
//               winCondition("Player 1 Wins!");
//               this.emit(':responseReady');
//              }
            renderTemplate.call(this, icespinKlakLeft);
            
                this.emit('nextCharIntent');
                
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
        if(pselection == 1){
            firstPlayerChar = 4; 
            pselection = 2;
           this.emit(':ask',"Player one you chose clacky ,Player two please choose a character!");
        }else{
            secondPlayerChar = 4;
            turn = 1;
                if (firstPlayerChar == varu) {
             var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Varu+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };

}
else if (firstPlayerChar == momolt ) {
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Momolt+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          }; 
}
else if (firstPlayerChar == babool){
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
    }

else if (firstPlayerChar == klaki){
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
}
        renderTemplate.call(this, content);
        }
        
    },
        'varu_chosen' : function(){
        // make a differnt intent for each of the characters following this logic!
        if(pselection == 1){
            firstPlayerChar = 1; 
           pselection = 2;
           this.emit(':ask',"Player one you chose varu ,Player two please choose a character!");
        }else{
            secondPlayerChar = 1;
                if (firstPlayerChar == varu) {
                    
                 this.emit('nextCharIntent');   

        }
else if (firstPlayerChar == momolt ) {
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Momolt+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };    
}
else if (firstPlayerChar == babool){
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
    
}
else if (firstPlayerChar == klaki){
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
}
            renderTemplate.call(this, content);
      }  
    },

    'momolt_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselection == 1){
       firstPlayerChar = momolt; 
       pselection = 2;
       this.emit(':ask',"Player one you chose Momolt ,Player two please choose a character!");
    }else{
        secondPlayerChar = momolt;
        turn = 1;
                if (firstPlayerChar == varu) {
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Varu+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };

}
else if (firstPlayerChar == momolt ) {
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Momolt+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };    
}
else if (firstPlayerChar == babool){
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
    
}
else if (firstPlayerChar == klaki){
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
}
            renderTemplate.call(this, content);
    }
},

'babool_chosen' : function(){
    // make a differnt intent for each of the characters following this logic!
    if(pselection == 1){
       firstPlayerChar = babool; 
       pselection = 2;
       this.emit(':ask',"Player one you chose Babool ,Player two please choose a character!");
    }else{
        secondPlayerChar = babool;
        turn = 1;
         if (firstPlayerChar == varu) {
          var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Varu+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
}
else if (firstPlayerChar == momolt ) {
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Momolt+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };    
}
else if (firstPlayerChar == babool){
            var content = {
             "hasDisplaySpeechOutput" : "Select an attack",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Player One Please select a character!",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Babool+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
    
}
else if (firstPlayerChar == klaki){
              var content = {
             "hasDisplaySpeechOutput" : "",
             "hasDisplayRepromptText" : "Testing",
             "simpleCardTitle" : "Hello Sir",
             "simpleCardContent" : "This is card content",
             "bodyTemplateTitle" : "Body titile",
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "bgimg": "https://s3.amazonaws.com/cre-imgs/Creature+Command+Character+Screen+Player1.png",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
          
          renderTemplate.call(this, content);
        }
    }
    },
    'LaunchRequest': function () {
          
          renderTemplate.call(this, charSelectOne);
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
        reset();
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        reset();
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        const message = 'Say yes to continue, or no to end the game.';
        this.response.speak(message)
                    .listen(message);
        this.emit(':responseReady');
    },
};

  function doDmgPlayerOne(pOneElement,pOneMove){
  //fire element character
  if(pOneElement == momolt){
    if(pOneMove == "punch"){
      var dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        pTwoHp -= critChance(dmg);
    }else if (pOneMove == "earthquake") {
      var dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        pTwoHp -= critChance(dmg);
    }
  }
  //water type character
  if(pOneElement == klaki){
    if(pOneMove == "waterBlast"){
      var dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        //return critChance(dmg);
        pTwoHp -= critChance(dmg);
    }else if (pOneMove == "iceSpin") {
      var dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        //return critChance(dmg);
        pTwoHp -= critChance(dmg);
    }
  }
  if(pOneElement == varu){
    if(pOneMove == "tornado"){
      var dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        //return critChance(dmg);
        pTwoHp -= critChance(dmg);
    }else if (pOneMove == "fireball") {
      var dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        //return critChance(dmg);
        pTwoHp -= critChance(dmg);
    }
  }
  if(pOneElement == babool){
    if(pOneMove == "rocks"){
      var dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        pTwoHp -= critChance(dmg);
    }else if (pOneMove == "waterpump") {
      var dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        pTwoHp -= critChance(dmg);
    }
  }
}


function doDmgPlayerTwo(pTwoElement,pTwoMove){
    //fire element character
  if(pTwoElement == momolt){
    if(pTwoMove == "punch"){
       dmg = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
        pOneHp -= critChance(dmg);
    }else if (pTwoMove == "earthquake") {
       dmg = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
        pOneHp -= critChance(dmg);
    }
  }
  //water type character
  if(pTwoElement == klaki){
    if(pTwoMove == "waterBlast"){
       dmg = Math.floor(Math.random() * (14 - 11 + 1)) + 11;
        //return critChance(dmg);
        pOneHp -= critChance(dmg);
    }else if (pTwoMove == "iceSpin") {
       dmg = Math.floor(Math.random() * (9 - 6 + 1)) + 9;
        //return critChance(dmg);
        pOneHp -= critChance(dmg);
    }
  }
  if(pTwoElement == varu){
    if(pTwoMove =="tornado"){
      dmg = Math.floor(Math.random() * (12 - 9 + 1)) + 12;
        //return critChance(dmg);
        pOneHp -= critChance(dmg);
    }else if (pTwoMove == "fireball") {
       dmg = Math.floor(Math.random() * (14 -  8 + 1 )) + 14;
        //return critChance(dmg);
        pOneHp -= critChance(dmg);
    }
  }
  if(pTwoElement == babool){
    if(pTwoMove == "rocks"){
       dmg = Math.floor(Math.random() * (15 - 13 + 1)) + 15;
        pOneHp -= critChance(dmg);
    }else if (pTwoMove == "waterpump") {
       dmg = Math.floor(Math.random() * (11 -  8 + 1 )) + 11;
        pOneHp -= critChance(dmg);
    }
  }

}

  function critChance(dmg){
  var chance = Math.floor(Math.random() * 100) + 1;
  //checks to see if chance is less than 6 out of 100
  if(chance < 10){
      console.log(dmg);
     return dmg * crit;
  }else{
      console.log("crit "+dmg);
    return dmg;
  }
  }
  
  function reset()
{
  firstPlayerChar = null;
  secondPlayerChar = null;
  pselection = 1;
  turn = 1;
  pOneHp = 50;
  pTwoHp = 50;
}


exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function attackScreenHandel(){
    //console.log("--i am called--");
    if(turn == 1){
        if(firstPlayerChar == 1){
            
            altImg = "https://s3.amazonaws.com/cre-imgs/Creature+Command+Varu+Screen+Player1.png";
           //console.log(altImg);
        }
    }
    if(turn == 2){
        if(secondPlayerChar == 1){
            
            altImg = "https://s3.amazonaws.com/cre-imgs/Creature+Command+Varu+Screen+Player1.png";
           //console.log(altImg);
        } 
    }
}
   function renderTemplate (content) {
    var response = {
             "version": "1.0",
             "response": {
               "directives": [
                 {
                   "type": "Display.RenderTemplate",
                   "template": {
                     "type": "BodyTemplate1",
                     "title": content.bodyTemplateTitle,
                     "token": content.templateToken,
                         "backgroundImage": {
                          "contentDescription": "Textured grey background",
                          "sources": [
                            {
                              "url": content.bgimg,
                            }
                          ]
                         },
                     "textContent": {
                       "primaryText": {
                         "type": "RichText",
                         "text": "<font size = '5'>"+content.bodyTemplateContent+"</font>"
                       }
                     },
                     "backButton": "HIDDEN"
                   }
                 }
               ],
               "outputSpeech": {
                 "type": "SSML",
                 "ssml": "<speak>"+content.hasDisplaySpeechOutput+"</speak>"
               },
               "reprompt": {
                 "outputSpeech": {
                   "type": "SSML",
                   "ssml": "<speak>"+content.hasDisplayRepromptText+"</speak>"
                 }
               },
               "shouldEndSession": false,
               "card": {
                 "type": "Simple",
                 "title": content.simpleCardTitle,
                 "content": content.simpleCardContent
               }
             },
             "sessionAttributes": content.sessionAttributes
           };
           this.context.succeed(response); 
   }
    function rendervid (content) {
          
     
    var response = {
             "version": "1.0",
                "response": {
                    "directives": [
                      {
                        "type": "VideoApp.Launch",
                        "videoItem": {
                          "source": content.url,
                          "metadata": {
                            "title": "Title for Sample Video",
                            "subtitle": "Secondary Title for Sample Video"
                          }
                        }
                      },
                    {
                   "type": "Display.RenderTemplate",
                   "template": {
                     "type": "BodyTemplate1",
                     "title": content.cardTitle,
                     "token": "factBodyTemplate",
                         "backgroundImage": {
                          "contentDescription": "player's character",
                          "sources": [
                            {
                              "url": altImg,
                            }
                          ]
                         },
                     "textContent": {
                       "primaryText": {
                         "type": "RichText",
                         "text": "<font size='7'>Player one hp:"+pOneHp+" <br/> Player two hp:"+pTwoHp+"</font>",
                       }
                     },
                     "backButton": "HIDDEN"
                     
                   },
                 },
                 
                    ],
                    "reprompt": null
                },
            };
            this.context.succeed(response);
            }
