# EmailJS Configuration Guide

## Setup Instructions

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create Email Service**
   - Go to "Email Services" in the dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Copy the Service ID

3. **Create Email Templates**
   
   You need to create TWO templates:
   
   ### Template 1: Enterprise Inquiries
   - Name: "Enterprise Contact Form"
   - Subject: "New Enterprise Inquiry - {{title}}"
   - Content:
     ```
     From: {{from_email}}
     Company: {{company}}
     Subject: {{title}}
     
     Message:
     {{description}}
     ```
   
   ### Template 2: General Questions
   - Name: "General Contact Form"
   - Subject: "New Contact Form Submission - {{title}}"
   - Content:
     ```
     From: {{from_email}}
     Subject: {{title}}
     
     Message:
     {{description}}
     ```

4. **Get Your Credentials**
   - Service ID: Found in "Email Services"
   - Template IDs: Found in "Email Templates" (one for each template)
   - Public Key: Found in "Account" > "General"

5. **Update .env File**
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID_ENTERPRISE=your_enterprise_template_id
   VITE_EMAILJS_TEMPLATE_ID_GENERAL=your_general_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Testing

After configuration:
1. Restart your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and test both Enterprise and General form types
4. Check your email inbox for the messages

## Features Implemented

✅ Two form types: General Questions & Enterprise Solutions
✅ Full form validation with error messages
✅ Email format validation
✅ Minimum character requirements
✅ Beautiful loading animation in submit button
✅ Success/Error notifications with auto-dismiss
✅ Smooth animations and transitions
✅ Dark mode support
✅ Responsive design
✅ Direct navigation from Enterprise pricing card to contact form

## Form Fields

**General Form:**
- Email (required)
- Subject (required, min 3 chars)
- Message (required, min 10 chars)

**Enterprise Form:**
- Email (required)
- Company Name (required)
- Subject (required, min 3 chars)
- Message (required, min 10 chars)
