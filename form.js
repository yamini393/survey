class Form {
    constructor(){
        this.input = createInput("Name")
        this.input1 = createInput("Age")
        this.input2 = createInput("Email-ID")
        this.input3 = createInput("gender")
        this.button1 = createButton("start")
        this.title = createElement('h2')   
        this.greeting1 = createElement('h2')
        this.context = createElement('h2')
        this.button2 = createButton("Next")
        this.question1 = createElement('h2')
        this.answer1a = createButton("yes")
        this.answer1b = createButton("no")
        this.question2 = createElement("h2")
        this.answer2 = createInput("Answer")
        this.button3 = createButton("Next")
        this.question3 = createElement('h2')
        this.answer3 = createInput("Answer")
        this.button4 = createButton("Next")
        this.question4 = createElement("h2")
        this.answer4 = createInput("Answer")
        this.button5 = createButton("Next")
        this.question5 = createElement("h2")
        this.answer5 = createInput("Answer")
        this.button6 = createButton("Next")
        this.question6 = createElement("h2")
        this.answer6 = createInput("Answer")
        this.button7 = createButton("Next")
        this.button8 = createButton("Next")
        this.question7 = createElement("h2")
        this.answer7 = createInput("Answer")
        this.button9 = createButton("Next")
        this.question8 = createElement("h2")
        this.answer8 = createInput("Answer")
        this.button10 = createButton("Next")
        this.question9 = createElement("h2")
        this.answer9a = createButton("yes")
        this.answer9b = createButton("no")
        this.button11 = createButton("Next")
        this.question10 = createElement("h2")
        this.answer10 = createInput("Answer")
        this.greeting2 = createElement('h2')
    
    

        
        


    }
        hide(){
            this.greeting1.hide()
            this.input.hide()
            this.input1.hide()
            this.input2.hide()
            this.input3.hide()
            this.button1.hide()
            this.context.hide()
            this.button2.hide()
            this.answer1a.hide()
            this.answer1b.hide()
            this.button3.hide()
            this.button4.hide()
            this.button5.hide()
            this.button6.hide()
            this.button7.hide()
            this.button8.hide()
            this.button9.hide()
            this.button10.hide()
            this.button11.hide()
        
            
         
            
           
            
        }
        display(){
            this.title.html("Survey on Sports");
            this.title.position(500,-20,0)
            this.input.position(500,200)
            this.input1.position(500,300)
            this.input2.position(500,400)
            this.input3.position(500,500)
            this.button1.position(500,600)

            this.button1.mousePressed(()=>{
                this.input.hide()
                this.input1.hide()
                this.title.hide()
                this.input2.hide()
                this.input3.hide()
                this.button1.hide()
                this.greeting1.html("Hello"+this.input.value())
                this.greeting1.position(500,200)
                this.context.html("There are going to be a series of question based on sports")
                this.context.position(150,350)
                this.button2.position(500,500)

            })
            this.button2.mousePressed(()=>{
                this.greeting1.hide()
                this.context.hide()   
                this.button2.hide() 
                this.question1.html('1.Do you like sport activities?')
                this.question1.position(100,50)
                this.answer1a.position(500,300)
                this.answer1b.position(500,200)
            
            })
                this.answer1a.mousePressed(()=>{
                    this.question1.hide()
                    this.answer1a.hide()
                    this.answer1b.hide()
                    this.question2.html("2.Which is your favorite sport ? ")
                    this.question2.position(100,50)
                    this.answer2.position(500,300)
                    this.button3.position(500,500)
                })

                this.answer1b.mousePressed(()=>{
                    this.question1.hide()
                    this.answer1a.hide()
                    this.answer1b.hide()
                    this.question2.html("2.Which is your favorite sport ?")
                    this.question2.position(100,50)
                    this.answer2.position(500,300)
                    this.button3.position(500,500)
                })
                this.button3.mousePressed(()=>{
                    this.question2.hide()
                    this.answer2.hide()
                    this.button3.hide()
                    this.question3.html("3.Do you prefer indoor sports or outdoor sports activities?")
                    this.question3.position(100,50)
                    this.answer3.position(500,300)
                    this.button4.position(500,500)
                })
                this.button4.mousePressed(()=>{
                    this.question3.hide()
                    this.answer3.hide()
                    this.button4.hide()
                    this.question4.html("4.How much time do you spend on sports activities every week?")
                    this.question4.position(100,50)
                    this.answer4.position(500,300)
                    this.button5.position(500,500)
                 })
                 this.button5.mousePressed(()=>{
                    this.question4.hide()
                    this.answer4.hide()
                    this.button5.hide()
                    this.question5.html("5.Which of the following sports activities are you interested in?")
                    this.question5.position(100,50)
                    this.answer5.position(500,300)
                    this.button6.position(500,500)
                 })
                 this.button6.mousePressed(()=>{
                    this.question5.hide()
                    this.answer5.hide()
                    this.button6.hide()
                    this.question6.html("6.Which sport are u most likely to spend your time on ?")
                    this.question6.position(100,50)
                    this.answer6.position(500,300)
                    this.button7.position(500,500)
                 })
                 this.button7.mousePressed(()=>{
                    this.question6.hide()
                    this.answer6.hide()
                    this.button7.hide()
                    this.question7.html("7.Do you think your sports teachers are qualified and teaching you that particular sport the way it is meant to be ?")
                    this.question7.position(100,50)
                    this.answer7.position(500,300)
                    this.button8.position(500,500)
                 })
                 this.button8.mousePressed(()=>{
                     this.question7.hide()
                     this.answer7.hide()
                     this.button8.hide()
                     this.question8.html("8.Which of these sports do you think should be allowed to play in school with proper equipment ?")
                     this.question8.position(100,50)
                     this.answer8.position(500,300)
                     this.button9.position(500,500)
                 })
                 this.button9.mousePressed(()=>{
                    this.question8.hide()
                    this.answer8.hide()   
                    this.button9.hide() 
                    this.question9.html('9.Have you ever taken part in a match/game as school representative in the past ?')
                    this.question9.position(100,50)
                    this.answer9a.position(500,300)
                    this.answer9b.position(500,200)
                
                })
                    this.answer9a.mousePressed(()=>{
                        this.question9.hide()
                        this.answer9a.hide()
                        this.answer9b.hide()
                        this.question10.html("10.Would you bare to take all the hardships in swimming Olympics to win the Gold Medal for your country?")
                        this.question10.position(100,50)
                        this.answer10.position(500,300)
                        this.button11.position(500,500)
                    })
    
                    this.answer9b.mousePressed(()=>{
                        this.question9.hide()
                        this.answer9a.hide()
                        this.answer9b.hide()
                        this.question10.html("10.Would you bare to take all the hardships in swimming Olympics to win the Gold Medal for your country?")
                        this.question10.position(100,50)
                        this.answer10.position(500,300)
                        this.button11.position(500,500)
                    })
                    this.button11.mousePressed(()=>{
                         this.question10.hide()
                         this.answer10.hide()
                         this.button11.hide()
                         this.greeting2.html("Thank You for completing the survey!"+this.input.value())
                         this.greeting2.position(500,200)
                    })
               
                 
                 

                 


        }
    
}