# Gram Panchayat Website - Complete Setup Guide

## Prerequisites

**Angular Frontend:**
- Node.js v18 or higher
- Angular CLI 16
- npm or yarn

**.NET Backend:**
- .NET 7 SDK
- SQL Server (LocalDB or SQL Server Express)
- Visual Studio 2022 or VS Code with C# extension

---

## Quick Start

### 1. Angular Frontend

```bash
cd angular-angular-gram-panchayat
npm install
ng serve
# App runs at http://localhost:4200
```

### 2. .NET Backend

```bash
cd PanchayatAPI
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
# API runs at https://localhost:7000
```

### 3. Update API URL

Edit `angular-angular-gram-panchayat/src/app/services/api/api.service.ts`:
```typescript
private apiUrl = 'https://localhost:7000/api';
```

---

## Detailed Setup

### Angular Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Angular CLI globally:**
   ```bash
   npm install -g @angular/cli@16
   ```

3. **Configure API URL** in `src/app/services/api/api.service.ts`

4. **Run development server:**
   ```bash
   ng serve
   ```

### .NET Setup

1. **Restore packages:**
   ```bash
   dotnet restore
   ```

2. **Install EF Core tools (if needed):**
   ```bash
   dotnet tool install --global dotnet-ef
   ```

3. **Create migration:**
   ```bash
   dotnet ef migrations add InitialCreate
   ```

4. **Update database:**
   ```bash
   dotnet ef database update
   ```

5. **Run API:**
   ```bash
   dotnet run
   ```

---

## API Endpoints

All endpoints support `?lang=mr|en|hi` parameter.

- `GET /api/services?lang=mr` - Get services
- `GET /api/notices?lang=mr` - Get notices
- `GET /api/blogs?lang=mr` - Get blogs
- `GET /api/officers?lang=mr` - Get officers
- `GET /api/schemes?lang=mr` - Get schemes
- `GET /api/gallery?lang=mr` - Get gallery items
- `POST /api/auth/login` - Login (admin/admin123)

---

## Default Credentials

- Username: `admin`
- Password: `admin123`

---

## Troubleshooting

### CORS Errors
- Verify CORS in `Program.cs` allows `http://localhost:4200`

### Database Errors
- Check connection string in `appsettings.json`
- Ensure SQL Server LocalDB is running

### Translation Errors
- Verify JSON files exist in `src/assets/i18n/`

---

For complete documentation, see the main README file.

