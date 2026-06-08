# Appointment Booking Integration

Remove the current CTA text:

"Start Your Project"

Replace with:

"Book A Strategy Call"

Secondary Button:

"Let's Talk"

---

## Booking System

Do NOT build a custom appointment system.

Do NOT create:

- Database tables
- Booking APIs
- Admin panels
- Slot management logic
- Calendar management logic

Instead integrate Cal.com.

Reason:

- Open source
- Free
- Reliable
- Professional
- Google Calendar integration
- Automatic timezone handling

---

## CTA Behavior

When user clicks:

"Book A Strategy Call"

Open:

Cal.com booking page

or

Cal.com modal popup

Preferred:

Modal Popup

User should never leave the website.

---

## Booking Flow

User selects:

- Date
- Available Time Slot

Then enters:

- Name
- Email
- Project Idea

Then books meeting.

---

## Meeting Type

Create a booking event:

Builder Studio Strategy Call

Duration:

30 Minutes

Location:

Google Meet

---

## Confirmation

After booking:

Show success state:

"Your strategy call has been scheduled."

"We'll meet you on the selected date and discuss your startup idea."

---

## Design Requirements

Maintain existing Builder Studio design language.

Dark theme.

Emerald accents.

Glass styling.

No default Cal.com styling visible if possible.

Embed inside premium modal.

---

## Technical Requirements

Use official Cal.com embed SDK.

Implement:

@calcom/embed-react

Do not create custom booking infrastructure.

Keep implementation lightweight.

The entire scheduling system should be powered by Cal.com.

No backend changes required.