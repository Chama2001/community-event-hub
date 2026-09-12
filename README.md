# 🎟️ Local Community Event & Hackathon Hub

An all-in-one platform built for tech communities, developer networks, and local clubs to streamline event management. This system provides instant event creation, QR-code based attendance tracking, and automated certificate email generation.

## 🏛️ Architecture Stack
*   **Frontend -** Next.js 14, React, Tailwind CSS
*   **Backend Engine -** Python, Flask
*   **Database -** Relational schema (MySQL) for event and attendee management
*   **Features -** QR Code Generation, Automated Emailing (SMTP)

## 📂 Repository Structure
```text
community-event-hub/
│
├── 01-nextjs-ui/                     # Event Organizer Dashboard
│   └── app/
│       └── page.tsx                  # Event Creation UI
│
├── 02-flask-backend/                 # Core System
│   └── app.py                        # API for Registration & Certificates
│
└── 03-database-schema/               # Relational DB
    └── schema.sql                    # Events and Attendees Models
