// Starts the jQuery function...
$(function () {
    /**variables...*/
    let randomRequest = "https://dog.ceo/api/breeds/image/random/30"  //GET request for 30 random dog imaegs...
    let searchRequest; //GET request for 30 searched dog breed imaegs...
    let searchSubBreedRequest; //GET request for 30 searched dog sub-breed imaegs...
    let input; //Stores the user's input to search...
    let breed; //Stores the searched dog's breed type...
    let hound; //Stores the searched dog's breed hound type...
    let subBreed; //Stores the searched dog's breed type and hound type in an array...
    /**Function to check a string parameter variable 
     * for white-spaces using the indexOf method...
     * */
    let whiteSpace = (s) => {
        // Returns true or false...
        return s.indexOf(" ") >= 0
    }
    /**This variable stores the application's initial run function that 
     * makes a GET request to the dog.ceo api, then creates a block of 
     * code with 30 cards adding the GET request's data into an html 
     * image tag...
     * */
    var init = () => {
        /**Creates the ajax request object for 30 
         * random images from the dog ceo api...
         * */
        let request = $.ajax({
            // Stores the GET request url...
            url: randomRequest,
            // Stores the request method type...
            method: "GET"
        })
        /**The GET request done function that has a callback function 
         * to get retrive the data from the GET request and store that 
         * data into an arrary variable, then it uses a for each loop 
         * to create a html code block that uses each element of the 
         * data array... 
         * */
        request.done((data) => {
            // Stores the return data from the GET request...
            let returnedData = data.message
            /**If statement to check if there is data returned 
             * from the if api's GET request length is greater 
             * than or equal to one...
             * */
            if (returnedData.length >= 1) {
                /**If true: */
                /**For Each loop that loops through each element of the 
                 * return data's array storing each element in a variable
                 * called pic then creating a block of html code using the 
                 * jQuery append method to insert the value of the pic 
                 * variable in a img tag... 
                 * */
                returnedData.forEach((pic) => {
                    /**This uses the jQuery append method to add a .pic-card 
                     * block of code to the .random-pics .pic-grid...
                     * */
                    $('.random-pics .pics-grid').append(
                        "<!-- start of pic-card --><div class='pic-card cell small-12 medium-6 large-4'>" +
                        "<!-- start of card --><div class='card'><!-- start of img-placeholder --><div class='img-placeholder'>" +
                        "<a href='"+ pic +"' download><img src='" + pic + "' alt=''></img></a></div><!-- end of img-placeholder --><!-- start of rating -->" +
                        "<div class='rating'><a href='"+ pic +"' id='like' download>Link <i class='fa fa-link' aria-hidden='true'></i>" +
                        "</a></div><!-- end of rating --></div><!-- end of card --></div><!-- end of pic-card -->" 
                    )
                })
            // Else statement that displays and error message...
            } else {
                /**If false: */
                /**This uses the jQuery append method to add an 
                 * error message to the .random-pics .pic-grid... 
                 * */
                $('.random-pics .pics-grid').append(
                    "h2>Sorry, there was an error!</h2>"
                )
            }
        })
    }

    /**Click Events */
    // Get Request Submit Button Functions... 
    $('#btn').on('click', () => {
        // Stores the users input into a variable using the jQuery val method...
        input = $("#user-input").val()
        // Removes any white-space fromvthe beginnig and ending of the users input variable string using the trim method... 
        input = input.trim() 
        /**If Else statement to filter the trimed user's 
         * input and return a value of true of false... 
         * */
        if (whiteSpace(input)) {
            /**If true: */
            // Creates an array from the user's input using the split method to split the input at each white-space...
            subBreed = input.split(" ") 
            // Stores the value of the subBreed array's second element...
            breed = subBreed[1] 
            // Stores the value of the subBreed array's first element...
            hound = subBreed[0] 
            //Stores GET request for 30 searched dog imaegs...
            searchSubBreedRequest = "https://dog.ceo/api/breed/" + breed + "/" + hound + "/images/random/30" 
            /**Creates the ajax request object for 30 
             * searched images from the dog ceo api...
             * */
            let request = $.ajax({
                // Stores the GET request url...
                url: searchSubBreedRequest,
                // Stores the request method type...
                method: "GET",
                // Stores the erroe fallback function that takes in three parameters...
                error: (xhr, ajaxOptions, thrownError)=> {
                    /**If Else statement that checks the value of the GET request xhr 
                     * status and returns either true or false. 
                     * */
                    if (xhr.status == 404) {
                        /**If true: */
                        // Changes the #error css display property to block using the jQuery css method...
                        $("#error").css({
                            display: 'block'
                        })
                        /**Creates the ajax request object for 30 
                         * random images from the dog ceo api...
                         * */
                        let fallback = $.ajax({
                            // Stores the GET request url...
                            url: randomRequest,
                            // Stores the request method type...
                            method: "GET"
                        })
                        /**The GET request done function that has a callback function 
                         * to get retrive the data from the GET request and store that 
                         * data into an arrary variable, then it uses a for each loop 
                         * to create a html code block that uses each element of the 
                         * data array... 
                         * */
                        fallback.done((data) => {
                            // Stores the return data from the GET request...
                            let returnedData = data.message
                            /**If statement to check if there is data returned 
                             * from the if api's GET request length is greater 
                             * than or equal to one...
                             * */
                            if (returnedData.length >= 1) {
                                /**If true: */
                                // Removes the .pic-card div from the html document usin the jQuery remove element...
                                $('.pic-card').remove()
                                // Changes the #brred-ttile's text using the jQuery text method...
                                $('#breed-title').text("#Random_Doggies")
                                /**For Each loop that loops through each element of the 
                                 * return data's array storing each element in a variable
                                 * called pic then creating a block of html code using the 
                                 * jQuery append method to insert the value of the pic 
                                 * variable in a img tag... 
                                 * */
                                returnedData.forEach((pic) => {
                                    /**This uses the jQuery append method to add a .pic-card 
                                     * block of code to the .random-pics .pic-grid...
                                     * */
                                    $('.pictures .pics-grid').append(
                                        "<!-- start of pic-card --><div class='pic-card cell small-12 medium-6 large-4'>" +
                                        "<!-- start of card --><div class='card'><!-- start of img-placeholder --><div class='img-placeholder'>" +
                                        "<a href='"+ pic +"' download><img src='" + pic + "' alt=''></img></a></div><!-- end of img-placeholder --><!-- start of rating -->" +
                                        "<div class='rating'><a href='"+ pic +"' id='like' download>Link <i class='fa fa-link' aria-hidden='true'></i>" +
                                        "</a></div><!-- end of rating --></div><!-- end of card --></div><!-- end of pic-card -->" 
                                    )
                                })
                            // Else statement that displays and error message...
                            } else {
                                /**If false: */
                                /**This uses the jQuery append method to add an 
                                 * error message to the .random-pics .pic-grid... 
                                 * */
                                $('.random-pics .pics-grid').append(
                                    "h2>Sorry, there was an error!</h2>"
                                )
                            }
                        })
                    }
                }
            })
            /**The GET request done function that has a callback function 
             * to get retrive the data from the GET request and store that 
             * data into an arrary variable, then it uses a for each loop 
             * to create a html code block that uses each element of the 
             * data array... 
             * */
            request.done((data) => {
                // Stores the return data from the GET request...
                returnedData = data.message
                /**If statement to check if there is data returned 
                 * from the if api's GET request length is greater 
                 * than or equal to one...
                 * */
                if (returnedData.length >= 1) {
                    /**If true: */
                    // Changes the #error css display property to none using the jQuery css method...
                    $("#error").css({
                        display: 'none'
                    })
                    // Removes the .pic-card div using from the html using the jQuery remove method...
                    $('.pic-card').remove()
                    // Changes the text value of the #breed-title element using the jQuery text method...
                    $('#breed-title').text("#" + hound + "_" + breed)
                    /**For Each loop that loops through each element of the 
                     * return data's array storing each element in a variable
                     * called pic then creating a block of html code using the 
                     * jQuery append method to insert the value of the pic 
                     * variable in a img tag... 
                     * */
                    returnedData.forEach((pic) => {
                        /**This uses the jQuery append method to add a .pic-card 
                         * block of code to the .pictures .pic-grid...
                         * */
                        $('.pictures .pics-grid').append(
                            "<!-- start of pic-card --><div class='pic-card cell small-12 medium-6 large-4'>" +
                            "<!-- start of card --><div class='card'><!-- start of img-placeholder --><div class='img-placeholder'>" +
                            "<a href='"+ pic +"' download><img src='" + pic + "' alt=''></img></a></div><!-- end of img-placeholder --><!-- start of rating -->" +
                            "<div class='rating'><a href='"+ pic +"' id='like' download>Link <i class='fa fa-link' aria-hidden='true'></i>" +
                            "</a></div><!-- end of rating --></div><!-- end of card --></div><!-- end of pic-card -->" 
                        )
                    })
                }
            })
        // Else statement that processes a GET request using user input that doesn't contain any white-spaces...
        } else {
            /**If false: */
            // Stores the string value of the input variiable...
            breed = input
            //Stores GET request for 30 searched dog imaegs...
            searchRequest = "https://dog.ceo/api/breed/" + breed + "/images/random/30"
            /**Creates the ajax request object for 30 
             * searched images from the dog ceo api...
             * */
            let request = $.ajax({
                // Stores the GET request url...
                url: searchRequest,
                // Stores the request method type...
                method: "GET",
                // Stores the erroe fallback function that takes in three parameters...
                error: function (xhr, ajaxOptions, thrownError) {
                    /**If Else statement that checks the value of the GET request xhr 
                     * status and returns either true or false. 
                     * */
                    if (xhr.status == 404) {
                        /**If true: */
                        // Changes the #error css display property to block using the jQuery css method...
                        $("#error").css({
                            display: 'block'
                        })
                        /**Creates the ajax request object for 30 
                         * random images from the dog ceo api...
                         * */
                        let fallback = $.ajax({
                            // Stores the GET request url...
                            url: randomRequest,
                            // Stores the request method type...
                            method: "GET"
                        })
                        /**The GET request done function that has a callback function 
                         * to get retrive the data from the GET request and store that 
                         * data into an arrary variable, then it uses a for each loop 
                         * to create a html code block that uses each element of the 
                         * data array... 
                         * */
                        fallback.done((data) => {
                            // Stores the return data from the GET request...
                            let returnedData = data.message
                            /**If statement to check if there is data returned 
                             * from the if api's GET request length is greater 
                             * than or equal to one...
                             * */
                            if (returnedData.length >= 1) {
                                /**If true: */
                                // Removes the .pic-card div from the html document usin the jQuery remove element...
                                $('.pic-card').remove()
                                // Changes the #brred-ttile's text using the jQuery text method...
                                $('#breed-title').text("#Random_Doggies")
                                /**For Each loop that loops through each element of the 
                                 * return data's array storing each element in a variable
                                 * called pic then creating a block of html code using the 
                                 * jQuery append method to insert the value of the pic 
                                 * variable in a img tag... 
                                 * */
                                returnedData.forEach((pic) => {
                                    /**This uses the jQuery append method to add a .pic-card 
                                     * block of code to the .random-pics .pic-grid...
                                     * */
                                    $('.pictures .pics-grid').append(
                                        "<!-- start of pic-card --><div class='pic-card cell small-12 medium-6 large-4'>" +
                                        "<!-- start of card --><div class='card'><!-- start of img-placeholder --><div class='img-placeholder'>" +
                                        "<a href='"+ pic +"' download><img src='" + pic + "' alt=''></img></a></div><!-- end of img-placeholder --><!-- start of rating -->" +
                                        "<div class='rating'><a href='"+ pic +"' id='like' download>Link <i class='fa fa-link' aria-hidden='true'></i>" +
                                        "</a></div><!-- end of rating --></div><!-- end of card --></div><!-- end of pic-card -->" 
                                    )
                                })
                            // Else statement that displays and error message...
                            } else {
                                /**If false: */
                                /**This uses the jQuery append method to add an 
                                 * error message to the .random-pics .pic-grid... 
                                 * */
                                $('.random-pics .pics-grid').append(
                                    "h2>Sorry, there was an error!</h2>"
                                )
                            }
                        })
                    }
                }
            })
            /**The GET request done function that has a callback function 
             * to get retrive the data from the GET request and store that 
             * data into an arrary variable, then it uses a for each loop 
             * to create a html code block that uses each element of the 
             * data array... 
             * */
            request.done((data) => {
                // Stores the return data from the GET request...
                returnedData = data.message
                /**If statement to check if there is data returned 
                 * from the if api's GET request length is greater 
                 * than or equal to one...
                 * */
                if (returnedData.length >= 1) {
                    /**If true: */
                    // Changes the #error css display property to none using the jQuery css method...
                    $("#error").css({
                        display: 'none'
                    })
                    // Removes the .pic-card div using from the html using the jQuery remove method...
                    $('.pic-card').remove()
                    // Changes the text value of the #breed-title element using the jQuery text method...
                    $('#breed-title').text("#" + breed)
                    /**For Each loop that loops through each element of the 
                     * return data's array storing each element in a variable
                     * called pic then creating a block of html code using the 
                     * jQuery append method to insert the value of the pic 
                     * variable in a img tag... 
                     * */
                    returnedData.forEach((pic) => {
                        /**This uses the jQuery append method to add a .pic-card 
                         * block of code to the .pictures .pic-grid...
                         * */
                        $('.pictures .pics-grid').append(
                            "<!-- start of pic-card --><div class='pic-card cell small-12 medium-6 large-4'>" +
                            "<!-- start of card --><div class='card'><!-- start of img-placeholder --><div class='img-placeholder'>" +
                            "<a href='"+ pic +"' download><img src='" + pic + "' alt=''></img></a></div><!-- end of img-placeholder --><!-- start of rating -->" +
                            "<div class='rating'><a href='"+ pic +"' id='like' download>Link <i class='fa fa-link' aria-hidden='true'></i>" +
                            "</a></div><!-- end of rating --></div><!-- end of card --></div><!-- end of pic-card -->" 
                        )
                    })
                }
            })
        }
    })

    // Calls the initial run function...
    init()
})