// Usercontext.js
// Creates and exports a React Context object for user-related data.
// This file defines a single context that can be provided at a
// high level in the component tree and consumed by any descendant
// component that needs access to user state or actions.

import React from 'react';

// Create a context with no default value. Consumers should be wrapped
// by a Provider that supplies the actual user data and functions.
const UserContext = React.createContext();

export default UserContext;