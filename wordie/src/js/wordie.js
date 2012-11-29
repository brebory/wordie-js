
    /*********************** PASSWORDIFIER CLASS DEFINITIONS **********************/

    function PassWordifier() {
        /* Array of different types of conversion methods to be accessed by
           passWordify method */
           
        var conversions = [convert1, convert2, convert3, convert4];

		/* PRIVATE METHODS */
	
		/* Returns lowercase version of char */
		function convert1(char) {
			return char.toLowerCase();
		}
	
		/* Returns char converted into its index in the alphabet, with second number,
		   (if there is one) converted to its corresponding symbol on the keyboard. */
		function convert2(char) {
            var index = char.toAlphabetIndex();
            /* If index is 2 numbers, convert second to symbol, leave first. If only 1,
               just return first number */     
            if(index.length === 2) {
                return index.charAt(0) + index.charAt(1).numToSymbol();
            } else if (index.length === 1) {
                return index;
            }
		}

		/* Returns uppercase version of char */
		function convert3(char) {
			return char.toUpperCase();
		}

		/* Same as convert2, except first number is symbol, second is number */
		function convert4(char) {
            var index = char.toAlphabetIndex();
            /* If index is 2 numbers, convert first to symbol, leave second. If only 1,
               just return first as symbol */     
            if(index.length === 2) {
                return index.charAt(0).numToSymbol() + index.charAt(1);
            } else if (index.length === 1) {
                return index.numToSymbol();
            }		
        }
        
        /* PUBLIC METHODS */
        
        this.passWordify = function(str) {
            var arr = str.split("");
			return arr.doForEach(conversions).join("");
		};
	}

    /***************** JAVASCRIPT CORE FUNCTION EXTENSIONS ********************/


    /* Returns the alphabet index ( a => 1, b => 2, c => 3, etc)
       of the input letter as a string */
    
    String.prototype.toAlphabetIndex = function() {
        /* If this is more than one letter, can't do it. I might fix this later.
           With RECURSION! */
        if(this.length > 1) {
            console.log("toAlphabetIndex can only be called on strings of length 0");
            return;
        } else {
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            return (alphabet.indexOf(this.toLowerCase()) + 1).toString();
        }
    };
    
    String.prototype.stripNonAlphabetic = function() {
        return this.replace(/[^a-zA-Z]/g, "");
    };
    
    /* Converts number string to corresponding number on keyboard! */
    String.prototype.numToSymbol = function() {
        /* Again, only works on strings of length 1 for now! */
        if(this.length > 1) {
            console.log("numToSymbol can only be called on strings of length 1");
            return;
        }  else {
            switch (parseInt(this, 10)) {
                case 0:
                    return ")";
                case 1:
                    return "!";
                case 2:
                    return "@";
                case 3:
                    return "#";
                case 4:
                    return "$";
                case 5:
                    return "%";
                case 6:
                    return "^";
                case 7:
                    return "&";
                case 8:
                    return "*";
                case 9:
                    return "(";
            }
        }
    };
    
    /* Returns array modified by the passed in function
       funcs is an array of functions to cycle through on each iteration */
    
    Array.prototype.doForEach = function(funcs) {
		var arrLength = this.length;
        var numFuncs = funcs.length;
		var element;
		for(var i = 0; i < arrLength; i++) {
			this[i] = funcs[i % numFuncs](this[i]);
		}
        return this;
	};
    
//    /****************************** TEST FUNCTIONS *****************************/
    
//     /* Test functions! testing if doForEach works as expected,
//        mainly, I have no clue if passing in an array of functions works
//        how I think it should work. */
       
//     var testDoForEach = function(funcs, arr) {
//         /* Expected result of doForEach with arr = ['Cat', 'Dog', 'Hamster'] */
        
//         expected = ["CAT", "dog", "HAMSTER"];
//         actual = arr.doForEach(funcs);
        
//         /* I don't know how to check if funcs passes in as we expect, but
//            if doForEach works, then we know that funcs is also correct. */
        
//         console.log(funcs);
        
//         /* I just like to see logged input of shit, so here's some CAT */
        
//         console.log(funcs[0](arr[0]));
//         console.log(actual[0] === expected[0]);
//         console.log(actual[1] === expected[1]);
//         console.log(actual[2] === expected[2]);
//     };
    
//     /* Test toAlphabetIndex! */
//     var testToAlphabetIndex = function() {
//         var expected;
//         var actual;
//         var testAlphabet = "abcdefghijklmnopqrstuvwxyz";
//         for(var i = 1; i < 27; i++) {
//             expected = i.toString();
//             actual = testAlphabet.charAt(i-1).toAlphabetIndex();
//             console.log(actual);
//             console.log(expected);
//             console.log(expected === actual);
//         }
//     };
    
//     /* Testing numToSymbol */
    
//     var testNumToSymbol = function() {
//         var expected_arr = ")!@#$%^&*(";
//         var expected;
//         var actual;
//         for(var i = 0; i < 10; i++){
//             expected = expected_arr.charAt(i);
//             actual = i.toString().numToSymbol();
//             console.log(expected === actual);
//         }
//     };
    
//     /* Testing passWordifier! */
	
//     var testPassWordifier = function(str) {
// 		var testPassWordifier = new PassWordifier();
//         expected = "t5S@0";
//         actual = testPassWordifier.passWordify(str);
// 		console.log(expected === actual);	
//         console.log(actual);
// 	};
    
//     var testStripNonAlphabetic = function() {
//         var expected = "abcdef";
// 		var actual = "#abc()@# $ ` def".stripNonAlphabetic();
// 		console.log(expected === actual);
// 	};
    
//     function foo(str) {
//         return str.toUpperCase();
//     }
    
//     function bar(str) {
//         return str.toLowerCase();
//     }
    
//     //var strings = ["Cat", "Dog", "Hamster"];
//     //var funcArray = [foo, bar];
//     //testDoForEach(funcArray, strings);
//     //testToAlphabetIndex();
//     //testNumToSymbol();
//     testStripNonAlphabetic();
// 	testPassWordifier("test");
    