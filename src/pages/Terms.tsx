import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use — Mokshly"
        description="Contractual terms governing use of the Mokshly website."
      />
      <div className="legal">
        <h1>Terms of Use</h1>
        <p className="updated">Last Updated: January 1, 2026</p>

        <p>Welcome to Mokshly.</p>
        <p>
          Mokshly LLC ("Mokshly," "we," "our," or "us") operates this website
          ("Site") to provide information about our Human Capability
          Infrastructure platform, methodologies, and enterprise offerings.
        </p>
        <p>
          By accessing or using this Site, you agree to these Terms of Use
          ("Terms"). If you do not agree to these Terms, please do not use the
          Site.
        </p>

        <h2 id="about">1. About Mokshly</h2>
        <p>
          Mokshly is a Human Capability Infrastructure company. We provide
          structured frameworks, technology systems, and organizational
          engagement methodologies intended to support consistency, reflection,
          collaboration, and capability development within enterprise
          environments.
        </p>
        <p>
          The public website is informational in nature and is intended
          primarily for business and organizational audiences interested in
          learning about Mokshly's offerings.
        </p>
        <p>
          The enterprise platform and related customer implementations are
          governed separately through customer agreements and are not covered by
          these Terms.
        </p>

        <h2 id="use">2. Use of the Site</h2>
        <p>You may use the Site for lawful personal or business informational purposes only.</p>
        <p>You may:</p>
        <ul>
          <li>View and reference the Site's content;</li>
          <li>Share links to the Site;</li>
          <li>Quote limited excerpts with attribution for commentary, journalism, or internal business discussion.</li>
        </ul>
        <p>You may not:</p>
        <ul>
          <li>Copy, reproduce, or commercially exploit substantial portions of the Site without permission;</li>
          <li>Scrape, mirror, reverse engineer, or systematically extract Site content or data;</li>
          <li>Use automated systems to access the Site in a manner that disrupts operations;</li>
          <li>Attempt to gain unauthorized access to the Site or related systems;</li>
          <li>Use the Site for unlawful, fraudulent, or harmful purposes.</li>
        </ul>

        <h2 id="ip">3. Intellectual Property</h2>
        <p>
          All content on the Site, including but not limited to the Mokshly
          name, YouSourceful, the 5S Framework, the 7 Practices, the Consistency
          Index, the Foursome Peer Structure, text, graphics, design,
          methodologies, software, visual elements, and related materials are
          owned by or licensed to Mokshly LLC and are protected under applicable
          intellectual property laws.
        </p>
        <p>The Mokshly methodology and related frameworks are proprietary intellectual property.</p>
        <p>
          Reading, referencing, and discussing these concepts for legitimate
          informational purposes is welcome. However, reproducing, teaching,
          licensing, commercializing, or incorporating these methodologies into
          competing offerings without written permission is prohibited.
        </p>

        <h2 id="submissions">4. Submissions and Communications</h2>
        <p>
          If you contact Mokshly through the Leadership Conversation form,
          email, or other communications, you grant Mokshly permission to use
          the submitted information for the purpose of responding to you,
          evaluating potential engagements, maintaining records of
          communications, and operating our business.
        </p>
        <p>
          You should not submit confidential, proprietary, medical, legal, or
          highly sensitive information through the public contact form.
        </p>

        <h2 id="non-reliance">5. Non-Reliance and Informational Nature of Content</h2>
        <p>The content on this Site is provided for general informational purposes only.</p>
        <p>
          Nothing on the Site constitutes medical advice, mental health
          treatment, psychotherapy, counseling, legal advice, financial advice,
          or clinical services of any kind.
        </p>

        <h2 id="guarantees">6. No Guarantees</h2>
        <p>
          The Site and all content are provided "as is" and "as available,"
          without warranties of any kind, express or implied.
        </p>

        <h2 id="third-party">7. Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites or resources.
          Mokshly is not responsible for the content or practices of third-party
          sites.
        </p>

        <h2 id="liability">8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Mokshly shall not be liable
          for any indirect, incidental, consequential, special, exemplary, or
          punitive damages arising from or related to your use of the Site.
        </p>

        <h2 id="indemnification">9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Mokshly and its affiliates
          from claims arising out of your misuse of the Site or violation of
          these Terms.
        </p>

        <h2 id="modifications">10. Modifications to the Site or Terms</h2>
        <p>
          Mokshly may modify the Site or these Terms at any time. Updated Terms
          will be posted with a revised "Last Updated" date.
        </p>

        <h2 id="privacy">11. Privacy</h2>
        <p>
          Your use of the Site is also governed by our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2 id="law">12. Governing Law</h2>
        <p>These Terms shall be governed by the laws of the State of California.</p>

        <h2 id="contact">13. Contact</h2>
        <p>Mokshly LLC</p>
        <p>
          <a href="mailto:support@mokshly.com">support@mokshly.com</a>
        </p>
      </div>
    </>
  );
}
