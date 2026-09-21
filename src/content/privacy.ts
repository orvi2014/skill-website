import { HEADER_CSS, headerHtml } from "./siteHeader";
import { HOME_FOOTER_CSS, homeDesktopFooterHtml } from "./homeFooter";

export const PRIVACY_EFFECTIVE = "July 1, 2026";

export const PRIVACY_CSS = `
${HEADER_CSS}
${HOME_FOOTER_CSS}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;scroll-padding-top:130px;}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto;} .pp-reveal{opacity:1!important;transform:none!important;transition:none!important;}}
body{margin:0;background:#EDEDEB;color:#141414;}
a{color:#7B2C8E;} a:hover{color:#5c1f6d;}
.pp-reveal{opacity:0;transform:translateY(18px);transition:opacity .9s cubic-bezier(.2,.72,.2,1),transform .9s cubic-bezier(.2,.72,.2,1);will-change:opacity,transform;}
.pp-reveal.in{opacity:1;transform:none;}
.pp-toc{position:relative;border-left:2px solid #d7d7d2;}
.pp-toc a{display:flex;align-items:center;gap:12px;text-decoration:none;color:#5b5b58;font:500 16px/1.35 'Space Grotesk';padding:13px 0 13px 20px;transition:color .3s cubic-bezier(.2,.72,.2,1),transform .3s cubic-bezier(.2,.72,.2,1);}
.pp-toc a span{font:600 11px 'Space Grotesk';letter-spacing:.06em;color:#9a9a95;font-variant-numeric:tabular-nums;transition:color .3s ease;}
.pp-toc a:hover{color:#141414;transform:translateX(3px);}
.pp-toc a:hover span{color:#7B2C8E;}
.pp-toc a[aria-current="true"]{color:#141414;font-weight:600;}
.pp-toc a[aria-current="true"] span{color:#7B2C8E;}
.pp-toc-bar{position:absolute;left:-2px;width:2px;background:#7B2C8E;border-radius:2px;transition:top .42s cubic-bezier(.2,.72,.2,1),height .42s cubic-bezier(.2,.72,.2,1);}
.pp-body p{font:400 clamp(17.5px,1.2vw,19.5px)/1.76 'Space Grotesk';color:#5b5b58;margin:0 0 20px;text-wrap:pretty;}
.pp-body ul{margin:0 0 22px;padding:0;list-style:none;display:flex;flex-direction:column;gap:13px;}
.pp-body li{position:relative;font:400 clamp(17px,1.15vw,19px)/1.72 'Space Grotesk';color:#5b5b58;padding-left:26px;text-wrap:pretty;}
.pp-body li::before{content:"";position:absolute;left:2px;top:.66em;width:9px;height:2px;background:#7B2C8E;}
.pp-body li strong{color:#141414;font-weight:600;}
.pp-body h2{font-family:'Archivo';font-weight:800;font-size:clamp(1.7rem,2.7vw,2.35rem);line-height:1.07;letter-spacing:-.02em;color:#141414;margin:0 0 20px;}
.pp-body h3{font-family:'Archivo';font-weight:700;font-size:18px;letter-spacing:.01em;color:#141414;margin:28px 0 12px;}
.pp-sec{padding:clamp(44px,5vw,64px) 0;border-top:1px solid #d7d7d2;}
.pp-sec:first-of-type{border-top:none;padding-top:0;}
.pp-body .pp-num{font:600 12px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#7B2C8E;margin:0 0 14px;}
.pp-card{background:#fff;border:1px solid #e2e2de;border-radius:14px;padding:clamp(22px,2.4vw,30px);}
@media (max-width:1024px){
  .pp-grid{grid-template-columns:1fr !important;gap:clamp(34px,5vw,48px) !important;}
  .pp-toc-wrap{position:static !important;}
  .pp-toc{display:flex;flex-wrap:wrap;gap:2px 20px;border-left:none;border-top:2px solid #d7d7d2;padding-top:6px;}
  .pp-toc a{flex:0 0 auto;white-space:nowrap;align-items:baseline;padding:10px 0;font-size:15px;}
  .pp-toc-bar{display:none;}
}
`;

type Section = { id: string; label: string; num: string; title: string; body: string };

