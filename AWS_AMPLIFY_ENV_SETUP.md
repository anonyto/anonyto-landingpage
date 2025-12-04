# AWS Amplify Environment Variables Setup

## Required Environment Variables

Add these to AWS Amplify Console → Your App → Environment variables:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

VITE_EMAILJS_SERVICE_ID_GENERAL=your_general_service_id
VITE_EMAILJS_TEMPLATE_ID_GENERAL=your_general_template_id

VITE_EMAILJS_SERVICE_ID_ENTERPRISE=your_enterprise_service_id
VITE_EMAILJS_TEMPLATE_ID_ENTERPRISE=your_enterprise_template_id
```

## How to Add Environment Variables in AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Select your app: **Anonyto_LandingPage**
3. Go to **"Environment variables"** in the left sidebar
4. Click **"Manage variables"**
5. Add each variable:
   - Click **"Add variable"**
   - Enter the **Key** (e.g., `VITE_EMAILJS_PUBLIC_KEY`)
   - Enter the **Value** (use the values from your `.env` file)
   - Repeat for all 5 variables
6. Click **"Save"**
7. **Redeploy** your app for changes to take effect

## Important Notes

⚠️ **All variables must start with `VITE_`** - This is required by Vite to expose them to the client-side code.

✅ After adding variables, always **redeploy** the app to apply changes.

✅ Environment variables are encrypted and secure in AWS Amplify.

## Configuration Summary

- **Public Key:** Used for EmailJS authentication (same for both services)
- **General Service:** For regular user questions
- **Enterprise Service:** For company inquiries

## Testing After Deployment

1. Visit your deployed site
2. Go to the Contact section
3. Test both form types:
   - General Questions form
   - Enterprise Solutions form
4. Verify emails are received at your configured EmailJS email address
