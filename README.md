# Next.js Router: Missing Error Handling for Non-Existent Routes

This repository demonstrates a common error in Next.js applications related to the router:  failure to handle cases where `router.push` attempts to navigate to a route that does not exist.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

**Problem:**

The `router.push` method in Next.js doesn't inherently throw errors when navigating to an invalid route. This can lead to silent failures and unexpected application behavior.  The application might appear to hang, or the user might experience unexpected navigation.

**Solution:**

The solution involves implementing proper error handling mechanisms.  This could involve using `router.events` to listen for route changes and checking for errors, or creating a custom error boundary. The `bugSolution.js` file demonstrates one such solution.