const SECTIONS: Section[] = [
  {
    id: "who-we-are",
    label: "Who we are",
    num: "01",
    title: "Who we are",
    body: `
      <p>Skill Graphics is the image and video production brand of <strong style="color:#141414;font-weight:600;">Skill Service LTD.</strong>, a company registered in Bangladesh with its head office in Dhaka. Throughout this policy, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to Skill Service LTD., which is the party responsible for the personal information described here.</p>
      <p>This policy explains what we collect when you visit www.skillgraphics.biz, contact us, or work with us as a client, how that information is used and protected, and the choices you have over it.</p>`,
  },
  {
    id: "information-we-collect",
    label: "Information we collect",
    num: "02",
    title: "What personal information we collect",
    body: `
      <p>We only collect information that we need in order to answer an enquiry, deliver production work, or keep the website running. Depending on how you interact with us, this may include:</p>
      <ul>
        <li><strong>Contact and enquiry details</strong> &mdash; your name, email address, phone number, company name, and the content of the message you send through our contact form, our AI chat assistant, or by email.</li>
        <li><strong>Project information</strong> &mdash; briefs, product images, video footage, reference files, feedback and other material you or your team upload or send to us so that we can carry out the work.</li>
        <li><strong>Newsletter details</strong> &mdash; the email address you give us when you subscribe to updates, and whether you have opened or clicked a message.</li>
        <li><strong>Billing details</strong> &mdash; company billing name and address, invoice records and payment references. Card details are entered directly with our payment processor and are never stored on our systems.</li>
        <li><strong>Technical and usage data</strong> &mdash; IP address, browser and device type, pages viewed, referring page and approximate location, collected through analytics and advertising cookies.</li>
      </ul>
      <p>We do not ask for special categories of data (such as health, political or biometric information), and we do not knowingly collect information from children.</p>`,
  },
  {
    id: "how-we-use-it",
    label: "How we use it",
    num: "03",
    title: "How we use your information",
    body: `
      <ul>
        <li><strong>To respond to you</strong> &mdash; replying to enquiries received through the contact form, the AI chat assistant, email or a booked meeting.</li>
        <li><strong>To deliver the work</strong> &mdash; producing, editing, reviewing and delivering images and video, and communicating with your team during a project.</li>
        <li><strong>To run our business</strong> &mdash; quoting, invoicing, taking payment, keeping accounting records and enforcing contracts.</li>
        <li><strong>To send updates</strong> &mdash; occasional newsletters and studio news, only where you have asked to receive them. Every message includes an unsubscribe link.</li>
        <li><strong>To improve the website</strong> &mdash; understanding which pages and case studies people find useful, and fixing problems.</li>
        <li><strong>To measure our advertising</strong> &mdash; seeing which campaigns bring people to the site, and showing relevant ads on social platforms.</li>
      </ul>
      <p>We do not sell your personal information, and we do not use client project files to train third-party AI models.</p>`,
  },
  {
    id: "legal-basis",
    label: "Legal basis",
    num: "04",
    title: "Our basis for processing",
    body: `
      <p>We process personal information only where we have a proper reason to do so:</p>
      <ul>
        <li><strong>Performance of a contract</strong> &mdash; where the information is needed to quote for, carry out or invoice production work.</li>
        <li><strong>Consent</strong> &mdash; for newsletters, and for analytics and advertising cookies where consent is required. You can withdraw consent at any time.</li>
        <li><strong>Legitimate interests</strong> &mdash; to answer enquiries, secure our systems, and understand how the website is used, balanced against your privacy.</li>
        <li><strong>Legal obligation</strong> &mdash; to keep tax, accounting and company records for the periods the law requires.</li>
      </ul>`,
  },
  {
    id: "cookies",
    label: "Cookies &amp; tracking",
    num: "05",
    title: "Cookies and tracking",
    body: `
      <p>The site uses a small number of cookies and similar technologies:</p>
      <ul>
        <li><strong>Essential</strong> &mdash; needed for the site and the chat assistant to function. These cannot be switched off.</li>
        <li><strong>Analytics</strong> &mdash; Google Analytics or an equivalent tool, used in aggregate to measure traffic and page performance.</li>
        <li><strong>Advertising</strong> &mdash; Meta and LinkedIn pixels, used to measure campaign results and show relevant ads.</li>
      </ul>
      <p>You can refuse or delete cookies through your browser settings, and opt out of analytics and advertising cookies where a consent banner is shown. Blocking essential cookies may stop parts of the site from working.</p>`,
  },
  {
    id: "sharing",
    label: "Sharing with others",
    num: "06",
    title: "Whether we share your data",
    body: `
      <p>We do not sell, rent or trade personal information. We share it only with service providers who help us operate, and only to the extent they need it:</p>
      <ul>
        <li><strong>Hosting and infrastructure</strong> &mdash; the platforms that host the website and store project files.</li>
        <li><strong>Analytics and advertising</strong> &mdash; Google, Meta and LinkedIn, for the purposes described above.</li>
        <li><strong>Email and scheduling</strong> &mdash; the tools we use to send mail, newsletters and meeting invitations.</li>
        <li><strong>Payments</strong> &mdash; our payment processor and bank, for invoicing and settlement.</li>
        <li><strong>Professional advisers and authorities</strong> &mdash; accountants, auditors or regulators, where we are required to disclose information by law.</li>
      </ul>
      <p>These providers act on our instructions under written terms, and some operate in other countries, including outside Bangladesh. Where information is transferred abroad we take reasonable steps to ensure it remains protected to the standard described in this policy.</p>`,
  },
  {
    id: "security",
    label: "Storage &amp; security",
    num: "07",
    title: "How your data is stored and protected",
    body: `
      <p>Client material and business records are held on access-controlled cloud infrastructure and company systems. Our safeguards include encryption in transit (HTTPS) and at rest with our hosting providers, accounts limited to the staff who need them, multi-factor authentication on administrative tools, regular backups, and confidentiality obligations for every employee and contractor. Where a client requires it, we work under a signed non-disclosure agreement.</p>
      <p>No method of transmission or storage is completely secure. If a breach affects your personal information we will investigate it, take steps to contain it, and notify you and the relevant authority where we are required to do so.</p>`,
  },
  {
    id: "retention",
    label: "How long we keep it",
    num: "08",
    title: "How long we keep your data",
    body: `
      <ul>
        <li><strong>Enquiries that do not become projects</strong> &mdash; up to 24 months from your last contact with us.</li>
        <li><strong>Client project files and deliverables</strong> &mdash; for the duration of the engagement and up to 6 months after final delivery, unless you ask us to remove them sooner or your contract sets a different period.</li>
        <li><strong>Contracts, invoices and accounting records</strong> &mdash; for as long as tax and company law requires, normally at least 6 years.</li>
        <li><strong>Newsletter subscriptions</strong> &mdash; until you unsubscribe.</li>
        <li><strong>Analytics data</strong> &mdash; in aggregated or pseudonymised form, according to the retention settings of the tool, normally no more than 26 months.</li>
      </ul>
      <p>When a retention period ends, information is deleted or irreversibly anonymised.</p>`,
  },
  {
    id: "your-rights",
    label: "Your rights",
    num: "09",
    title: "Your privacy rights",
    body: `
      <p>You can ask us at any time to:</p>
      <ul>
        <li><strong>Access</strong> a copy of the personal information we hold about you.</li>
        <li><strong>Correct</strong> information that is inaccurate or incomplete.</li>
        <li><strong>Delete</strong> information we no longer have a reason to keep.</li>
        <li><strong>Restrict or object</strong> to a particular use of your information, including direct marketing.</li>
        <li><strong>Withdraw consent</strong> you previously gave, for example to newsletters or non-essential cookies.</li>
        <li><strong>Receive your data</strong> in a portable, machine-readable format, or have it sent to another provider.</li>
      </ul>
      <p>Email <a href="mailto:support@skill.ventures">support@skill.ventures</a> with your request. We may ask you to confirm your identity, and we will respond within 30 days. Making a request is free and will never affect the service you receive from us.</p>`,
  },
  {
    id: "changes",
    label: "Changes &amp; contact",
    num: "10",
    title: "Changes and how to reach us",
    body: `
      <p>We may update this policy as our services, tools or legal obligations change. The effective date at the top of the page always shows the current version, and material changes will be announced on this page. We encourage you to review it from time to time.</p>
      <div class="pp-card" style="margin-top:26px;">
        <h3 style="margin-top:0;">Privacy contact</h3>
        <p style="margin-bottom:14px;">Questions about this policy, or about how we handle your information, go to:</p>
        <p style="margin:0 0 6px;"><strong style="color:#141414;font-weight:600;">Skill Service LTD.</strong> &mdash; Skill Graphics</p>
        <p style="margin:0 0 6px;">H 112, Road 06, Mohakhali DOHS, Dhaka, Bangladesh</p>
        <p style="margin:0;"><a href="mailto:support@skill.ventures">support@skill.ventures</a></p>
      </div>`,
  },
];

