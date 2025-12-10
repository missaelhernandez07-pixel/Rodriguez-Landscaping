Rodriguez Landscaping — Ready-to-deploy React app
==================================================

How to open in Cursor
---------------------
1. Download and unzip this project into your machine.
2. Open Cursor.
3. Click 'New Workspace' -> 'Open Folder' and select the folder you unzipped (this folder).
   - Alternatively, drag the folder into Cursor to open it as a workspace.

Install & Run locally (inside Cursor terminal)
---------------------------------------------
# Install dependencies
npm install

# Run locally
npm start

Build production version
------------------------
npm run build
This creates a /build folder.

Deploy with Vercel (recommended)
-------------------------------
1. In Cursor terminal:
   npm i -g vercel
2. From the project root run:
   vercel
3. When prompted:
   - Link to existing project? -> No
   - Project name: (press enter or type name)
   - Framework detected: Create React App -> Yes
   - Output directory: build
4. After deployment you will get a live Vercel URL.

Quick alternative: Netlify
--------------------------
1. Build the project (npm run build).
2. Go to netlify.com -> drag the /build folder into the 'Drop your site here' area.
3. Site will be published instantly.

Need help?
----------
If you want I can:
- Walk you step-by-step in Cursor while you paste commands.
- Connect a custom domain and configure DNS.
- Wire up the contact form to send real emails.
