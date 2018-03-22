
'Fireball' : function() {
        if (secondPlayerChar == varu && secondPlayerTurn == true){
        	// VideoApp.Play directives can be added to the response
   			 if (this.event.context.System.device.supportedInterfaces.VideoApp) {
       			 this.response.playVideo(/*Plays the Fireball attack animation (Right side)*/);
   			 } else {
       			 this.response.speak("The video cannot be played on your device. " +
       			 "To watch this video, try launching the skill from your echo show device.");
   			 }
        }
    

        if (firstPlayerChar == varu && firstPlayerTurn == true){
        	if (this.event.context.System.device.supportedInterfaces.VideoApp) {
       			  this.response.playVideo(/*Play fireball animation (Left side)*/);
    		} else {
        		  this.response.speak("The video cannot be played on your device. " +
        		  "To watch this video, try launching the skill from your echo show device.");
    		 }
        }

        this.emit(':responseReady');
}

'Tornado' : function() {
        if (secondPlayerChar == varu && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             this.response.playVideo(/*Plays the Tornado attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == varu && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              this.response.playVideo(/*Play Tornado animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Waterpump' : function() {
        if (secondPlayerChar == babool && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             this.response.playVideo(/*Plays the Waterpump attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == babool && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              this.response.playVideo(/*Play Waterpump animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Rocks' : function() {
        if (secondPlayerChar == babool && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             this.response.playVideo(/*Plays the Rocks attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == babool && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              this.response.playVideo(/*Play Rocks animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Waterblast' : function() {
        if (secondPlayerChar == klaki && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             this.response.playVideo(/*Plays the Waterblast attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == klaki && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              this.response.playVideo(/*Play Waterblast animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'IceSpin' : function() {
        if (secondPlayerChar == klaki && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             this.response.playVideo(/*Plays the IceSpin attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == klaki && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              this.response.playVideo(/*Play IceSpin animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Earthquake' : function() {
        if (secondPlayerChar == momolt && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             this.response.playVideo(/*Plays the Earthquake attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == momolt && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              this.response.playVideo(/*Play Earthquake animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}

'Punch' : function() {
        if (secondPlayerChar == momolt && secondPlayerTurn == true){
          // VideoApp.Play directives can be added to the response
         if (this.event.context.System.device.supportedInterfaces.VideoApp) {
             this.response.playVideo(/*Plays the Punch attack animation (Right side)*/);
         } else {
             this.response.speak("The video cannot be played on your device. " +
             "To watch this video, try launching the skill from your echo show device.");
         }
        }
    

        if (firstPlayerChar == momolt && firstPlayerTurn == true){
          if (this.event.context.System.device.supportedInterfaces.VideoApp) {
              this.response.playVideo(/*Play Punch animation (Left side)*/);
        } else {
              this.response.speak("The video cannot be played on your device. " +
              "To watch this video, try launching the skill from your echo show device.");
         }
        }

        this.emit(':responseReady');
}