const tocHtml = SECTIONS.map(
  (s) => `<a href="#${s.id}" data-pp-toc="${s.id}"><span>${s.num}</span>${s.label}</a>`
).join("");

const bodyHtml = SECTIONS.map(
  (s) => `<section class="pp-sec pp-reveal" id="${s.id}" data-pp-sec="${s.id}">
        <p class="pp-num">${s.num}</p>
        <h2>${s.title}</h2>
        ${s.body}
      </section>`
).join("\n");

export const PRIVACY_HTML = `<div class="privacy-layout">
  ${headerHtml({ subpage: true })}

  <header data-nav-hero style="background:#000;color:#fff;padding:clamp(140px,16vh,190px) clamp(28px,3vw,56px) clamp(56px,7vh,86px);">
    <div style="max-width:1720px;margin:0 auto;">
      <p style="font:600 13px 'Space Grotesk';letter-spacing:.24em;text-transform:uppercase;color:#b98cd0;margin:0 0 22px;">Legal</p>
      <h1 style="font-family:'Archivo';font-weight:900;font-size:clamp(2.6rem,7.4vw,6.4rem);line-height:.96;letter-spacing:-.03em;margin:0;max-width:20ch;">Privacy<br>Policy</h1>
      <div style="display:flex;flex-wrap:wrap;gap:clamp(24px,4vw,64px);margin-top:clamp(36px,5vh,56px);padding-top:26px;border-top:1px solid #1c1c20;">
        <div>
          <p style="font:600 10.5px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#6a6a70;margin:0 0 7px;">Effective</p>
          <p style="font:500 15px 'Space Grotesk';color:#fff;margin:0;">${PRIVACY_EFFECTIVE}</p>
        </div>
        <div>
          <p style="font:600 10.5px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#6a6a70;margin:0 0 7px;">Data controller</p>
          <p style="font:500 15px 'Space Grotesk';color:#fff;margin:0;">Skill Service LTD.</p>
        </div>
        <div>
          <p style="font:600 10.5px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#6a6a70;margin:0 0 7px;">Privacy contact</p>
          <p style="font:500 15px 'Space Grotesk';margin:0;"><a href="mailto:support@skill.ventures" style="color:#fff;text-decoration:none;border-bottom:1px solid #33333a;">support@skill.ventures</a></p>
        </div>
      </div>
    </div>
  </header>

  <main id="main-content" style="max-width:1720px;margin:0 auto;padding:clamp(56px,7vh,88px) clamp(28px,3vw,56px) clamp(72px,9vh,110px);">
    <div class="pp-grid" style="display:grid;grid-template-columns:minmax(0,270px) minmax(0,1fr);gap:clamp(40px,6vw,120px);align-items:start;">
      <div class="pp-toc-wrap" style="position:sticky;top:124px;">
        <p style="font:600 11px 'Space Grotesk';letter-spacing:.2em;text-transform:uppercase;color:#5b5b58;margin:0 0 18px;">Contents</p>
        <nav class="pp-toc" aria-label="Sections"><span class="pp-toc-bar" aria-hidden="true" style="top:0;height:0;"></span>${tocHtml}</nav>
      </div>
      <div class="pp-body" style="max-width:76ch;">
        <p class="pp-reveal" style="font:400 clamp(18px,1.5vw,21px)/1.62 'Space Grotesk';color:#141414;margin:0 0 clamp(36px,4vw,52px);padding-bottom:clamp(36px,4vw,52px);border-bottom:1px solid #d7d7d2;">
          Skill Graphics works with product imagery, campaign footage and brand material every day, most of it belonging to someone else. This policy sets out plainly what personal information we collect through this website and our services, why we hold it, and what you can ask us to do with it.
        </p>
        ${bodyHtml}
      </div>
    </div>
  </main>

  ${homeDesktopFooterHtml({ subpage: true, contactId: false })}
</div>`;
