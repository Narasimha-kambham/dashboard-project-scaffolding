# React Dashboard Project Scaffolding

## Overview

This project provides the foundational scaffolding for a multi-developer, role-based dashboard application.

Built with React and TypeScript, it establishes a scalable architecture with protected routing, modular layouts, and a mock authentication context.

The primary problem this project solves is establishing a secure, extensible foundation for parallel development. By abstracting routing and layout complexities early on, future developers can focus strictly on building role-specific features without worrying about authentication state, responsive navigation, or route protection.

---

## Features

- **Protected Routing** — Reusable ProtectedRoute component that guards routes against unauthenticated or unauthorized access
- **Role-based Access Control** — Native support for three distinct roles: Recruiter, Captain, Admin
- **Authentication Context** — Centralized AuthContext and useAuth() hook for state management (currently using mock data)
- **Modular Layouts** — DRY architecture featuring a core DashboardLayout wrapped by role-specific layouts
- **Responsive Navigation** — Responsive Sidebar (collapsible on mobile) and Navbar with hamburger menu
- **Role-Specific Dashboards** — Clean skeleton dashboards for each role
- **Route Testing Buttons** — Each dashboard includes buttons to test cross-role navigation
- **Error Handling** — Dedicated Unauthorized (403) and NotFound (404) pages
- **CSS Custom Properties** — Centralized theme managed via native CSS variables and CSS Modules

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | UI Library |
| TypeScript | Static Typing |
| Vite | Build Tool and Dev Server |
| React Router DOM | Client-Side Routing |
| Context API | Global State Management |
| CSS Modules | Component-Scoped Styling |

---

## Folder Structure

```
src/
├── assets/                  # Static assets
├── components/
│   ├── Navbar/              # Top navigation bar
│   ├── ProtectedRoute/      # Route guard logic
│   └── Sidebar/             # Side navigation panel
├── constants/
│   └── roles.ts             # Role definitions
├── context/
│   └── AuthContext.tsx       # Mock authentication provider
├── hooks/
│   └── useAuth.ts           # Auth context accessor
├── layouts/
│   ├── DashboardLayout.tsx   # Core shared layout
│   ├── RecruiterLayout.tsx   # Recruiter wrapper
│   ├── CaptainLayout.tsx     # Captain wrapper
│   └── AdminLayout.tsx       # Admin wrapper
├── pages/
│   ├── Admin/                # Admin dashboard
│   ├── Captain/              # Captain dashboard
│   ├── Login/                # Mock login page
│   ├── NotFound/             # 404 page
│   ├── Recruiter/            # Recruiter dashboard
│   └── Unauthorized/         # 403 page
├── routes/
│   └── AppRoutes.tsx         # Centralized route definitions
├── types/
│   └── auth.ts               # TypeScript interfaces
├── App.tsx
├── index.css
└── main.tsx
```

---

## Architecture

The application is built on a modular, feature-first architecture designed to scale.

**Separation of Concerns** — Components, layouts, pages, and context are strictly segregated.

**DRY Layouts** — A core DashboardLayout handles the Navbar, Sidebar, and responsiveness. RecruiterLayout, CaptainLayout, and AdminLayout are thin wrappers passing the correct role.

**Agnostic Auth Abstraction** — ProtectedRoute and UI components rely solely on the useAuth() hook. The actual authentication implementation is isolated to AuthContext.tsx.

**Nested Routing** — Leveraging React Router Outlet, feature pages render dynamically inside their parent layout.

---

## Routing

| Route | Access | Description |
| --- | --- | --- |
| `/` | Public | Redirects authenticated users to their dashboard, others to /login |
| `/login` | Public | Mock login page with role-switching buttons |
| `/unauthorized` | Public | 403 page shown for unauthorized role access |
| `/recruiter` | Recruiter | Protected Recruiter dashboard with test buttons |
| `/captain` | Captain | Protected Captain dashboard with test buttons |
| `/admin` | Admin | Protected Admin dashboard with test buttons |
| `*` | Public | 404 Not Found page |

---

## Authentication Flow

The current authentication is a **mock implementation** for development and testing.

1. The app initializes with `user: null` in the AuthContext
2. Unauthenticated users are redirected to `/login`
3. The login page contains mock buttons to instantly assume a role (Recruiter, Captain, or Admin)
4. Calling `login(mockUser)` updates the AuthContext and redirects to the designated dashboard
5. Calling `logout()` clears the context and returns to `/login`

---

## Protected Route Flow

```
User requests Protected Route
        │
        ▼
   isAuthenticated?
    /         \
   No          Yes
   │            │
   ▼            ▼
Redirect    User Role in
to /login   allowedRoles?
             /         \
            No          Yes
            │            │
            ▼            ▼
       Redirect      Render
    to /unauthorized  Component
```

---

## Layout Structure

```
RecruiterLayout ─┐
CaptainLayout ───┼──▶ DashboardLayout (Navbar + Sidebar)
AdminLayout ─────┘            │
                              ▼
                      React Router Outlet
                              │
                              ▼
                     Role-Specific Pages
```

---

## How to Extend

### Adding a New Protected Route

1. Create the page component in `src/pages/Recruiter/Pipeline.tsx`
2. Open `src/routes/AppRoutes.tsx`
3. Add a child route inside the appropriate Route block:

```tsx
<Route path="pipeline" element={<Pipeline />} />
```

### Adding a New Role

1. Update `UserRole` in `src/types/auth.ts`
2. Add the new role to `ROLES` in `src/constants/roles.ts`
3. Create a layout wrapper that passes the new role to DashboardLayout
4. Register the new protected route block in AppRoutes.tsx

---

## Installation

### Prerequisites

- Node.js v18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/Narasimha-kambham/dashboard-project-scaffolding.git
cd dashboard-project-scaffolding

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Screenshots

### Login
*(Add screenshot)*

### Recruiter Dashboard
*(Add screenshot)*

### Captain Dashboard
*(Add screenshot)*

### Admin Dashboard
*(Add screenshot)*

### Unauthorized
*(Add screenshot)*

---

## Future Improvements

- Replace mock AuthContext with real authentication
- Fetch navigation links dynamically based on role and permissions
- Implement lazy loading with React.lazy and Suspense for nested routes

---

## Author

*(Placeholder)*