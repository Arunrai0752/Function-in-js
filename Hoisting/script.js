
// 1. FUNCTION DECLARATION - HOISTED (works when called before declaration)
call(); // Works because function declarations are hoisted

function call() {
    console.log("Hello Arun");    
}

call(); // Also works normally

// 2. FUNCTION EXPRESSION - NOT HOISTED (fails if called before declaration)
// call1(); // Error: Cannot access 'call1' before initialization

const call1 = function() {
    console.log("Namaste Arun");
} 

call1(); // Works (called after assignment)

// 3. ARROW FUNCTION - NOT HOISTED (same behavior as expressions)
// Call2(); // Error: Cannot access 'Call2' before initialization

const Call2 = () => {
    console.log("Bonjour Arun");
}

Call2(); // Works (called after assignment)


// Key Differences:
// Function Declarations (function call() {...}):

// Fully hoisted (can be called before declaration)

// The entire function is moved to the top of its scope

// Function Expressions (const call1 = function() {...}):

// Not hoisted

// Behaves like a variable (must be assigned before use)

// Arrow Functions (const Call2 = () => {...}):

// Also not hoisted

// Follows the same rules as function expressions