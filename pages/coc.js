import React from "react";
import { css } from "@emotion/core";
import Page from "../components/Page";
import { buttonCss } from "../components/Button";

export default function Coc() {
  return (
    <Page title="Code of Conduct">
      <h1>Code of Conduct</h1>
      <p>Guidelines to follow.</p>
      <dl>
        <h2>Summary</h2>
        <dd>
          Gig City Elixir is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, sexual orientation, disability, physical appearance, body
          size, race, age or religion.
        </dd>
        <dd>
          We do not tolerate harassment of conference participants in any form.
          Sexual language and imagery is not appropriate for any conference
          venue, including talks. Conference participants violating these rules
          may be sanctioned or expelled from the conference without a refund at
          the discretion of the conference organizers.{" "}
        </dd>
      </dl>
      <dl>
        <dd>
          Harassment includes, but is not limited to:
          <ul>
            <li>
              Verbal comments that reinforce social structures of domination
              related to gender, gender identity and expression, sexual
              orientation, disability, physical appearance, body size, race,
              age, religion.
            </li>
            <li>Sexual images in public spaces</li>
            <li>Deliberate intimidation, stalking, or following&nbsp;</li>
            <li>Harassing photography or recording</li>
            <li>Sustained disruption of talks or other events</li>
            <li>Inappropriate physical contact</li>
            <li>Unwelcome sexual attention</li>
            <li>Advocating for, or encouraging, any of the above behaviour</li>
          </ul>
        </dd>
      </dl>
      <h2>Enforcement</h2>
      <dl>
        <dd>
          Participants asked to stop any harassing behavior are expected to
          comply immediately
        </dd>
      </dl>
      <dl>
        <dd>
          Exhibitors in the expo hall, sponsor or vendor booths, or similar
          activities are also subject to the anti-harassment policy. In
          particular, exhibitors should not use sexualized images, activities,
          or other material. Booth staff (including volunteers) should not use
          sexualized clothing/uniforms/costumes, or otherwise create a
          sexualized environment.
        </dd>
      </dl>
      <dl>
        <dd>
          If a participant engages in harassing behaviour, event organisers
          retain the right to take any actions to keep the event a welcoming
          environment for all participants. This includes warning the offender
          or expulsion from the conference with no refund.
        </dd>
      </dl>
      <dl>
        <dd>
          Event organisers may take action to redress anything designed to, or
          with the clear impact of, disrupting the event or making the
          environment hostile for any participants.
        </dd>
      </dl>
      <dl>
        <dd>
          We expect participants to follow these rules at all event venues and
          event-related social activities. We think people should follow these
          rules outside event activities too!
        </dd>
        <dd />
      </dl>
      <h2>Reporting</h2>
      <dl>
        <dd>
          If someone makes you or anyone else feel unsafe or unwelcome, please
          report it as soon as possible. Conference staff can be identified by
          t-shirts/special badges. Harassment and other code of conduct
          violations reduce the value of our event for everyone.&nbsp;We want
          you to be happy at our event. People like you make our event a better
          place.
        </dd>
      </dl>
      <dl>
        <dd>You can make a report either personally or anonymously.</dd>
      </dl>
      <h3>Anonymous Report</h3>
      <dl>
        <dd>
          You can make an anonymous report here that DOES NOT require an email
          address to submit.
          <form
            name="coc-page"
            action="/thank-you"
            method="POST"
            css={css`
              margin-top: 2rem;
            `}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="coc-page" />
            <label className="ff-odudomono-sb">
              Message:
              <textarea
                css={css`
                  border-width: 2px;
                `}
                name="message"
                rows="6"
                required
              />
            </label>
            <div data-netlify-recaptcha="true" />
            <button css={buttonCss} type="submit">
              Send
            </button>
          </form>
        </dd>
      </dl>
      <dl>
        <dd>
          We can't follow up an anonymous report with you directly, but we will
          fully investigate it and take whatever action is necessary to prevent
          a recurrence.
        </dd>
      </dl>
      <h3>Personal Report</h3>
      <dl>
        <dd>You can make a personal report by:</dd>
      </dl>
      <dl>
        <dd>
          <ul>
            <li>
              Calling or texting this phone number:{" "}
              <a href="tel:512-350-7120">512-350-7120</a>. This phone number
              will be continuously monitored for the duration of the event.
            </li>
            <li>
              Contacting a staff member, identified by STAFF badges, buttons, or
              shirts.
            </li>
          </ul>
        </dd>
        <dd>
          When taking a personal report, our staff will ensure you are safe and
          cannot be overheard. They may involve other event staff to ensure your
          report is managed properly. Once safe, we'll ask you to tell us about
          what happened. This can be upsetting, but we'll handle it as
          respectfully as possible, and you can bring someone to support you.
          You won't be asked to confront anyone and we won't tell anyone who you
          are.
        </dd>
      </dl>
      <dl>
        <dd>
          Our team will be happy to help you contact hotel/venue security, local
          law enforcement, local support services, provide escorts, or otherwise
          assist you to feel safe for the duration of the event. We value your
          attendance.
        </dd>
      </dl>
      <dl>
        <dd>
          Organizers' email:{" "}
          <a href="mailto:organizers@gigcityelixir.com">
            organizers@gigcityelixir.com
          </a>
        </dd>
        <dd>
          Organizers' phone: <a href="tel:512-350-7120">512-350-7120</a>
        </dd>
        <dd>
          Police Dept: <a href="tel:423-698-2525">423-698-2525</a>
        </dd>
        <dd>
          Partnership Rape Crisis Center:{" "}
          <a href="tel:423-755-2700">423-755-2700</a>
        </dd>
        <dd>
          Emergencies: <a href="tel:911">911</a>
        </dd>
        <dd>
          Nooga Taxi: <a href="tel:423-458-2701">423-458-2701</a>
        </dd>
      </dl>{" "}
    </Page>
  );
}
