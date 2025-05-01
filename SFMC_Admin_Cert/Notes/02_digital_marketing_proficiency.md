# 02 – Digital Marketing Proficiency: Governance & Compliance

## 🎥 Video: Deliverability

### 📑 Key Concepts

In this section, we focus on **governance and compliance** as they relate to digital marketing, as well as **security best practices** for handling **data permissions** and **Personally Identifiable Information (PII)** in Marketing Cloud.

- **Marketing Cloud** is a **permission-based platform**: No communication should be sent unless **explicit permission** is obtained from the recipient.
  - This applies to all channels: email, SMS, phone, etc.
  - Adhere to best practices outlined by Salesforce for compliance.

---

### 🛑 **Never store sensitive data in Marketing Cloud**

- **Sensitive data** includes:
  - Payment details
  - Social Security numbers
  - Personal identification information
- Sensitive data should be stored in secure systems, not in Marketing Cloud.

Refer to **Trailhead Security Module** for handling sensitive data and security practices.

---

### 🖥️ **Sender Authentication & IP Setup**

- **IP Types**: 
  - You can choose a **shared** or **dedicated IP** for your Marketing Cloud instance, depending on your requirements.
  - **Dedicated IP**: Better control over reputation and deliverability.

- **Subdomains**: 
  - Always use a **subdomain** (e.g., `email.acme.com`) for your email marketing activities to separate it from your website’s main domain.

- **Sender Authentication Package (SAP)**: 
  - A package to authenticate your private domain and IP.
  - It allows you to manage your sender reputation, configure mail management, and handle security (e.g., SPF, DKIM, DMARC).

---

### 🌐 **Domain Management**

- Be cautious with domain names. Changing domains can be difficult, so choose them wisely.
- For example, don't mix your main website's domain with your email marketing domain.
- **IP Warm-up**: 
  - A process of gradually increasing the number of emails sent over time to build up the domain's reputation.
  - **Essential if sending 100,000+ emails per month**.
  - Warm-up involves starting with a small volume (e.g., 5,000 emails/day) and increasing gradually.

---

### 📊 **Compliance Best Practices**

Ensure that your emails comply with legal regulations such as **CAN-SPAM** and **GDPR**. 

1. **Opt-in Consent**: Always get **clear consent** from recipients for each communication channel.
2. **Engage Subscribers**: Focus on delivering value to recipients, and help marketers **remove inactive subscribers** to maintain list health.
3. **Remove Bounce Addresses**: Regularly clean your list to avoid high bounce rates. Aim for **less than 10%**.

---

### 📝 **Key Compliance Guidelines for Admin Certification**

For the **Salesforce Marketing Cloud Admin Certification**, ensure you understand these compliance rules:

1. **Accurately identify the sender** in the email header.
2. **Subject line** should clearly represent the content of the email.
3. Clearly identify the email as an **advertisement**, avoiding any deceptive promotional tactics.
4. Include your **physical mailing address** in the email.
5. Provide a **clear opt-out** mechanism (e.g., one-click unsubscribe).
6. **Honor opt-out requests** promptly (within 10-30 days).

---

### 📜 **GDPR Considerations**

- **Right to Erasure**: Under GDPR, individuals can request the deletion of their data.
- **Contact Delete Functionality**: 
  - **Enable this feature** in the contact configuration.
  - Deletion can be done either through the **API** or **manually**.
  - Once deleted, data cannot be recovered.

Ensure full compliance with **legal regulations** regarding data handling and privacy.

# 02 – Digital Marketing Proficiency: Security Best Practices

## 🎥 Video: Security Best Practices

### 📑 Key Concepts

One of the key learning objectives of this section is to understand **security best practices** for handling **data permissions** and **Personally Identifiable Information (PII)** in Marketing Cloud. 

Salesforce places a high value on **trust** and **security**, which are foundational to the platform. As part of this, **Marketing Cloud** was one of the first applications to enforce **multi-factor authentication (MFA)**.

---

### 🔐 **Multi-Factor Authentication (MFA)**

- **MFA Options** for admins in Marketing Cloud:
  1. **Salesforce Authenticator Mobile App** (easiest and least friction).
  2. **Security Keys** (supports U2F and WebAuth, e.g., YubiKey or Google Titan).
  3. **One-Time Passwords (OTP)** using apps like Google Authenticator or Microsoft Authenticator.
  
- **Single Sign-On (SSO)**: Allows authentication via **SAML 2.0**, either using **Salesforce Federated Authentication** or another service. This requires coordination with your security and compliance teams.

---

### 🗂️ **SFTP for Data Management**

- **SFTP (Secure File Transfer Protocol)** is used to import and export data files across instances.
- You need to manage access and passwords for the **SFTP**.
- Be mindful of **password expiration** (every 90 days) and maintain access to integrations, automations, and changes.
  
- **Audit Trail**: Admins can access a basic audit trail for:
  - User authentication.
  - IP address changes.
  - User roles and permissions changes.
  - Security settings updates, including logins, password changes, and logouts.
  
- **Advanced Audit Trail**: An extended version is available for deeper monitoring.

---

### 🔑 **Password and App Access Security**

- **Strict Password Requirements**:
  - Enforce length, character diversity, and expiration rules for all accounts.
  
- **Role-based Access Control**: As a Marketing Cloud administrator, you will assign **roles and permissions** to ensure that users only have access to the necessary resources.

---

### 🔒 **Metadata and Data Security**

- **SSL Certificates**: Use SSL to secure **cloud pages** (URLs), **landing pages**, and **email links** from Email Studio.
  
- **Encryption**: 
  - Avoid passing **identifiers** (e.g., subscriber ID, contact ID) in URLs.
  - Use **encryption** instead of base64 encoding for sensitive data.

- **Server-Side Processing**: Ensure that all field processing and validation occur on the **server side**, not the client side.

- **Authentication and Security Headers**: Apply authentication for application pages and enable security headers using **server-side JavaScript**.

---

### 📊 **Data Access Control**

- **Business Units**: 
  - Business units help to segment your Marketing Cloud instance (e.g., by region).
  - Admins assign users to specific **business units** based on operational needs.

- **Access Tokens**:
  - Work closely with the development team to ensure **access tokens** are granted only for necessary tasks.
  - Keep tokens secure and use **TLS** for API requests to **tenant-specific endpoints**.

- **Tokenized Sending**:
  - Use **tokenized sending** to handle sensitive data (like PII or protected health information) that should not be stored in Marketing Cloud.
  - Tokenized data is only transmitted at the time of sending, reducing the risk of exposure.
  
---

### 🧠 **Summary**

In this section, we covered the critical security best practices that every Marketing Cloud Administrator should follow. Ensuring **data protection**, **secure access**, and **compliance with regulations** is key to maintaining the trust that Salesforce places at the center of its platform.

---


