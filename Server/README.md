                ┌──────────────┐
                │ Register Page│
                └──────┬───────┘
                       │
             POST /api/auth/register
                       │
                       ▼
                  MongoDB(User)
                       │
                       ▼
                ┌────────────┐
                │ Login Page │
                └─────┬──────┘
                      │
          POST /api/auth/login
                      │
          Email & Password Verified
                      │
                      ▼
                 Generate JWT
                      │
                      ▼
      Store Token (localStorage)
                      │
                      ▼
          Navigate("/todo")
                      │
              Protected Route
                      │
        Token sent in Authorization Header
                      │
                      ▼
          JWT Middleware verifies token
          ┌──────────────┴──────────────┐
          │                             │
      Invalid Token                Valid Token
          │                             │
 Redirect to Login               Show Todo App
                                        │
                                        ▼
                          User performs CRUD
                                        │
                                        ▼
                    MongoDB stores only that user's tasks