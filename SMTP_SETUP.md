# SMTP2GO setup

The Next.js contact and pricing forms send through the SMTP2GO API route at
`/app/api/send-email/route.ts`.

## Required environment variables

Create a local `.env.local` file or configure these variables in your hosting
provider:

```bash
CONTACT_FORM_RECIPIENT=stropynamieru@gmail.com
SMTP2GO_API_KEY=api-xxxxxxxxxxxxxxxxxxxxxxxx
SMTP2GO_SENDER=stropynamieru@gmail.com
```

## Notes

- `SMTP2GO_SENDER` must be a verified sender address in SMTP2GO.
- `CONTACT_FORM_RECIPIENT` is where form submissions will be delivered.
- In production, add the same variables to your deployment environment before
  enabling the forms.
